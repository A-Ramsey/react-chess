import React, { useState } from "react";
import Square from "./Square";
import PieceData from "./util/PieceData";

interface Props {
  width: integer;
  height: integer;
}

function Board(props: Props) {
  const [pieces, setPieces] = useState([new PieceData(1, 0, <p>B</p>)]);
  function getRow(row: integer) {
    const squares = [];

    for (let x = 0; x < props.width; x++) {
      let renderPiece = false;
      pieces.forEach((piece) => {
        if (piece.isPosition(x, row)) {
          renderPiece = piece;
        }
      });
      squares.push(
        <Square
          key={x + "," + row}
          coloured={x % 2 == row % 2}
          piece={renderPiece}
        />,
      );
    }
    return (
      <div
        className={`grid grid-flow-col grid-cols-${props.width} justify-center`}
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
  return (
    <>
      <div className="">
        <h1 className="">This is a chess board</h1>
        {getSquares()}
      </div>
    </>
  );
}

export default Board;
