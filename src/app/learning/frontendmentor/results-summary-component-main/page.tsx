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
          <div className="flex flex-col justify-evenly items-center bg-gradient-to-b from-light-slate-blue to-light-royal-blue p-10 rounded-b-[30px] md:rounded-[30px] md:h-full w-full space-y-4">
            <div className="text-xl text-pale-blue">Your Result</div>
            <div className="flex flex-col justify-center items-center h-[130px] w-[130px] rounded-full bg-gradient-to-b from-violet-blue to-persian-blue">
              <h1 className="text-5xl font-extrabold text-white-new">76</h1>
              <p className="text-center text-light-lavender">of 100</p>{" "}
            </div>
            <div className="flex flex-col items-center justify-center ">
              <h1 className="text-2xl text-white-new">Great</h1>
              <p className="text-center text-light-lavender">
                You scored higher than 65% of the people who have taken these
                tests.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between p-10 h-[450px]  md:w-[370px]">
          <h1 className="text-xl font-bold text-dark-gray-blue">Summary</h1>
          <div className="flex p-4 justify-between h-[55px] bg-light-red/[0.1] rounded-lg">
            <div className="flex justify-between space-x-2">
              <ReactionIcon className="stroke-light-red stroke-2" />
              <div className="text-light-red font-bold"> Reaction</div>
            </div>
            <div className="font-bold">
              <span className="text-dark-gray-blue">80</span>{" "}
              <span className="text-dark-gray-blue/[0.5]">/ 100</span>
            </div>
          </div>
          <div className="flex p-4 justify-between h-[55px] bg-orangey-yellow/[0.1] rounded-lg">
            <div className="flex justify-between space-x-2">
              <MemoryIcon className="stroke-orangey-yellow stroke-2" />
              <div className="text-orangey-yellow font-bold"> Memory</div>
            </div>
            <div className="font-bold">
              <span className="text-dark-gray-blue">92</span>{" "}
              <span className="text-dark-gray-blue/[0.5]">/ 100</span>
            </div>
          </div>
          <div className="flex p-4 justify-between h-[55px] bg-green-teal/[0.1] rounded-lg">
            <div className="flex justify-between space-x-2">
              <VerbalIcon className="stroke-green-teal stroke-2" />
              <div className="text-green-teal font-bold"> Verbal</div>
            </div>

            <div className="font-bold">
              <span className="text-dark-gray-blue">61</span>{" "}
              <span className="text-dark-gray-blue/[0.5]">/ 100</span>
            </div>
          </div>
          <div className="flex p-4 justify-between h-[55px] bg-cobalt-blue/[0.1] rounded-lg">
            <div className="flex justify-between space-x-2">
              <VisualIcon className="stroke-cobalt-blue stroke-2" />
              <div className="text-cobalt-blue font-bold"> Visual</div>
            </div>
            <div className="font-bold">
              <span className="text-dark-gray-blue">72</span>{" "}
              <span className="text-dark-gray-blue/[0.5]">/ 100</span>
            </div>
          </div>
          <button className="bg-dark-gray-blue text-white h-[55px] rounded-[30px] font-bold">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
