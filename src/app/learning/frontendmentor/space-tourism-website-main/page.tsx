import { bellefair, barlowCondensed, barlowRegular } from "./assets/fonts";
import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <div
      className={`${bellefair.className} min-h-screen w-screen bg-space-home-mobile md:bg-space-home-tablet bg-no-repeat bg-cover lgs:bg-space-home-desktop`}
    >
      <div className="flex flex-col justify-center items-center">
        <Navbar />
        <div className="flex flex-col justify-center items-center lgs:flex-row lgs:mt-[251px] lgs:items-end lgs:justify-between lgs:w-full lgs:px-[165px]">
          <div className="flex flex-col justify-between h-[276px] w-[327px] mt-[24px] md:w-[450px] md:h-[334px] md:mt-[106px] lgs:h-[382px] lgs:m-0 text-center lgs:text-start text-white">
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
          <div className="flex justify-center items-center h-[150px] w-[150px] rounded-full mt-[57px] md:h-[242px] md:w-[242px] bg-white md:mt-[156px] lgs:m-0 tracking-[1.25px] text-xl md:text-[32px] md:tracking-[2px] mb-[80px]">
            EXPLORE
          </div>
        </div>
      </div>
    </div>
  );
}
