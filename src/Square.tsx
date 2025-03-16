import { useContext } from "react";
import Piece from "./Piece";
import PieceData from "./util/PieceData";

interface Props {
  coloured: boolean;
  piece: PieceData | boolean;
  x: int;
  y: int;
  squareClick: any;
}

function Square(props: Props) {
  function squareClick() {
    props.squareClick(props.x, props.y);
  }
  return (
    <>
      <div
        className={`w-10 h-10 border border-1 border-black ${props.coloured ? "bg-black" : "bg-white"}`}
        onClick={squareClick}
      >
        {props.piece && <Piece data={props.piece} />}
      </div>
    </>
  );
}

export default Square;
