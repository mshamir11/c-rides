import { auth } from "@/app/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (session) {
    return getLandingPageForRegisteredUsers();
  } else {
    redirect("api/auth/signIn");
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
          <button className="flex p-4 w-32 h-10 border-2 border-black justify-center items-center rounded-md">
            Create Ride
          </button>
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
