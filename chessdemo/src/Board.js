import { Square } from "./Square";
import { useState } from "react";
import { useEffect } from "react";
import "./Board.css";

export const Board = function () {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xro, setXro] = useState(0);
  const gameOver = function () {
    if (squares[0] === squares[1] && squares[1] === squares[2] && squares[0])
      return true;
    if (squares[3] === squares[4] && squares[4] === squares[5] && squares[3])
      return true;
    if (squares[6] === squares[7] && squares[7] === squares[8] && squares[6])
      return true;
    if (squares[0] === squares[3] && squares[3] === squares[6] && squares[0])
      return true;
    if (squares[1] === squares[4] && squares[4] === squares[7] && squares[1])
      return true;
    if (squares[2] === squares[5] && squares[5] === squares[8] && squares[2])
      return true;
    if (squares[0] === squares[4] && squares[4] === squares[8] && squares[0])
      return true;
    if (squares[2] === squares[4] && squares[4] === squares[6] && squares[2])
      return true;
    return false;
  };
  useEffect(() => {
    if (gameOver()) {
      setTimeout(() => {
        alert("Gameover, the page will reload soon");
        window.location.reload();
      }, 500);
    }
  });
  const handleclick = function (i) {
    if (squares[i]) return;
    const nextSquare = squares.slice();
    if (xro) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    setSquares(nextSquare);
    setXro(1 - xro);
  };
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onclick={() => handleclick(0)} />
        <Square value={squares[1]} onclick={() => handleclick(1)} />
        <Square value={squares[2]} onclick={() => handleclick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onclick={() => handleclick(3)} />
        <Square value={squares[4]} onclick={() => handleclick(4)} />
        <Square value={squares[5]} onclick={() => handleclick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onclick={() => handleclick(6)} />
        <Square value={squares[7]} onclick={() => handleclick(7)} />
        <Square value={squares[8]} onclick={() => handleclick(8)} />
      </div>
    </>
  );
};
