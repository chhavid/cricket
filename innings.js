class Innings {
  constructor(remainingBalls, wicketLimit) {
    this.remainingBalls = remainingBalls;
    this.wicketLimit = wicketLimit;
    this.runs = 0;
    this.wickets = 0;
    this.balls = 0;
  }

  #incrementBallCount() {
    this.balls++;
  }

  dot() {
    this.#incrementBallCount();
  }

  single() {
    this.runs++;
    this.#incrementBallCount();
  }

  double() {
    this.runs += 2;
    this.#incrementBallCount();
  }

  boundary() {
    this.runs += 4;
    this.#incrementBallCount();
  }

  overBoundary() {
    this.runs += 6;
    this.#incrementBallCount();

  }

  wicket() {
    this.wickets++;
    this.#incrementBallCount();
  }

  display(event) {
    console.log(event);
    console.log('Balls: ', this.balls);
    console.log('Runs: ', this.runs);
    console.log('Wickets: ', this.wickets, '\n---------');
  }

  isGameOver() {
    return this.wickets === this.wicketLimit ||
      this.remainingBalls === this.balls;
  }
}

exports.Innings = Innings;
