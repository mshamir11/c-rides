import Navbar from "../components/Navbar";

export default function Destination() {
  return (
    <div className="bg-black min-h-screen min-w-screen overflow-clip">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <div className="h-[19px] w-[221px] mb-[32px] bg-green-200"></div>
        <div className="h-[170px] w-[170px] mb-[26px] bg-yellow-200"></div>
        <div className="h-[28px] w-[237.5px] mb-[20px] bg-red-200"></div>

        <div className="h-[408px] w-[327px] bg-gray-200 flex flex-col justify-between items-center mb-[58px]">
          <div className="w-min bg-blue-500 h-min flex flex-col items-center justify center">
            <div className="h-[64px] w-[187px] bg-green-500"></div>
            <div className="bg-blue-200 h-[125px] w-[327px]"></div>
          </div>

          <div className="h-[1px] w-[327px] bg-red-500"></div>

          <div className="h-[164px] w-[223px] flex flex-col items-center justify-between bg-yellow-500">
            <div className="h-[61px] w-[216px] bg-purple-400"></div>
            <div className="h-[61px] w-[223px] bg-orange-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
