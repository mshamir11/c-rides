"use client";

export default function Learning() {
  return (
    <div>
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
      <br />
      <hr />
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
      <br />
      <hr />
      <div className="p-4">
        <h1 className="text-xl font-bold">Display</h1>
        <span className="text-slate-500">
          Different displays present are inline, inline-block, block, flow-root,
          flex, grid.
        </span>
        <br />
        <div className="my-4">
          When controlling the flow of text, using the CSS property
          <span className="inline">display: inline</span>
          will cause the text inside the element to wrap normally. While using
          the property{" "}
          <span className="inline-block">display: inline-block</span>
          will wrap the element to prevent the text inside from extending beyond
          its parent. Lastly, using the property{" "}
          <span className="block">display: block</span>
          will put the element on its own line and fill its parent.
        </div>

        <div className="my-4">
          <h2 className="font-bold">Grid</h2>
          <div className="flex justify-evenly">
            <span className="inline-grid grid-cols-3 gap-4">
              <span>01</span>
              <span>02</span>
              <span>03</span>
              <span>04</span>
              <span>05</span>
              <span>06</span>
            </span>
            <span className="inline-grid grid-cols-3 gap-4">
              <span>01</span>
              <span>02</span>
              <span>03</span>
              <span>04</span>
              <span>05</span>
              <span className="hover:hidden">06</span>
            </span>
          </div>
        </div>
      </div>
      <br />
      <hr />
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
      <br />
      <hr />
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Space </h1>
        <div className="flex space-x-5">
          <div className="bg-red-500">01</div>
          <div className="bg-green-500">02</div>
          <div className="bg-purple-500">03</div>
        </div>
      </div>
      <hr />
      <br />
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
      <hr />
      <br />
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
      <hr />
      <br />
      <table className="border-collapse border border-slate-400 ...">
        <thead>
          <tr>
            <th className="border border-slate-300 ...">State</th>
            <th className="border border-slate-300 ...">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300 ...">Indiana</td>
            <td className="border border-slate-300 ...">Indianapolis</td>
          </tr>
          <tr>
            <td className="border border-slate-300 ...">Ohio</td>
            <td className="border border-slate-300 ...">Columbus</td>
          </tr>
          <tr>
            <td className="border border-slate-300 ...">Michigan</td>
            <td className="border border-slate-300 ...">Detroit</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
