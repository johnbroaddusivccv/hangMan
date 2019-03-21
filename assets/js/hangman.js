// Make an array of words
var words = ["moltres", "flareon", "ponyta", "vulpix"];
var scramble = Math.floor(Math.random() * words.length);
var iChooseYou = words[scramble];
var rightWord = [];
var wrongWord = [];
var scoreUnder = [];
var uWin = 0;
var uLose = 0;
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

    }
    }
    else {
        wrongWord.push(keyword);
        docWrongGuess[0].innerHTML = wrongWord;

    }
});
youScoreDom[0].innerHTML = generateUnderscore().join(' ');