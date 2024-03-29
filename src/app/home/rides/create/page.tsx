"use client";

import { createRide } from "@/app/lib/actions";
import { useFormState } from "react-dom";

export default function CreateRidePage() {
  const initialState = { errors: {}, message: null };
  const [state, dispatch] = useFormState(createRide, initialState);
  console.log("mshamirt states:", state);
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-black">
      <div className="flex flex-col items-center justify-center">
        <div>
          <h1 className="text-2xl font-bold">Create Ride</h1>
        </div>
        <div className="my-6 mt-12">
          <form action={dispatch} className="flex flex-col space-y-12">
            <div className="space-y-4 ">
              <div className="flex justify-between mx-2">
                <label className="" htmlFor="">
                  Ride Name
                </label>
                <input
                  name="rideName"
                  className=" border border-black"
                  type="text"
                />
              </div>
              <div className="flex space-x-2 justify-between mx-2">
                <label className="" htmlFor="">
                  Destination Location
                </label>
                <input
                  name="destinationLocation"
                  className=" border border-black"
                  type="text"
                />
              </div>
              <div className="flex justify-between mx-2">
                <label className="" htmlFor="">
                  Start Location
                </label>
                <input
                  name="startLocation"
                  className="border border-black"
                  type="text"
                />
              </div>
              <div className="flex justify-between mx-2">
                <label className="" htmlFor="">
                  Start Date
                </label>
                <input
                  name="startDate"
                  className="border border-black"
                  type="date"
                />
              </div>
              <div className="flex justify-between mx-2">
                <label className="" htmlFor="">
                  Trip Duration
                </label>
                <input
                  name="tripDuration"
                  className="border border-black"
                  type="text"
                />
              </div>
            </div>
            <div className="flex justify-end mr-2">
              <button
                className="flex p-4 w-32 h-8 border-2 border-black justify-center items-center rounded-md"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="test">
          <pre>{JSON.stringify(state)}</pre>
        </div>
      </div>
    </div>
  );
}
