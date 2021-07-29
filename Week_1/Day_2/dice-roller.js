// node dice-roller.js 3
// Rolled 3 dice: 2, 6, 5


var num = process.argv.slice(2);
num = Number(num);

function rollingDice(num) {
  // make the dice rolling "num" times.
  // return the results.
  var diceResults = "";
  for (var i = 0; i < num; i++) {
    var resultOfEachDice = "";
    resultOfEachDice = Math.floor((Math.random() * 6) + 1);
    diceResults += resultOfEachDice + ", ";
  }
  var lastComma = diceResults.lastIndexOf(", ");
  diceResults = diceResults.slice(0, lastComma);

  return diceResults;
}

console.log("Rolled " + num + " dice: " + rollingDice(num));