import React, { useState } from "react";
import PieceData from "./util/PieceData";

interface Props {
  data: PieceData;
}

function Piece(props: Props) {
  return <>{props.data.getContent()}</>;
}

export default Piece;
