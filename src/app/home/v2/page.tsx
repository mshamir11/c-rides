export default function Page() {
  return (
    <main>
      <section className="p-2  overflow-x-scroll gap-y-4 flex flex-col">
        <div className=" border-2 p-3 rounded-2xl   ">
          <h1 className="text-xl md:text-2xl mb-4 lg:mb-0">
            Your upcoming rides
          </h1>
          <div className="lg:overflow-x-auto overflow-y-auto max-h-[400px] lg:max-h-[none] rounded-md mt-10 mb-4">
            <div className="flex justify-center  flex-col gap-y-4  lg:flex-row md:justify-around lg:gap-x-4 ">
              <div className="h-12  rounded-md bg-sky-900 items-center flex px-2 justify-between text-white lg:h-80 lg:min-w-60 lg:flex lg:flex-col lg:py-2">
                <p>Nandi Hills</p>
                <p>31 March, 2024</p>
              </div>
              <div className="h-12  rounded-md bg-sky-900 items-center flex px-2 justify-between text-white lg:h-80 lg:min-w-60 lg:flex lg:flex-col lg:py-2">
                <p>Mandagiri Hills</p>
                <p>4 April, 2024</p>
              </div>
              <div className="h-12  rounded-md bg-sky-900 items-center flex px-2 justify-between text-white lg:h-80 lg:min-w-60 lg:flex lg:flex-col lg:py-2">
                <p>Skandagiri</p>
                <p>7 April, 2024</p>
              </div>
              <div className="h-12  rounded-md bg-sky-900 items-center flex px-2 justify-between text-white lg:h-80 lg:min-w-60 lg:flex lg:flex-col lg:py-2">
                <p>Coorg</p>
                <p>10 April, 2024</p>
              </div>
              <div className="h-12  rounded-md bg-sky-900 items-center flex px-2 justify-between text-white lg:h-80 lg:min-w-60 lg:flex lg:flex-col lg:py-2">
                <p>Skandagiri</p>
                <p>7 April, 2024</p>
              </div>
              <div className="h-12  rounded-md bg-sky-900 items-center flex px-2 justify-between text-white lg:h-80 lg:min-w-60 lg:flex lg:flex-col lg:py-2">
                <p>Coorg</p>
                <p>10 April, 2024</p>
              </div>
              <div className="h-12  rounded-md bg-sky-900 items-center flex px-2 justify-between text-white lg:h-80 lg:min-w-60 lg:flex lg:flex-col lg:py-2">
                <p>Skandagiri</p>
                <p>7 April, 2024</p>
              </div>
              <div className="h-12  rounded-md bg-sky-900 items-center flex px-2 justify-between text-white lg:h-80 lg:min-w-60 lg:flex lg:flex-col lg:py-2">
                <p>Coorg</p>
                <p>10 April, 2024</p>
              </div>
              <div className="h-12  rounded-md bg-sky-900 items-center flex px-2 justify-between text-white lg:h-80 lg:min-w-60 lg:flex lg:flex-col lg:py-2">
                <p>Skandagiri</p>
                <p>7 April, 2024</p>
              </div>
              <div className="h-12  rounded-md bg-sky-900 items-center flex px-2 justify-between text-white lg:h-80 lg:min-w-60 lg:flex lg:flex-col lg:py-2">
                <p>Coorg</p>
                <p>10 April, 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 p-2 rounded-2xl">
          <h1 className="text-xl md:text-2xl">
            These rides might interest you
          </h1>
          <div className="flex justify-center mt-10 flex-col gap-y-4 mb-4 lg:flex-row md:justify-around">
            <div className="h-12  rounded-md bg-sky-900 items-center flex px-2 justify-between text-white lg:h-80 lg:min-w-60 lg:flex lg:flex-col lg:py-2">
              <p>Tusharagiri</p>
              <p>31 March, 2024</p>
            </div>
            <div className="h-12  rounded-md bg-sky-900 items-center flex px-2 justify-between text-white lg:h-80 lg:min-w-60 lg:flex lg:flex-col lg:py-2">
              <p>Mysore</p>
              <p>4 April, 2024</p>
            </div>
            <div className="h-12  rounded-md bg-sky-900 items-center flex px-2 justify-between text-white lg:h-80 lg:min-w-60 lg:flex lg:flex-col lg:py-2">
              <p>Ooty</p>
              <p>7 April, 2024</p>
            </div>
            <div className="h-12  rounded-md bg-sky-900 items-center flex px-2 justify-between text-white lg:h-80 lg:min-w-60 lg:flex lg:flex-col lg:py-2">
              <p>Kodaiknal</p>
              <p>10 April, 2024</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
