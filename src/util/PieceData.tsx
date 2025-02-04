class PieceData {
  constructor(x: int, y: int, content: JSX.Element = <p>A</p>) {
    this.x = x;
    this.y = y;
    this.content = content;
  }

  getPosition(): [int, int] {
    return [this.x, this.y];
  }

  isPosition(testX: int, testY: int) {
    return this.x === testX && this.y === testY;
  }

  getContent(): JSX.Element {
    return this.content;
  }
}

export default PieceData;
