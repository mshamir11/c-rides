export default function Shadow() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4 ">Shadow </h1>
      <div className="h-40 flex space-x-5 justify-center items-center bg-gray-200 ">
        <div className="h-32 shadow-md w-32 bg-slate-200 shadow-red-500/50">
          01
        </div>
        <div className="h-32 w-32 bg-green-500">02</div>
        <div className="h-32 w-32 bg-purple-500">03</div>
      </div>
    </div>
  );
}
