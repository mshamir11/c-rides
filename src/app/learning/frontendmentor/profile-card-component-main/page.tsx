import Image from "next/image";
import ProfileImage from "./images/image-victor.jpg";
import { Kumbh_Sans } from "next/font/google";

const kumbh = Kumbh_Sans({subsets: ['latin']})

export default function ProfileCard() {
  return (
    <div className={`${kumbh.className} main min-h-screen bg-cyan-550 bg-no-repeat bg-[url(/bg-pattern-top.svg),url(/bg-pattern-bottom.svg)]`}
    style={{
      backgroundPosition: "-150% 200%, 200% -150%"}}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[26rem] rounded-md overflow-clip drop shadow-md bg-white">
        <div className="flex flex-col items-center divide-y-1/2 divide-slate-400">
          <div className="w-full relative">
            <Image
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[8rem] w-[8rem] border-4 border-white rounded-full"
              src={ProfileImage}
              alt="Profile picture"
            ></Image>
            <div className="h-[10rem] w-full bg-bubble-pattern"></div>
            <div className="flex h-[10rem] w-full  items-end ">
              <div className="flex h-[6rem] w-full  items-center">
                <div className="w-full text-center">
                  <h1 className="text-xl">
                    <span className="font-bold">Victor Crest</span> 26
                  </h1>
                  <h2 className="text-lg">London</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-[6rem] w-full  items-center">
            <div className="flex  justify-around w-full">
              <div className="bg-white text-center">
                <h1 className="text-base font-bold">80K</h1>
                <p className="text-xs text-slate-400">Followers</p>
              </div>
              <div className="bg-white text-center">
                <h1 className="text-base font-bold">803K</h1>
                <p className="text-xs text-slate-400">Likes</p>
              </div>
              <div className="bg-white text-center">
                <h1 className="text-base font-bold">1.4K</h1>
                <p className="text-xs text-slate-400">Photos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
