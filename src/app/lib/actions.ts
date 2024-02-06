"use server";
import { z } from "zod";
import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

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
  };
  message?: string | null;
};

export async function createRide(
  prevState: State | void,
  formData: FormData
): Promise<State | void> {
  const validatedFields = CreateRideSchema.safeParse({
    rideName: formData.get("rideName"),
    destinationLocation: formData.get("destinationLocation"),
    startLocation: formData.get("startLocation"),
    startDate: formData.get("startDate"),
    tripDuration: formData.get("tripDuration"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Failed to create a new ride",
    };
  } else {
    let messageString = "";
    let errorString = "";
    try {
      const user = await getUser();
      const newRide = await prisma.ride.create({
        data: {
          rideName: validatedFields.data.rideName,
          destinationLocation: validatedFields.data.destinationLocation,
          startLocation: validatedFields.data.startLocation,
          tripDuration: validatedFields.data.tripDuration,
          userId: user.id,
        },
      });
      messageString = "New ride created successfully";
      console.log(
        `New ride created successfully for the user : ${user.id} with rideId : ${newRide.id}`
      );
    } catch (error) {
      console.log("error creating ride for the user: ", error);
      messageString = "Error in creating new ride. Database internal error";
    } finally {
      return {
        errors:
          errorString.trim().length === 0 ? {} : { databaseError: errorString },
        message: messageString,
      };
    }
  }
}

export async function getUser() {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      email: "test1@gmail.com",
    },
  });
  return user;
}

export async function showMyRides() {
  console.log("Show my rides");
}