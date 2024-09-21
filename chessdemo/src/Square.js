import "./Square.css";
export const Square = function ({ value, onclick }) {
  return (
    <>
      <button className="square" onClick={onclick}>
        {value}
      </button>
    </>
  );
};
