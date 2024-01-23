"use client";

export default function Learning() {
  return (
    <main>
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
      <br />

      <div className="columns-3">
        <p>Well, let me tell you something, ...</p>
        <p>Sure, go ahead, laugh...</p>
        <p className="break-after-column">Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>

      <br />
      <div className="columns-2">
        <p>Well, let me tell you something, ...</p>
        <p>Sure, go ahead, laugh...</p>
        <p className="break-inside-avoid-column">
          Maybe we can live without...
        </p>
        <p>Look. If you think this is...</p>
      </div>
      <hr />
      <br />

      <div className="container mx-auto px-40">
        <span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
          Hello <br />
          World
        </span>

        <br />
        <span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
          Hello <br />
          World
        </span>
      </div>
    </main>
  );
}
