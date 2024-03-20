"use client";
import { IRide, State, getMyRides } from "@/app/lib/actions";
import { useEffect, useState } from "react";

// TODO: Add case when user has not joined any rides.
export default function Chat() {
  const [myRides, setMyRides] = useState<IRide[]>([]);

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

  return (
    <div>
      <h1 className="text-xl font-bold">Chats</h1>
      <div className="grid grid-cols-2 mt-10">
        <div className="border-2">
          {myRides.length > 0 &&
            myRides.map((ride, index) => (
              <ul key={index}>
                <li className="border-b-2">{ride.id}</li>
              </ul>
            ))}
        </div>
        <div className="">Here each chats</div>
      </div>
    </div>
  );
}
