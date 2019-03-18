// pseudo
// Make an array of words
var words = ["moltres", "flareon", "ponyta", "vulpix"];    
var scramble = Math.floor(Math.random() * words.length);
var iChooseYou = words[scramble];    
var rightWord = [];    
var wrongWord = [];    
var scoreUnder = [];
// DOM 
// ===============================================================================
var youScoreDom = document.getElementsByClassName('underscores');


console.log(iChooseYou);
// Create _
// ===============================================================================
var generateUnderscore = () => {
    for(var i = 0; i < iChooseYou.length; i++) {
        scoreUnder.push('_');
        
    }
    return scoreUnder;
}
// Converted Into a String
// ===============================================================================

// ===============================================================================
// Capture Ssers Key Guess
// ===============================================================================
document.addEventListener('keypress', (event) => {
    var keyword = String.fromCharCode(event.keyCode);
// If Correct
// ===============================================================================
    if(iChooseYou.indexOf(keyword) > -1) {
        
        rightWord.push(keyword);
        youScoreDom[0].innerHTML = scoreUnder.join(' ');
        scoreUnder[iChooseYou.indexOf(keyword)] = keyword;
        if (scoreUnder.join(' ') == iChooseYou) {   
            alert('You Win');
        }
// If Wrong
// ===============================================================================
        wrongWord.push(keyword);
        
console.log(scoreUnder);

}});
youScoreDom[0].innerHTML = generateUnderscore().join(' ');

// wrongWord.push(keyword);
    //indexOf to replace ScoreUnder
// wins loses letters guessed