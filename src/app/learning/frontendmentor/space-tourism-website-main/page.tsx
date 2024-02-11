export default function HomePage() {
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center items-center">
        <div className="flex bg-yellow-300 w-full justify-between items-center p-[24px]">
          <div className="h-[40px] w-[40px] md:h-[48px] md:w-[48px] bg-purple-200"></div>
          <div className="h-[24px] w-[21px] bg-pink-200 md:"></div>
        </div>

        <div className="h-[276px] w-[327px] bg-orange-200 mt-[24px] md:w-[450px] md:h-[334px]"></div>
        <div className="h-[150px] w-[150px] rounded-full mt-[57px] bg-green-200"></div>
      </div>
    </div>
  );
}
