class GuessingGame {
    constructor() {
      this.min = 0;
      this.max = 0;
      this.number = 0;
    }

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }

    guess() {
      this.number = Math.floor((this.min + (this.max - this.min)) / 2);
      return this.number;
    }

    lower() {
      this.max = this.number - 1;
    }

    greater() {
        this.min = this.number + 1;
    }
}

module.exports = GuessingGame;
