export default function Container() {
  return (
    <>
      <div className="container flex flex-col justify-between">
        <button className="bg-sky-500">Button</button>
        <button className="basis-1/4">02</button>
        <button className="basis-1/2">03</button>
      </div>
      <br />
      <div className="container flex flex-col justify-between">
        <button className="bg-green-200 hover:bg-fuchsia-600 active:bg-red-500">
          Button
        </button>
        <button className="basis-1/4">02</button>
        <button className="basis-1/2">03</button>
      </div>
    </>
  );
}
