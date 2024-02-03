export default function ProfileCard() {
  return (
    <div className="main">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-56 ">
        <div className="flex flex-col items-center">
          <div className="w-full relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 border-4 border-white bg-yellow-200 rounded-full"></div>
            <div className="h-20 w-full bg-green-600"></div>
            <div className="flex h-20 w-full bg-red-600 items-end">
              <div className="flex h-12 w-full bg-blue-600 items-center">
                <div className="w-full text-center">
                  <h1 className="text-xs">
                    <span className="font-bold">Victor Crest</span> 26
                  </h1>
                  <h2 className="text-xss">London</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-12 w-full bg-orange-600 items-center">
            <div className="flex bg-violet-500 justify-around w-full">
              <div className="bg-white text-center">
                <h1 className="text-xs font-bold">80K</h1>
                <p className="text-[6px]">Followers</p>
              </div>
              <div className="bg-white text-center">
                <h1 className="text-xs font-bold">803K</h1>
                <p className="text-[6px]">Likes</p>
              </div>
              <div className="bg-white text-center">
                <h1 className="text-xs font-bold">1.4K</h1>
                <p className="text-[6px]">Photos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
