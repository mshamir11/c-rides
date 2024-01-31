export default function Grid() {
  return (
    <div className="p-4 ">
      <h1 className="text-xl font-bold">Grid</h1>
      <div className="flex justify-center">
        <div className="grid gap-12 grid-cols-2">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
        </div>
      </div>
      <br />
      <hr />
      <h1 className="text-xl font-bold">Align Content</h1>
      <div className="bg-sky-600 h-56 grid grid-cols-3 gap-4 content-center ...">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
      </div>
    </div>
  );
}
