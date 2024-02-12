export default function HomePage() {
  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col justify-center items-center">
        <div className="flex bg-yellow-300 w-full justify-between items-center p-[24px] md:p-0 md:ml-[39px] lgs:mt-[40px] lgs:ml-[55px]">
          <div className="h-[40px] w-[40px] md:h-[48px] md:w-[48px] bg-purple-200"></div>
          <div className="h-[24px] w-[21px] bg-pink-200 md:h-[96px] md:w-[450px] md:flex md:justify-center md:items-center lgs:w-[830px]">
            <div className="invisible md:visible h-[18px] w-[356px] lgs:h-[19px] lgs:w-[542px] bg-green-200"></div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lgs:flex-row lgs:mt-[251px] lgs:items-end lgs:justify-between lgs:bg-red-200 lgs:w-full lgs:px-[165px]">
          <div className="h-[276px] w-[327px] bg-orange-200 mt-[24px] md:w-[450px] md:h-[334px] md:mt-[106px] lgs:h-[382px] lgs:m-0"></div>
          <div className="h-[150px] w-[150px] rounded-full mt-[57px] md:h-[242px] md:w-[242px] bg-green-200 md:mt-[156px] lgs:m-0"></div>
        </div>
      </div>
    </div>
  );
}
