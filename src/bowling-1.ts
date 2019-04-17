export default class Game {
  private _rolls: number[] = [];
  private _currentRoll: number = 0;

  constructor() {
    this._rolls = Array(21).fill(0);
  }

  public roll(pins: number = 0) {
    this._rolls[this._currentRoll++] = pins;
  }

  public score() {
    let score = 0;
    let frameIndex = 0;
    for (let frame = 0; frame < 10; frame += 1) {
      if (this.isStrike(frameIndex)) {
        score += 10 + this.strikeBonus(frameIndex);
        frameIndex += 1;
      } else if (this.isSpare(frameIndex)) {
        score += 10 + this.spareBouns(frameIndex);
        frameIndex += 2;
      } else {
        score += this.sumOfBallsInFrame(frameIndex);
        frameIndex += 2;
      }
    }

    return score;
  }

  private sumOfBallsInFrame(frameIndex: number) {
    return this._rolls[frameIndex] + this._rolls[frameIndex + 1];
  }

  private spareBouns(frameIndex: number) {
    return this._rolls[frameIndex + 2];
  }

  private strikeBonus(frameIndex: number) {
    return this._rolls[frameIndex + 1] + this._rolls[frameIndex + 2];
  }

  private isSpare(frameIndex: number) {
    return this._rolls[frameIndex] + this._rolls[frameIndex + 1] === 10;
  }

  private isStrike(frameIndex: number) {
    return this._rolls[frameIndex] === 10;
  }
}
