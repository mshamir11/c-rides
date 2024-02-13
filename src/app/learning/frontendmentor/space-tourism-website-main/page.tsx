import { Bellefair, Barlow_Condensed, Barlow } from "next/font/google";
import Image from "next/image";
import logo from "./assets/shared/logo.svg";
import hamburger from "./assets/shared/icon-hamburger.svg";

const bellefair = Bellefair({
  weight: ["400"],
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "500", "800"],
  subsets: ["latin"],
});

const barlowRegular = Barlow({
  weight: ["400"],
  subsets: ["latin"],
});

export default function HomePage() {
  return (
    <div
      className={`${bellefair.className} h-screen w-screen bg-space-home-mobile md:bg-space-home-tablet bg-no-repeat bg-cover lgs:bg-space-home-desktop`}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="flex w-full justify-between items-center p-[24px] md:p-0 md:ml-[39px] lgs:mt-[40px] lgs:ml-[60px] overflow-visible">
          <Image src={logo} alt="logo" width={40} height={40} />

          <div className="hidden lgs:block w-[473px] border-[0.5px] mr-[-200px] z-10"></div>

          <div className="h-[24px] w-[21px] md:h-[96px] md:w-[450px] flex md:justify-center md:items-center lgs:w-[830px] md:bg-white/[0.04] lgs:bg-transparent lgs:backdrop-blur-md">
            <Image
              className="md:hidden"
              src={hamburger}
              alt="hamburger menu"
              width={21}
              height={24}
            ></Image>
            <div
              className={`${barlowCondensed.className} hidden md:flex md:justify-between h-[18px] w-[356px] lgs:h-[19px] lgs:w-[542px] items-center text-white`}
            >
              <p className="text-[16px] tracking-[2.7px]">
                <span className="hidden lg:inline font-extrabold">00 </span>HOME
              </p>
              <p className="text-[16px] tracking-[2.7px]">
                <span className="hidden lg:inline font-extrabold">01 </span>
                DESTINATION
              </p>
              <p className="text-[16px] tracking-[2.7px]">
                <span className="hidden lg:inline font-extrabold">02 </span>CREW
              </p>
              <p className="text-[16px] tracking-[2.7px]">
                <span className="hidden lg:inline font-extrabold">03 </span>
                TECHNOLOGY
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lgs:flex-row lgs:mt-[251px] lgs:items-end lgs:justify-between lgs:w-full lgs:px-[165px]">
          <div className="flex flex-col justify-between h-[276px] w-[327px] mt-[24px] md:w-[450px] md:h-[334px] md:mt-[106px] lgs:h-[382px] lgs:m-0 text-center lg:text-start text-white">
            <p
              className={`${barlowCondensed.className} text-base tracking-[0.169rem] md:tracking-[3.38px] md:text-[20px] lgs:text-[28px] lgs:tracking-[4.72px] text-space-violet`}
            >
              SO, YOU WANT TO TRAVEL TO{" "}
            </p>
            <p className="text-space md:text-[150px]/[150px] items-start">
              SPACE
            </p>

            <p
              className={`${barlowRegular.className} text-[15px]/[25px] md:text-[16px]/[28px] lgs:text-[18px]/[32px] text-space-violet text-pretty`}
            >
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="flex justify-center items-center h-[150px] w-[150px] rounded-full mt-[57px] md:h-[242px] md:w-[242px] bg-white md:mt-[156px] lgs:m-0 tracking-[1.25px] text-xl md:text-[32px] md:tracking-[2px]">
            EXPLORE
          </div>
        </div>
      </div>
    </div>
  );
}
