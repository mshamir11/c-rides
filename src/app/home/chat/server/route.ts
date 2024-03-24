import pusher from "@/app/lib/pusherSenderConfig";

export async function POST(request: Request) {
  const res = await request.json();
  try {
    const { channelName, eventName, message } = res;
    await pusher.trigger(channelName, eventName, { message });
    console.log("Message send from server successfully");
  } catch (error) {
    console.error("Error sending message to Pusher:", error);
  }
  return Response.json({ res });
}
