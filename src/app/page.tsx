import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col mx-4 md:mx-20 pt-20 lgs:mx-[40rem]">
        <h1 className="text-4xl text-center font-bold">Community Rides</h1>
        <div className="flex justify-center mt-12">
          <p className="text-gray-700 flex justify-stretch tracking-widest text-justify">
            Community Rides is a platform for hosting bike rides. If you are new
            to a city and you want to explore the nearby places in a gang of
            bike riders, this is the place that you are looking for. In this
            platform, you can join different rides hosted by your peer riders.
            Further, if you would like to host your on trip, feel free to do so
            by creating your own ride and letting other people to join you. We
            wish you all fun and memories awaiting you ahead.
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <Link
            className="border-black border-2 rounded-md p-2 bg-blue-500 font-bold text-white"
            href={"/home"}
          >
            Explore your city by clicking here
          </Link>
        </div>
        <hr className="mt-10" />
        <div className="mt-10 md:mx-2 lgs:mx-20">
          <h1 className="text-2xl text-center">Features</h1>
          <div className="mt-10 bg-blue-100 rounded-md p-4 mb-4">
            <ul className="grid md:grid-cols-3 gap-y-2 md:jusitfy-stretch md:gap-x-4 md:gap-y-4 lgs:gap-y-10 tracking-wide">
              <li className="text-center">Host rides</li>
              <li className="text-center">Join rides</li>
              <li className="text-center">Find amazing rides near by</li>
              <li className="text-center">Rate your host</li>
              <li className="text-center">In App messaging</li>
              <li className="text-center">Follow your favorite riders</li>
              <li className="text-center">Notification for relevant rides</li>
              <li className="text-center">Write reviews for your ride</li>
              <li className="text-center">Anonymous feedback for host</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
