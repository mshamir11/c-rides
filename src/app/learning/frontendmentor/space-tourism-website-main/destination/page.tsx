import Navbar from "../components/Navbar";

export default function Destination() {
  return (
    <div className="bg-black min-h-screen min-w-screen overflow-clip">
      <Navbar />

      <div className="bg-green-400 md:px-[77px] md:mt-[40px]">
        <div className="flex flex-col items-center md:items-start ">
          <div className="h-[19px] md:h-[24px] w-[221px] md:w-[272px] mb-[32px] md:mb-[60px] bg-green-200"></div>
        </div>

        <div className="flex flex-col justify-center items-center bg-red-400">
          <div className="h-[170px] md:h-[300px] w-[170px] md:w-[300px] mb-[26px] md:mb-[53px] bg-yellow-200"></div>
          <div className="h-[28px] md:h-[34px] w-[237.5px] md:[285.5px] mb-[20px] md:mb-[32px] bg-red-200"></div>

          <div className="h-[408px] w-[327px] bg-gray-200 flex flex-col justify-between items-center mb-[58px]">
            <div className="w-min bg-blue-500 h-min flex flex-col items-center justify center">
              <div className="h-[64px] md:h-[92px] w-[187px] md:w-[266px] bg-green-500"></div>
              <div className="bg-blue-200 h-[125px] md:h-[84px] w-[327px] md:w-[573px]"></div>
            </div>

            <div className="h-[1px] w-[327px] md:w-[573px] bg-red-500"></div>

            <div className="h-[164px] md:h-[90px] w-[223px] md:w-[573px] flex flex-col md:flex-row items-end bg-yellow-500 justify-evenly">
              <div className="h-[61px] w-[216px]  bg-purple-400"></div>
              <div className="h-[61px] w-[223px] bg-orange-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
