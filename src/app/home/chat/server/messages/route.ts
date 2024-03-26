import { getMessagesForAChannel } from "../actions";

export async function GET(request: Request) {
  const url = new URL(request.url);

  const channelId = url.searchParams.get("channelId");

  if (!channelId) {
    console.error("channelId is required in query parameters.");
    return new Response(
      JSON.stringify({ error: "channelId is required in query parameters." }),
      { status: 400 }
    );
  }

  try {
    const messages = await getMessagesForAChannel(channelId);
    return new Response(JSON.stringify(messages), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error getting messages from server:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch messages." }),
      { status: 500 }
    );
  }
}
