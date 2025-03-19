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
  console.log(props.data.getTeam().baseColor);
  return (
    <div
      onClick={clickHandler}
      className={`rounded-full ${moveMode ? props.data.getTeam().baseColor : props.data.getTeam().activeColor} text-center`}
    >
      {props.data.getContent()}
    </div>
  );
}

export default Piece;
