import { z } from "zod";
import { UserSchema } from "@/app/lib/schema/generalSchema";
import prismaClient from "@/app/lib/prismaClient";
import { getUser } from "@/app/lib/actions";
import { auth } from "@/app/lib/auth";
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

export async function createMessage(message: string, channelId: string) {
  try {
    const session: any = await auth();
    const validatedUser = UserSchema.safeParse({
      name: session.user.name,
      email: session.user.email,
      image: session.user?.image,
    });

    if (!validatedUser.success) {
      return {
        errors: validatedUser.error.flatten().fieldErrors,
        message: "Failed to create a new message, corrupt user information",
      };
    }

    const user = await getUser(validatedUser.data.email);

    const newMessage = await prismaClient.message.create({
      data: {
        message: message,
        channelId: channelId,
        userId: user.id,
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
        timestamp: "desc",
      },
    });
    return messages;
  } catch (error) {
    console.error("Error fetching messages for channel:", channelId, error);
    throw error;
  }
}
