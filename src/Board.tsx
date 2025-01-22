import Square from "./Square";

interface Props {
  width: integer;
  height: integer;
}

function Board(props: Props) {
  function getRow(row: integer) {
    const squares = [];

    for (let x = 0; x < props.width; x++) {
      squares.push(<Square coloured={x % 2 == row % 2} />);
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
