"use server";
import { z } from "zod";
import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

const RideSchema = z.object({
  id: z.string(),
  rideName: z.string(),
  destinationLocation: z.string(),
  startLocation: z.string(),
  startDate: z.string(),
  tripDuration: z.string(),
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
  };
  message?: string | null;
};

export async function createRide(
  prevState: State | void,
  formData: FormData
): Promise<State | void> {
  console.log("im here", prevState);
  const validatedFields = CreateRideSchema.safeParse({
    rideName: formData.get("rideName"),
    destinationLocation: formData.get("destinationLocation"),
    startLocation: formData.get("startLocation"),
    startDate: formData.get("startDate"),
    tripDuration: formData.get("tripDuration"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    console.log("mshamirt: im inside if");
    console.log(
      "mshamirt: validatedFieldsErrors:",
      validatedFields.error.flatten().fieldErrors
    );
  }

  try {
    const user = await getUser();
    console.log("got user detatils: user: ", user);
    const newRide = await prisma.ride.create({
      data: {
        rideName: "test1",
        destinationLocation: "destinationLocatoin1",
        startLocation: "startLocation1",
        tripDuration: 1,
        userId: user.id,
      },
    });
    console.log("new Ride created:", newRide);
  } catch (error) {
    console.log("error creating ride: ", error);
  }
  return {};
}

export async function getUser() {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      email: "test1@gmail.com",
    },
  });
  return user;
}