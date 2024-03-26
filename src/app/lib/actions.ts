"use server";
import { z } from "zod";
import { auth } from "./auth";
import prismaClient from "./prismaClient";
import { UserSchema, RideSchema } from "./schema/generalSchema";



const Ride = RideSchema.omit({
  createdBy: true,
});

export type IRide = z.TypeOf<typeof Ride>;

const CreateRideSchema = RideSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  createdBy: true,
});

export type State = {
  errors?: {
    rideName?: string[];
    destinationLocation?: string[];
    startLocation?: string[];
    startDate?: string[];
    tripDuration?: string[];
    databaseError?: string;
    name?: string[];
    email?: string[];
  };
  message?: string | null;
};

/**
 * Creates a new ride in the database.
 * @param prevState - The previous state object containing any existing errors and messages.
 * @param formData - The form data containing the ride information.
 * @returns A promise that resolves to an object containing the error information (if any) and a success or failure message.
 */
export async function createRide(
  prevState: State | void,
  formData: FormData
): Promise<State | void> {
  try {
    const validatedFields = CreateRideSchema.safeParse({
      rideName: formData.get("rideName"),
      destinationLocation: formData.get("destinationLocation"),
      startLocation: formData.get("startLocation"),
      startDate: formData.get("startDate"),
      tripDuration: formData.get("tripDuration"),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: "Failed to create a new ride",
      };
    }

    const session: any = await auth();
    const validatedUser = UserSchema.safeParse({
      name: session.user.name,
      email: session.user.email,
      image: session.user?.image,
    });

    if (!validatedUser.success) {
      return {
        errors: validatedUser.error.flatten().fieldErrors,
        message: "Failed to create a new ride, corrupt user information",
      };
    }

    const user = await getUser(validatedUser.data.email);
    const newRide = await prismaClient.ride.create({
      data: {
        rideName: validatedFields.data.rideName,
        destinationLocation: validatedFields.data.destinationLocation,
        startLocation: validatedFields.data.startLocation,
        tripDuration: validatedFields.data.tripDuration,
        userId: user.id,
      },
    });

    console.log(
      `New ride created successfully for the user: ${user.id} with rideId: ${newRide.id}`
    );

    return {
      errors: {},
      message: "New ride created successfully",
    };
  } catch (error) {
    console.log("Error creating ride for the user:", error);
    return {
      errors: {
        databaseError: "Error in creating new ride. Database internal error",
      },
      message: "Error in creating new ride. Database internal error",
    };
  }
}

export async function getUser(email: string) {
  const user = await prismaClient.user.findUniqueOrThrow({
    where: {
      email: email,
    },
    include: {
      ridesCreated: true,
      ridesJoined: true,
    },
  });
  return user;
}

export async function getMyRides(): Promise<State | IRide[]> {
  const session: any = await auth();
  const validatedUser = UserSchema.safeParse({
    name: session.user.name,
    email: session.user.email,
    image: session.user?.image,
  });
  if (!validatedUser.success) {
    return {
      errors: validatedUser.error.flatten().fieldErrors,
      message: "Failed to create a new ride, corrupt user information",
    };
  }
  const user = await getUser(validatedUser.data.email);
  return [...user.ridesCreated, ...user.ridesJoined];
}

export async function getAllRides(): Promise<State | IRide[]> {
  const rides = await prismaClient.ride.findMany();
  return rides;
}

/**
 * Retrieves unjoined rides for a given user.
 *
 * @param {string} userId - The ID of the user.
 * @returns {Promise<IRide[]>} A promise that resolves to an array of unjoined rides.
 * @throws {Error} When there is an issue with the database query.
 */
const getUnjoinedRidesForUser = async (userId: string): Promise<IRide[]> => {
  try {
    const unjoinedRides = await prismaClient.ride.findMany({
      where: {
        userId: {
          not: userId, // Filter out rides created by the user
        },
        usersJoined: {
          none: { id: userId }, // Filter out rides that the user has joined
        },
      },
    });

    return unjoinedRides;
  } catch (error) {
    throw new Error(`Failed to retrieve unjoined rides: ${error}`);
  }
};

/**
 * Joins a ride with the specified user.
 *
 * @param {string} rideId - The ID of the ride to join.
 * @param {string} email - The email of the user joining the ride.
 * @returns {Promise<any>} - A promise that resolves to the updated ride object.
 * @throws {Error} - If there is an error joining the ride.
 */
const joinARideWithUser = async (rideId: string, email: string) => {
  try {
    const updatedRide = await prismaClient.ride.update({
      where: { id: rideId },
      data: {
        usersJoined: {
          connect: { email: email },
        },
      },
    });

    console.log(`User ${email} joined ride ${rideId}`);
    return updatedRide;
  } catch (error) {
    console.log("Error joining ride for the user:", error);
    throw error;
  }
};

/**
 * Joins a ride with the given ride ID.
 *
 * @param {string} rideId - The ID of the ride to join.
 * @returns {Promise<Object>} - A promise that resolves to the updated ride object if successful, or an error object if unsuccessful.
 */
export async function joinARide(rideId: string) {
  const session: any = await auth();
  const validatedUser = UserSchema.safeParse({
    name: session.user.name,
    email: session.user.email,
    image: session.user?.image,
  });
  if (!validatedUser.success) {
    return {
      errors: validatedUser.error.flatten().fieldErrors,
      message: "Failed to create a new ride, corrupt user information",
    };
  }
  const updatedRide = await joinARideWithUser(rideId, validatedUser.data.email);
}

/**
 * Retrieves unjoined rides for a user.
 * 
 * @returns {Promise<IRide[] | State>} A promise that resolves to an array of unjoined rides or a state object.
 */
export async function getUnjoinedRides(): Promise<IRide[] | State> {
  const session: any = await auth();
  const validatedUser = UserSchema.safeParse({
    name: session.user.name,
    email: session.user.email,
    image: session.user?.image,
  });
  if (!validatedUser.success) {
    return {
      errors: validatedUser.error.flatten().fieldErrors,
      message: "Failed to create a new ride, corrupt user information",
    };
  }
  const user = await getUser(validatedUser.data.email);
  return getUnjoinedRidesForUser(user.id);
}

/**
 * Drops a ride from the user's list of joined rides.
 * 
 * @param {string} rideId - The ID of the ride to be dropped.
 * @returns {Promise<{errors: object, message: string}>} - A promise that resolves to an object containing any errors and a message.
 */
export async function dropRideFromUser(rideId: string) {
  const session: any = await auth();
  const validatedUser = UserSchema.safeParse({
    name: session.user.name,
    email: session.user.email,
    image: session.user?.image,
  });
  if (!validatedUser.success) {
    return {
      errors: validatedUser.error.flatten().fieldErrors,
      message: "Failed to drop the ride, corrupt user information",
    };
  }

  // TODO: Get user id from session
  const user = await getUser(validatedUser.data.email);

  try {
    const updatedUser = await prismaClient.user.update({
      where: { id: user.id },
      data: {
        ridesJoined: {
          disconnect: { id: rideId },
        },
      },
    });
    console.log(`User ${user.id} dropped ride ${rideId}`);
  } catch (error) {
    console.log("Error dropping ride for the user:", error);
    return {
      errors: {
        databaseError: "Error in dropping ride. Database internal error",
      },
      message: "Error in dropping ride. Database internal error",
    };
  }
}