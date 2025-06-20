
function Rbutton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="bg-red-300 p-2 rounded hover:bg-red-400 transition"
    >
      {children || "My Button"}
    </button>
  );
}

export default Rbutton;
