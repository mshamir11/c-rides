import { useEffect, useState } from "react";
import sendMessageToServer from "../../designsketches/sender/chatSender";
import pusher from "@/app/lib/pusherReceiverConfig";

type ChatProps = {
  channelId: string;
};

// TODO: Add user name associated with the message send
const ChatWindowComponent: React.FC<ChatProps> = ({ channelId }) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [currMessage, setCurrentMessage] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMessage(event.target.value);
  };

  const sendMessage = () => {
    sendMessageToServer(channelId, "new-message", currMessage);
  };

  useEffect(() => {
    const channel = pusher.subscribe(channelId);

    channel.bind("new-message", (data: { message: string }) => {
      setMessages([...messages, data.message]);
    });
  });

  useEffect(() => {
    setMessages([]);
  }, [channelId]);

  return (
    <div className="h-[80vh] w-[80vh] border-2 border-black">
      <div className="h-[10vh] border-black border-b-2">
        <h1 className="text-xl font-bold">{channelId}</h1>
      </div>
      <div className="h-[60vh] border-black border-b-2">
        {messages && (
          <ul>
            {messages.map((message: string, i: number) => {
              return <li key={i}>{message}</li>;
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
