import { Hanken_Grotesk } from "next/font/google";
import { MemoryIcon, ReactionIcon, VerbalIcon, VisualIcon } from "./icons";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

export default function ResultSummaryComponent() {
  return (
    <div
      className={`${hanken.className} main h-screen w-screen  md:flex md:justify-center md:items-center`}
    >
      <div className="flex flex-col md:flex-row md:justify-center md:items-center md:w-[740px] md:rounded-[30px] md:shadow-2xl ">
        <div className="flex h-[350px] md:flex-row md:h-[450px] md:w-[370px] ">
          <div className="flex flex-col justify-evenly items-center bg-red-200 p-10 rounded-b-[30px] md:rounded-[30px] md:h-full w-full space-y-4">
            <div className="bg-red-200 text-xl">Your Result</div>
            <div className="flex flex-col justify-center items-center h-[120px] w-[120px] rounded-full bg-yellow-200">
              <h1 className="text-5xl font-extrabold">76</h1>
              <p className="text-center">of 100</p>{" "}
            </div>
            <div className="flex flex-col items-center justify-center ">
              <h1 className="text-2xl">Great</h1>
              <p className="text-center">
                You scored higher than 65% of the people who have taken these
                tests.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between p-10 h-[450px]  md:w-[370px]">
          <h1 className="text-xl font-bold">Summary</h1>
          <div className="flex p-4 justify-between h-[55px] bg-yellow-100 rounded-lg">
            <div className="flex justify-between space-x-2">
              <ReactionIcon strokeWidth={2} />
              <div className=""> Reaction</div>
            </div>
            <div className="">80 / 100</div>
          </div>
          <div className="flex p-4 justify-between h-[55px] bg-yellow-100 rounded-lg">
            <div className="flex justify-between space-x-2">
              <MemoryIcon strokeWidth={2} />
              <div className=""> Memory</div>
            </div>
            <div className="">80 / 100</div>
          </div>
          <div className="flex p-4 justify-between h-[55px] bg-yellow-100 rounded-lg">
            <div className="flex justify-between space-x-2">
              <VerbalIcon strokeWidth={2} />
              <div className=""> Verbal</div>
            </div>

            <div className="">80 / 100</div>
          </div>
          <div className="flex p-4 justify-between h-[55px] bg-yellow-100 rounded-lg">
            <div className="flex justify-between space-x-2">
              <VisualIcon strokeWidth={2} />
              <div className=""> Visual</div>
            </div>
            <div className="">80 / 100</div>
          </div>
          <button className="bg-yellow-100 h-[55px] rounded-[30px] font-bold">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
