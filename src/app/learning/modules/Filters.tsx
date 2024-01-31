export default function Filters() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4 ">Filters </h1>
      <div className="h-40 flex space-x-5 justify-center items-center  ">
        <div className="h-32 shadow-md w-32 bg-slate-200 shadow-red-500/50">
          01
        </div>
        <div className="h-32 w-32 hover:blur-sm bg-green-500">
          Hover over me
        </div>
        <div className="drop-shadow-2xl h-32 w-32 brightness-1 bg-purple-500">
          03
        </div>
      </div>
    </div>
  );
}
