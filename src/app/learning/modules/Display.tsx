export default function Display() {
  return (
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
        will cause the text inside the element to wrap normally. While using the
        property <span className="inline-block">display: inline-block</span>
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
  );
}
