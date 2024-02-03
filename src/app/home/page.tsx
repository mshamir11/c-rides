import { auth } from "@/app/lib/auth";
import { redirect } from "next/navigation";
import { SIGN_IN_URL } from "@/app/utils/constants";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  if (session) {
    return getLandingPageForRegisteredUsers();
  } else {
    redirect(SIGN_IN_URL);
  }
}

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
          <button className="flex p-4 w-40 h-10 border-2 border-black justify-center items-center rounded-md">
            Show my rides
          </button>
        </div>
      </div>
    </div>
  );
};
