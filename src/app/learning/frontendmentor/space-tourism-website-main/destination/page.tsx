import Navbar from "../components/Navbar";
import Image from "next/image";
import destinationBackgroundMobile from "../assets/destination/background-destination-mobile.jpg";
import destinationBackgroundTablet from "../assets/destination/background-destination-tablet.jpg";
import destinationBackgroundDesktop from "../assets/destination/background-destination-desktop.jpg";
import moonImage from "../assets/destination/image-moon.png";
import { bellefair, barlowCondensed, barlowRegular } from "../assets/fonts";

export default function Destination() {
  return (
    <div
      className={`bg-black min-h-screen min-w-screen overflow-clip ${barlowCondensed.className} relative`}
    >
      <div className="absolute inset-0">
        <Image
          alt="Destination Background Mobile"
          src={destinationBackgroundMobile}
          className="block md:hidden"
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <Image
          alt="Destination Background Tablet"
          src={destinationBackgroundTablet}
          className="hidden md:block lgs:hidden"
          placeholder="blur"
          quality={100}
          fill
          objectFit="cover"
        />
        <Image
          alt="Destination Background Desktop"
          src={destinationBackgroundDesktop}
          className="hidden lgs:block"
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <Navbar />

      <div className="md:px-[33.5px] lgs:px-[166.5px] md:mt-[40px] lgs:mt-[80px] z-[100] relative text-white">
        <div className="flex flex-col items-center md:items-start ">
          <div className="h-[19px] md:h-[24px] lgs:h-[34px] w-[221px] md:w-[272px] lgs:w-[382px] mb-[32px] md:mb-[60px] lgs:mb-[97px] flex justify-between text-[16px] tracking-[2.7px] md:text-[20px] lgs:text-[28px] md:tracking-[3.38px] lgs:tracking-[4.72px]">
            <span className="text-space-dark-grey font-bold">01</span> PICK YOUR
            DESTINATION
          </div>
        </div>
        <div className="flex flex-col justify-center lgs:flex-row items-center lgs:justify-between  ">
          <div className="h-[170px] md:h-[300px] lgs:h-[445px] w-[170px] md:w-[300px] lgs:w-[445px] mb-[26px] md:mb-[53px] lgs:mb-0 ">
            <Image src={moonImage} alt="Moon Image"></Image>
          </div>

          <div className="flex flex-col justify-between items-center lgs:items-start h-[457px] md:h-[389px] lgs:h-[472px] lgs:w-[445px]">
            <div className="h-[28px] md:h-[34px] w-[237.5px] md:[285.5px] flex justify-between text-[14px] md:text-[16px] tracking-[2.36px] md:tracking-[2.7px]">
              <span>MOON</span>
              <span>MARS</span>
              <span>EUROPA</span>
              <span>TITAN</span>
            </div>

            <div
              className={`h-[64px] md:h-[92px] lgs:h-[115px] w-[187px] md:w-[266px] lgs:w-[333px] ${bellefair.className} text-[56px] md:text-[80px] lgs:text-[100px] flex flex-col text-center lgs:text-start`}
            >
              MOON
            </div>
            <div
              className={`h-[125px] md:h-[84px] lgs:h-[128px] w-[327px] md:w-[573px] lgs:w-[444px] ${barlowRegular.className} text-[15px] md:text-[16px] lgs:text-[18px] text-center leading-[25px] lgs:text-start`}
            >
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </div>

            <div className="h-[1px] w-[327px] md:w-[573px] lgs:w-[444px] bg-space-grey"></div>

            <div className="h-[164px] md:h-[90px] w-[223px] md:w-[573px] lgs:w-auto lgs:space-x-[69px] flex flex-col md:flex-row items-end text-center md:justify-center lgs:text-start">
              <div className="h-[61px] w-[216px] lgs:w-[143px] ">
                <div className="text-[14px] tracking-[2.36px] uppercase">
                  Avg. distance
                </div>
                <div className={`${bellefair.className} text-[28px] uppercase`}>
                  384,400 km
                </div>
              </div>
              <div className="h-[61px] w-[223px] lgs:w-[122px]">
                <div className="uppercase text-[14px] tracking-[2.36px]">
                  Est. travel time
                </div>
                <div className={`${bellefair.className} text-[28px] uppercase`}>
                  3 days
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
