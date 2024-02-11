"use server";
import { z } from "zod";
import { auth } from "./auth";
import prismaClient from "./prismaClient";

const RideSchema = z.object({
  id: z.string(),
  rideName: z.string().trim().min(3),
  destinationLocation: z.string().trim().min(3),
  startLocation: z.string().trim().min(3),
  startDate: z.coerce.date(),
  tripDuration: z.coerce.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  createdBy: z.string(),
});

const UserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  image: z.string().url().optional(),
});

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

export async function showMyRides() {
  const emailId = "test1@gmail.com";
  const user = await getUser(emailId);
  return [...user.ridesCreated, ...user.ridesJoined];
}
