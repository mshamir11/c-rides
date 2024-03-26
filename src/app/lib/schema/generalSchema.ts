import { z } from "zod";

const UserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  image: z.string().url().optional(),
});

const RideSchema = z.object({
  id: z.string(),
  rideName: z.string().trim().min(3),
  destinationLocation: z.string().trim().min(3),
  startLocation: z.string().trim().min(3),
  startDate: z.coerce.date(),
  tripDuration: z.coerce.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  createdBy: UserSchema,
  userJoined: z.array(UserSchema).optional(),
});

export { UserSchema, RideSchema };
