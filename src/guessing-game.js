class GuessingGame {
    constructor() {
      var arr = [];
    }

    setRange(min, max) {
      for (var i = min; i <= max; i++) {
        arr.push(i);
      }
    }

    guess() {
      var j = Math.floor(arr.length / 2);
      return arr[j];
    }

    lower() {
      arr.length = j;
    }

    greater() {
      var arrG = arr;
      arr = arrG.slice(j+1);
    }
}

module.exports = GuessingGame;
