"use client";
import { IRide, State, getMyRides } from "@/app/lib/actions";
import { useEffect, useState } from "react";
import ChatWindowComponent from "./ChatWindowComponent";

export default function Chat() {
  const [myRides, setMyRides] = useState<IRide[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [currentChannel, setCurrentChannel] = useState<string>();

  useEffect(() => {
    const getRidesJoined = async () => {
      try {
        const ridesJoined: IRide[] | State = await getMyRides();
        if (Array.isArray(ridesJoined)) {
          setMyRides(ridesJoined);
        }
      } catch {
        console.error("Error getting myRides for the user");
      }
    };
    getRidesJoined();
  }, []);

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      setInputValue(""); // Clear the input after submitting
    }
  };

  const setChatChannel = (channelId: string) => {
    setCurrentChannel(channelId);
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Chats</h1>
      <div className="grid grid-cols-2 mt-10">
        <div className="border-2">
          {myRides.length > 0 &&
            myRides.map((ride, index) => (
              <ul key={index}>
                <button
                  className="border-b-2"
                  onClick={() => {
                    setChatChannel(ride.id);
                  }}
                >
                  {ride.id}{" "}
                </button>
              </ul>
            ))}
        </div>
        <div className="">
          {currentChannel && <ChatWindowComponent channelId={currentChannel} />}
        </div>
      </div>
    </div>
  );
}
