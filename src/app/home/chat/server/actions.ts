import { z } from "zod";
import { UserSchema } from "@/app/lib/schema/generalSchema";
import prismaClient from "@/app/lib/prismaClient";
import { getUser } from "@/app/lib/actions";
import { auth } from "@/app/lib/auth";
const MessageSchema = z.object({
  message: z.string(),
  channelId: z.string().optional(),
  timestamp: z.date(),
  author: UserSchema,
  userId: z.string(),
});

const Message = MessageSchema.omit({
  author: true,
});

const MiniMessage = MessageSchema.omit({
  author: true,
});

export type IMessage = z.TypeOf<typeof Message>;
export type IMiniMessage = z.TypeOf<typeof MiniMessage>;

export async function createMessage(
  message: string,
  channelId: string,
  userId: string
) {
  try {
    const newMessage = await prismaClient.message.create({
      data: {
        message: message,
        channelId: channelId,
        userId: userId,
      },
    });
    console.log("message created successfull with id :", newMessage.id);
  } catch (error) {
    console.error("Error creating message:", error);
    throw error;
  }
}

export async function getMessagesForAChannel(channelId: string) {
  try {
    const messages = await prismaClient.message.findMany({
      where: {
        channelId: channelId,
      },
      orderBy: {
        timestamp: "asc",
      },
    });
    return messages;
  } catch (error) {
    console.error("Error fetching messages for channel:", channelId, error);
    throw error;
  }
}
