import Team from "./Team";

class PieceData {
  constructor(x: int, y: int, content: JSX.Element = <p>A</p>) {
    this.x = x;
    this.y = y;
    this.content = content;
    this.active = false;
    this.team = null;
  }

  setTeam(team: Team) {
    this.team = team;
  }

  getTeam() {
    return this.team;
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

  activate(): null {
    this.active = true;
  }

  move(x: number, y: number): null {
    this.x = x;
    this.y = y;
    this.active = false;
  }
}

export function getPieceBySquare(pieces: Team[], x: number, y: number) {
  return [].concat(...pieces.map((team) => team.pieces)).filter((piece) => {
    return piece.x == x && piece.y == y;
  })[0];
}

export function getActivePiece(pieces: Team[]) {
  return [].concat(...pieces.map((team) => team.pieces)).filter((piece) => {
    return piece.active;
  })[0];
}

export default PieceData;
