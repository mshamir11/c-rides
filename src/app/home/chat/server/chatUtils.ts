import React from "react";
import { IMessage } from "./actions";

const sendMessageToServer = async (
  channelName: string,
  eventName: string,
  text: string
) => {
  try {
    const response = await fetch("/home/chat/server", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ channelName, eventName, text }),
    });

    if (!response.ok) {
      throw new Error("Failed to send message to server");
    }

    // Handle successful response if needed
  } catch (error) {
    console.error("Error sending message to server:", error);
    // Handle error as needed
  }
};

const getMessagesFromServer = async (
  channelId: string
): Promise<IMessage[] | undefined> => {
  try {
    const url = new URL("/home/chat/server/messages", window.location.origin);
    url.searchParams.append("channelId", channelId);

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to send message to server");
    } else {
      const messages: IMessage[] = await response.json();
      return messages;
    }

    // Handle successful response if needed
  } catch (error) {
    console.error("Error sending message to server:", error);
    // Handle error as needed
  }
};

export { sendMessageToServer, getMessagesFromServer };
