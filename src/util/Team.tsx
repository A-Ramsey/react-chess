import PieceData from "./PieceData";
class Team {
  constructor(
    pieces: Array<PieceData>,
    baseColor: string,
    activeColor: string,
    borderColor: string,
  ) {
    this.pieces = pieces;
    this.baseColor = baseColor;
    this.activeColor = activeColor;
    this.borderColor = borderColor;

    this.pieces.every((piece) => piece.setTeam(this));
  }
}

export default Team;
