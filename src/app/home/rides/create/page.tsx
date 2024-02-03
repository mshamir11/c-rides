export default function CreateRidePage() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-black">
      <div className="flex flex-col items-center justify-center">
        <div>
          <h1 className="text-2xl font-bold">Create Ride</h1>
        </div>
        <div className="my-6 mt-12">
          <form action="" className="flex flex-col space-y-12">
            <div className="space-y-4 ">
              <div className="flex justify-between mx-2">
                <label className="" htmlFor="">
                  Ride Name
                </label>
                <input className=" border border-black" type="text" />
              </div>
              <div className="flex space-x-2 justify-between mx-2">
                <label className="" htmlFor="">
                  Destination Location
                </label>
                <input className=" border border-black" type="text" />
              </div>
              <div className="flex justify-between mx-2">
                <label className="" htmlFor="">
                  Start Location
                </label>
                <input className="border border-black" type="text" />
              </div>
              <div className="flex justify-between mx-2">
                <label className="" htmlFor="">
                  Start Date
                </label>
                <input className="border border-black" type="date" />
              </div>
              <div className="flex justify-between mx-2">
                <label className="" htmlFor="">
                  Trip Duration
                </label>
                <input className="border border-black" type="text" />
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
      </div>
    </div>
  );
}
