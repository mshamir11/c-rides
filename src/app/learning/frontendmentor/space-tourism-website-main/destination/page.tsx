import Navbar from "../components/Navbar";

export default function Destination() {
  return (
    <div className="bg-black min-h-screen min-w-screen overflow-clip">
      <Navbar />

      <div className="bg-green-400 md:px-[33.5px] lgs:px-[166.5px] md:mt-[40px] lgs:mt-[80px]">
        <div className="flex flex-col items-center md:items-start ">
          <div className="h-[19px] md:h-[24px] lgs:h-[34px] w-[221px] md:w-[272px] lgs:w-[382px] mb-[32px] md:mb-[60px] lgs:mb-[97px] bg-green-200"></div>
        </div>
        <div className="flex flex-col justify-center lgs:flex-row items-center lgs:justify-between bg-purple-300 ">
          <div className="h-[170px] md:h-[300px] lgs:h-[445px] w-[170px] md:w-[300px] lgs:w-[445px] mb-[26px] md:mb-[53px] lgs:mb-0 bg-yellow-200"></div>

          {/* Description side */}
          <div className="flex flex-col justify-center items-center bg-red-400 lgs:items-start lgs:h-[472px] lgs:w-[445px] lgs:justify-between">
            <div className="h-[28px] md:h-[34px] w-[237.5px] md:[285.5px] mb-[20px] md:mb-[32px] bg-red-200"></div>

            <div className="h-[408px] w-[327px] bg-gray-200 flex flex-col justify-between items-center mb-[58px] lgs:mb-0 lgs:h-auto lgs:w-auto lgs:items-start">
              <div className="w-min bg-blue-500 h-min flex flex-col items-center justify center lgs:items-start">
                <div className="h-[64px] md:h-[92px] lgs:h-[115px] w-[187px] md:w-[266px] lgs:w-[333px] bg-green-500"></div>
                <div className="bg-blue-200 h-[125px] md:h-[84px] lgs:h-[128px] w-[327px] md:w-[573px] lgs:w-[444px]"></div>
              </div>

              <div className="h-[1px] w-[327px] md:w-[573px] lgs:w-[444px] bg-red-500"></div>

              <div className="h-[164px] md:h-[90px] w-[223px] md:w-[573px] lgs:w-auto lgs:space-x-4 flex flex-col md:flex-row items-end bg-yellow-500 justify-evenly">
                <div className="h-[61px] w-[216px] lgs:w-[143px] bg-purple-400"></div>
                <div className="h-[61px] w-[223px] lgs:w-[122px] bg-orange-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
