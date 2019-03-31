// Make an array of words
var words = ["moltres", "flareon", "ponyta", "vulpix"];
var scramble = Math.floor(Math.random() * words.length);
var iChooseYou = words[scramble];
var rightWord = [];
var wrongWord = [];
var scoreUnder = [];
var uWin = 1;
var uLose = 1;
var getThis = document.getElementById("winner");
var lostThis = document.getElementById("loser");

// DOM
var youScoreDom = document.getElementsByClassName("underscores");
var docRightGuess = document.getElementsByClassName("rightGuess");
var docWrongGuess = document.getElementsByClassName("wrongGuess");

console.log(iChooseYou);
var generateUnderscore = () => {
  for (var i = 0; i < iChooseYou.length; i++) {
    scoreUnder.push("_");
  }
  return scoreUnder;
};
// I had trouble removing the comma from the right and wrong section
// I had trouble adding to the score board as the game went on.
// I also had trouble with creating a function that would give me a new word and reset the game back to its original State.
// I really felt like I fell short on a lot of things in HangMan

document.addEventListener("keypress", event => {
  var keyword = String.fromCharCode(event.keyCode);

  if (iChooseYou.indexOf(keyword) > -1) {
    rightWord.push(keyword);

    scoreUnder[iChooseYou.indexOf(keyword)] = keyword;
    youScoreDom[0].innerHTML = scoreUnder.join(" ");
    docRightGuess[0].innerHTML = rightWord;
    if (scoreUnder.join("") == iChooseYou) {
      alert("That is Correct!");
      getThis.append("Wins: " + uWin);
    }
  } else {
    wrongWord.push(keyword + " ");
    docWrongGuess[0].innerHTML = wrongWord;
    console.log(wrongWord);
  }
});
youScoreDom[0].innerHTML = generateUnderscore().join(" ");

// This what I was using to try to add to my Score Board.
// I find that as soon as I start to mess around with numbers and conditionals in js
// I easily get lost and don't know how to explain how it is that I'm lost in concept.
var randomNumber = 9;
console.log(randomNumber);

for (i = 0; i < randomNumber.length; i++) {
  alert(randomNumber[i]);
}
if (scoreUnder.join("") == words) {
}
