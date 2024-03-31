"use client";
import Search from "@/app/components/Search";
import { Table } from "@/app/components/Table";
import {
  getRidesWithQuery,
  getUnjoinedRides,
  IRide,
  joinARide,
  State,
} from "@/app/lib/actions";
import { Suspense, useEffect, useState } from "react";

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  const [allRides, setAllRides] = useState<IRide[]>([]);
  const [showAllRides, setShowAllRides] = useState(false);

  const handleJoinRide = async (rideId: string) => {
    await joinARide(rideId);
    const updatedRides = [...allRides];
    const rideIndex = updatedRides.findIndex((ride) => ride.id === rideId);
    if (rideIndex !== -1) {
      updatedRides.splice(rideIndex, 1);
      setAllRides(updatedRides);
    }
  };

  useEffect(() => {
    const getRides = async () => {
      const searhResults: IRide[] | State = await getRidesWithQuery(query);
      if (Array.isArray(searhResults)) {
        setAllRides(searhResults);
      }
    };
    getRides().then();
  }, [query]);

  return (
    <main>
      <div className=" flex justify-center mt-10 ">
        <div className=" w-full mx-10">
          <h1 className=" text-center text-4xl">Community Rides</h1>
          <div className="mt-10 ">
            <Search placeholder="Find your ride" />
          </div>
          <div className="">
            {allRides.length > 0 && (
              <Table
                rides={allRides}
                onSubmit={handleJoinRide}
                joinRide={true}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
