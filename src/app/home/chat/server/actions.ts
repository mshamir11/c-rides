import { z } from "zod";
import { UserSchema } from "@/app/lib/schema/generalSchema";

const MessageSchema = z.object({
  message: z.string(),
  channelId: z.string(),
  timeStamp: z.date(),
  author: UserSchema,
});

const Message = MessageSchema.omit({
  author: true,
});

export type IMessage = z.TypeOf<typeof Message>;

// TODO: boilerplate for creating message
export async function createMessage(message: string) {}

// TODO: boilerplate for getting messages for a channel from db
export async function getMessagesForAChannel(channelId: string) {}
