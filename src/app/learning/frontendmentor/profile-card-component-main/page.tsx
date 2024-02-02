export default function ProfileCard() {
  return (
    <div className="main">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-48">
        <div className="flex flex-col items-center">
          <div className="w-full">
            <div className="h-18 w-full bg-green-600"></div>
            <div className="h-20 w-full bg-red-600"></div>
          </div>
          <div className="h-10 w-full bg-orange-600"></div>
        </div>
      </div>
    </div>
  );
}
