export default function BoxDecoration() {
  return (
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
  );
}
