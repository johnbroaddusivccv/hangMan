// pseudo
// Make an array of words
var words = ["Charmander", "Magmar", "Flareon", "Ponyta"]
var scramble = Math.floor(Math.random() * words.length);
var scoreUnder = [];
var iChooseYou = words[scramble];
console.log(iChooseYou);
// add or subtract underscores for length of words
var generateUnderscore = () => {
    for(var i = 0; i < iChooseYou.length; i++) {
        scoreUnder.push('_');
    }
    return scoreUnder;
}

console.log(generateUnderscore());
// input users guess
// is guest right
// if right
// if wrong
// wins loses letters guessed