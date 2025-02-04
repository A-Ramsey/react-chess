import Piece from "./Piece";
import PieceData from "./util/PieceData";

interface Props {
  coloured: boolean;
  piece: PieceData | boolean;
}

function Square(props: Props) {
  return (
    <>
      <div
        className={`w-10 h-10 border border-1 border-black ${props.coloured ? "bg-black" : "bg-white"}`}
      >
        {props.piece && <Piece data={props.piece} />}
      </div>
    </>
  );
}

export default Square;
