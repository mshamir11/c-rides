"use client";
import { auth } from "@/app/lib/auth";
import { redirect } from "next/navigation";
import { SIGN_IN_URL } from "@/app/utils/constants";
import Link from "next/link";
import { getAllRides, getMyRides, IRide, State } from "@/app/lib/actions";
import { useState } from "react";

export default function Home() {
  const [myRides, setMyRides] = useState<IRide[]>([]);
  const [allRides, setAllRides] = useState<IRide[]>([]);

  const [showMyRides, setshowMyRides] = useState(false);
  const [showAllRides, setShowAllRides] = useState(false);

  const handleShowMyRides = async () => {
    const ridesJoined: IRide[] | State = await getMyRides();
    if (Array.isArray(ridesJoined)) {
      setMyRides(ridesJoined);
      setshowMyRides(!showMyRides);
      setShowAllRides(false);
    }
  };

  const handleShowAllRides = async () => {
    const allRidesAvailable: IRide[] | State = await getAllRides();
    if (Array.isArray(allRidesAvailable)) {
      setAllRides(allRidesAvailable);
      setShowAllRides(!showAllRides);
      setshowMyRides(false);
    }
  };

  const getLandingPageForRegisteredUsers = () => {
    return (
      <div className="flex justify-center">
        <div className="flex flex-col container mx:auto justify-center my-4">
          <h1 className="text-2xl font-bold text-center">Community Rides</h1>
          <br />
          <hr />
          <div className="flex h-16 justify-center  items-center space-x-4">
            <Link
              href="/home/rides/create"
              className="flex p-4 w-32 h-10 border-2 border-black justify-center items-center rounded-md"
            >
              Create Ride
            </Link>
            <button className="flex p-4 w-32 h-10 border-2 border-black justify-center items-center rounded-md">
              Join Ride
            </button>
            <button
              className="flex p-4 w-40 h-10 border-2 border-black justify-center items-center rounded-md"
              onClick={() => handleShowMyRides()}
            >
              Show my rides
            </button>
            <button
              className="flex p-4 w-40 h-10 border-2 border-black justify-center items-center rounded-md"
              onClick={() => handleShowAllRides()}
            >
              Show All rides
            </button>
          </div>

          {myRides.length > 0 && showMyRides && (
            <div>
              <br />
              <hr />
              <div>
                My rides
                <div>
                  {myRides.map((ride) => (
                    <div key={ride.id}>
                      <p>ID: {ride.id}</p>
                      <p>Ride Name: {ride.rideName}</p>
                      <p>Destination Location: {ride.destinationLocation}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {allRides.length > 0 && showAllRides && (
            <div>
              <br />
              <hr />
              <div>
                Rides available around you
                <div>
                  {allRides.map((ride) => (
                    <div key={ride.id}>
                      <p>ID: {ride.id}</p>
                      <p>Ride Name: {ride.rideName}</p>
                      <p>Destination Location: {ride.destinationLocation}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return getLandingPageForRegisteredUsers();
}
