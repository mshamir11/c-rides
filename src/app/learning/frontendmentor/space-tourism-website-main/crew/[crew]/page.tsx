import Navbar from "../../components/Navbar";
export default function Crew({ params }: { params: { crewname: string } }) {
  return (
    <div className="min-h-screen  bg-black md:flex md:flex-col overflow-clip">
      <Navbar />
      <div className="flex flex-col ">
        <div className="h-[19px] w-[166px] bg-pink-200 mb-[32px] md:ml-[38.5px] md:mb-[60px] md:mt-[40px] lgs:hidden">
          {" "}
          02 Meet your crew
        </div>
        <div className="flex flex-col items-center bg-purple-500 lgs:flex-row lgs:ml-[165.5px] lgs:items-start lgs:mt-[76px]">
          <div className="h-[223px] w-[327px] bg-yellow-200 mb-[32px] flex flex-col items-center md:order-last md:h-[532px] md:mb-0 lgs:h-[712px] lgs:w-[568px] lgs:ml-[80px]">
            <div className="h-[222px] w-[177.12px] bg-red-500 md:h-[532px] lgs:h-[712px] lgs:w-[568px]">
              Photo
            </div>
            <div className="bg-green-500 h-[1px] w-full md:hidden"></div>
          </div>

          <div className="h-[212px] w-[327px] bg-red-700 flex flex-col items-center md:mb-[40px] md:w-[458px] md:h-[232px] lgs:w-auto lgs:items-start lgs:justify-between lgs:h-[594px] lgs:mb-0">
            <div className="hidden bg-pink-200  lgs:w-[286px] lgs:h-[34px] lgs:block">
              {" "}
              02 Meet your crew
            </div>
            <div className="h-[10px] w-[88px] bg-blue-200 mb-[32px] md:order-last md:mb-0">
              buttons
            </div>
            <div className="h-[170px] w-[327px] bg-yellow-300  md:w-[458px] md:h-[182px] md:flex md:flex-col md:items-center md:mb-[40px] lgs:mb-[120px] lgs:w-auto lgs:h-auto lgs:items-start">
              <div className="h-[54px] w-[327px] bg-red-300 flex flex-col items-center justify-between mb-[16px] lgs:w-[488px] lgs:h-[116px] lgs:items-start">
                <div className="h-[18px] w-[107px] bg-green-400 md:w-[161px] md:h-[28px] lgs:w-[214px] lgs:h-[37px]">
                  commander
                </div>
                <div className="h-[28px] w-[327px] bg-blue-400 md:w-[457px] md:h-[46px] lgs:w-[488px] lgs:h-[64px]">
                  douglas hurley
                </div>
              </div>

              <div className="h-[100px] w-[327px] bg-green-500 md:w-[458px] md:h-[84px] lgs:w-[444px] lgs:h-[128px]">
                Douglas Gerald Hurley is an American engineer, former Marine
                Corps pilot and former NASA astronaut. He launched into space
                for the third time as commander of Crew Dragon Demo-2.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
