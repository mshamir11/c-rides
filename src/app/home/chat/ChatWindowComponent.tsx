import { useEffect, useRef, useState } from "react";
import { sendMessageToServer, getMessagesFromServer } from "./server/chatUtils";
import pusher from "@/app/lib/pusherReceiverConfig";
import { getMessagesForAChannel, IMiniMessage } from "./server/actions";

type ChatProps = {
  channelId: string;
};

// TODO : Fix bug, of not unsubscribing to the channel when not in use

// TODO: Add user name associated with the message send
const ChatWindowComponent: React.FC<ChatProps> = ({ channelId }) => {
  const [messages, setMessages] = useState<IMiniMessage[]>([]);
  const [currMessage, setCurrentMessage] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMessage(event.target.value);
  };

  const sendMessage = () => {
    sendMessageToServer(channelId, "new-message", currMessage);
    setCurrentMessage("");
  };

  useEffect(() => {
    const channel = pusher.subscribe(channelId);

    channel.bind("new-message", (data: { message: IMiniMessage }) => {
      console.log(data);
      setMessages([...messages, data.message]);
    });
  });

  useEffect(() => {
    getMessagesFromServer(channelId)
      .then((fetchedMessages) => {
        if (fetchedMessages != null) {
          setMessages(fetchedMessages);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch messages:", error);
      });
  }, [channelId]);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      const chatContainer = chatContainerRef.current;
      const scrollHeight = chatContainer.scrollHeight;
      const currentScroll = chatContainer.scrollTop;
      const targetScroll = scrollHeight - chatContainer.clientHeight;

      const animateScroll = (timestamp: number) => {
        const elapsed = timestamp - startTime;
        const progress = elapsed / duration;
        const ease =
          progress < 0.5
            ? 2 * progress * progress
            : -1 + (4 - 2 * progress) * progress;

        chatContainer.scrollTop =
          currentScroll + (targetScroll - currentScroll) * ease;

        if (elapsed < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      const duration = 500; // Adjust animation duration as needed
      const startTime = performance.now();

      requestAnimationFrame(animateScroll);
    }
  }, [messages]);

  return (
    <div className="h-[80vh] w-[80vh] border-2 border-black">
      <div className="h-[10vh] border-black border-b-2">
        <h1 className="text-xl font-bold">{channelId}</h1>
      </div>
      <div
        className="h-[60vh] border-black border-b-2 overflow-y-scroll"
        ref={chatContainerRef}
      >
        {messages && (
          <ul>
            {messages.map((messageObject: IMiniMessage, i: number) => {
              return (
                <li key={i}>
                  {messageObject.userId}:{messageObject.message}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="h-[10vh] flex justify-evenly items-center">
        <div>
          <input
            className="border-2 border-black w-[300px]"
            type="text"
            placeholder="Enter your message"
            value={currMessage}
            onChange={handleChange}
          />
        </div>
        <button
          className="border-2 border-black w-[100px]"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindowComponent;
