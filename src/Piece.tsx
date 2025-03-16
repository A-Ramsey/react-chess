import React, { useState, useContext } from "react";
import PieceData from "./util/PieceData";

interface Props {
  data: PieceData;
}

function Piece(props: Props) {
  const [moveMode, setMoveMode] = useState(false);
  function clickHandler() {
    setMoveMode((mode) => !mode);
  }
  return (
    <div
      onClick={clickHandler}
      className={`rounded-full ${moveMode ? "bg-blue-500" : "bg-red-500"} text-center`}
    >
      {props.data.getContent()}
    </div>
  );
}

export default Piece;
