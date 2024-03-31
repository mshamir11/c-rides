"use client";
import Link from "next/link";
import {
  getMyRides,
  IRide,
  State,
  getUnjoinedRides,
  joinARide,
  dropRideFromUser,
} from "@/app/lib/actions";
import { useState } from "react";
import { join } from "path";
import { Table } from "../components/Table";

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
    const updatedRides = [...allRides];
    const rideIndex = updatedRides.findIndex((ride) => ride.id === rideId);
    if (rideIndex !== -1) {
      updatedRides.splice(rideIndex, 1);
      setAllRides(updatedRides);
    }
  };

  const handleDropRide = async (rideId: string) => {
    await dropRideFromUser(rideId);
    const updatedRides = [...myRides];
    const rideIndex = updatedRides.findIndex((ride) => ride.id === rideId);
    if (rideIndex !== -1) {
      updatedRides.splice(rideIndex, 1);
      setMyRides(updatedRides);
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
            <Table
              rides={myRides}
              onSubmit={handleDropRide}
              cancelRide={true}
            />
          )}

          {allRides.length > 0 && showAllRides && (
            <Table rides={allRides} onSubmit={handleJoinRide} joinRide={true} />
          )}
        </div>
      </div>
    );
  };

  return getLandingPageForRegisteredUsers();
}
