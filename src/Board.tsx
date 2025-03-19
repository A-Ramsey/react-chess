import React, { useState, createContext, useEffect } from "react";
import Square from "./Square";
import Team from "./util/Team";
import PieceData, { getPieceBySquare, getActivePiece } from "./util/PieceData";

interface Props {
  width: integer;
  height: integer;
}

function Board(props: Props) {
  const [pieces, setPieces] = useState([
    new Team([new PieceData(1, 0, <p>B</p>)], "bg-red-500", "bg-red-700"),
    new Team([new PieceData(0, 1, <p>B</p>)], "bg-green-500", "bg-green-700"),
  ]);
  const [clickedSquare, setClickedSquare] = useState({ x: -1, y: -1 });
  const [rerender, setRerender] = useState(0);

  function getRow(row: integer) {
    const squares = [];

    for (let x = 0; x < props.width; x++) {
      let renderPiece = false;
      [].concat(...pieces.map((team) => team.pieces)).forEach((piece) => {
        if (piece.isPosition(x, row)) {
          renderPiece = piece;
        }
      });
      squares.push(
        <Square
          key={x + "," + row}
          coloured={x % 2 == row % 2}
          piece={renderPiece}
          x={x}
          y={row}
          squareClick={squareClick}
        />,
      );
    }
    return (
      <div
        className={`grid grid-flow-col grid-cols-${props.width} justify-center`}
        key={row}
      >
        {squares}
      </div>
    );
  }

  function getSquares() {
    const rows = [];
    for (let y = 0; y < props.height; y++) {
      rows.push(getRow(y));
    }
    return rows;
  }

  function squareClick(x: number, y: number) {
    const piece = getPieceBySquare(pieces, x, y);
    const activePiece = getActivePiece(pieces);

    //used to trigger rerender
    setClickedSquare({ x: x, y: y });

    if (piece) {
      piece.activate();
    } else if (activePiece) {
      activePiece.move(x, y);
    }
  }

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="">{getSquares()}</div>
      </div>
    </>
  );
}

export default Board;
