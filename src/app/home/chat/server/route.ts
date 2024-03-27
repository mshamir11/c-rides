import pusher from "@/app/lib/pusherSenderConfig";
import { createMessage, IMiniMessage } from "./actions";
import { auth } from "@/app/lib/auth";
import { UserSchema } from "@/app/lib/schema/generalSchema";
import { getUser } from "@/app/lib/actions";

export async function POST(request: Request) {
  const res = await request.json();
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
    const { channelName, eventName, text } = res;
    const message: IMiniMessage = {
      message: text,
      userId: user.id,
      timestamp: new Date(),
    };
    await pusher.trigger(channelName, eventName, { message });
    console.log("Message send from server successfully");
    await createMessage(text, channelName, user.id);
  } catch (error) {
    console.error("Error sending message to Pusher:", error);
  }
  return Response.json({ res });
}


