// Make an array of words
var words = ["moltres", "flareon", "ponyta", "vulpix"];
var scramble = Math.floor(Math.random() * words.length);
var iChooseYou = words[scramble];
var rightWord = [];
var wrongWord = [];
var scoreUnder = [];
var uWin = 1;
var uLose = 1;
var getThis = document.getElementById('winner');
var lostThis = document.getElementById('loser');

// DOM 
var youScoreDom = document.getElementsByClassName('underscores');
var docRightGuess = document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess');
 
console.log(iChooseYou);
var generateUnderscore = () => {
    for (var i = 0; i < iChooseYou.length; i++) {
        scoreUnder.push('_');
}
    return scoreUnder;
}
document.addEventListener('keypress', (event) => {
    var keyword = String.fromCharCode(event.keyCode);

    if (iChooseYou.indexOf(keyword) > -1) {
        rightWord.push(keyword);

        scoreUnder[iChooseYou.indexOf(keyword)] = keyword;
        youScoreDom[0].innerHTML = scoreUnder.join(' ');
        docRightGuess[0].innerHTML = rightWord;
    if (scoreUnder.join('') == iChooseYou) {
        alert('That is Correct!');
        getThis.append(uWin);

    }
    }
    else {
        wrongWord.push(keyword);
        docWrongGuess[0].innerHTML = wrongWord;
        lostThis.append(uLose++);
    }
});
youScoreDom[0].innerHTML = generateUnderscore().join(' ');

var randomNumber = 9;
console.log(randomNumber);

for (i = 0; i < randomNumber.length; i++) {
    alert(randomNumber[i]);
};
if (scoreUnder.join('') == words) {

    
};