import Image from "next/image";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import { Bellefair, Barlow_Condensed, Barlow } from "next/font/google";

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "500", "800"],
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <div className="flex w-full justify-between items-center p-[24px] md:p-0 md:ml-[39px] lgs:pt-[40px] lgs:ml-[60px] overflow-visible">
      <Image src={logo} alt="logo" width={40} height={40} />

      <div className="hidden lgs:block w-[473px] border-[0.5px] mr-[-200px] z-10"></div>

      <div className="h-[21px] w-[24px] md:h-[96px] md:w-[450px] flex md:justify-center md:items-center lgs:w-[830px] md:bg-white/[0.04] lgs:bg-transparent lgs:backdrop-blur-md z-9">
        <Image
          className="md:hidden"
          src={hamburger}
          alt="hamburger menu"
          width={24}
          height={21}
        ></Image>
        <div
          className={`${barlowCondensed.className} hidden md:flex md:justify-between h-[18px] w-[356px] lgs:h-[19px] lgs:w-[542px] items-center text-white`}
        >
          <p className="text-[16px] tracking-[2.7px]">
            <span className="hidden lgs:inline font-extrabold">00 </span>
            HOME
          </p>
          <p className="text-[16px] tracking-[2.7px]">
            <span className="hidden lgs:inline font-extrabold">01 </span>
            DESTINATION
          </p>
          <p className="text-[16px] tracking-[2.7px]">
            <span className="hidden lgs:inline font-extrabold">02 </span>
            CREW
          </p>
          <p className="text-[16px] tracking-[2.7px]">
            <span className="hidden lgs:inline font-extrabold">03 </span>
            TECHNOLOGY
          </p>
        </div>
      </div>
    </div>
  );
}
