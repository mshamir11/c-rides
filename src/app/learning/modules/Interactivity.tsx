export default function Interactivity() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Interactivity </h1>
      <div className="flex space-x-5 justify-center">
        <label>
          <input type="checkbox" /> Browser default
        </label>
        <label>
          <input type="checkbox" className="accent-pink-500" defaultChecked />{" "}
          Customized
        </label>
      </div>
      <h2>Text Area</h2>
      <div className="flex space-x-5 justify-center">
        <textarea className="resize rounded-md bg-red-600"></textarea>
      </div>
    </div>
  );
}
