"use client";
import Link from "next/link";
import {
  getMyRides,
  IRide,
  State,
  getUnjoinedRides,
  joinARide,
} from "@/app/lib/actions";
import { useState } from "react";
import { join } from "path";

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
    const allRidesAvailable: IRide[] | State = await getUnjoinedRides();
    if (Array.isArray(allRidesAvailable)) {
      setAllRides(allRidesAvailable);
      setShowAllRides(!showAllRides);
      setshowMyRides(false);
    }
  };

  const handleJoinRide = async (rideId: string) => {
    await joinARide(rideId);
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
                  {myRides.map((ride, index) => (
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
                <h1 className="font-bold text-2xl my-4">
                  Rides available around you
                </h1>

                <div className="flex justify-center">
                  <table className="table-fixed w-full text-center border-collapse border border-slate-400">
                    <thead>
                      <tr>
                        <th className="border border-slate-300">Ride Number</th>
                        <th className="border border-slate-300">Ride Name</th>
                        <th className="border border-slate-300">
                          Destination Location
                        </th>
                        <th className="border border-slate-300">
                          Trip Duration
                        </th>
                        <th className="border border-slate-300"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {allRides.map((ride, index) => (
                        <tr key={ride.id} className="border border-slate-300">
                          <td className="border border-slate-300">{index}</td>
                          <td className="border border-slate-300">
                            {" "}
                            {ride.rideName}
                          </td>
                          <td className="border border-slate-300">
                            {ride.destinationLocation}
                          </td>
                          <td className="border border-slate-300">
                            {ride.tripDuration}
                          </td>
                          <td>
                            <button
                              className="w-36 h-10 border-2 border-black justify-center items-center rounded-md bg-slate-200 my-2"
                              onClick={() => handleJoinRide(ride.id)}
                            >
                              Join this ride
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div></div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return getLandingPageForRegisteredUsers();
}
