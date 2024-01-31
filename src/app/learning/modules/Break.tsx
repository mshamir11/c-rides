export default function Break() {
  return (
    <>
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
    </>
  );
}
