export default function BoxSizing() {
  return (
    <>
      <h1 className="text-xl">Box Sizing</h1>
      <div className="flex justify-evenly">
        <div className="bg-sky-600 box-border h-32 w-32 p-4 border-4">
          border box
        </div>
        <div className="bg-sky-600 box-content h-32 w-32 p-4 border-4 ...">
          box content
        </div>

        <div className="bg-sky-600 box-border h-32 w-32 p-4 border-4 hover:box-content">
          hover
        </div>
      </div>
    </>
  );
}
