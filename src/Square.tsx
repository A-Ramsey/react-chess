interface Props {
  coloured: boolean;
}

function Square(props: Props) {
  return (
    <>
      <div
        className={`w-10 h-10 border border-1 border-black ${props.coloured ? "bg-black" : "bg-white"}`}
      ></div>
    </>
  );
}

export default Square;
