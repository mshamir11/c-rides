"use server";
import { z } from "zod";

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

export async function createRide(prevState: State, formData: FormData) {
  console.log("im here");
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
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Failed to create ride"',
    };
  }

  return { errors: {}, message: "test" };
}