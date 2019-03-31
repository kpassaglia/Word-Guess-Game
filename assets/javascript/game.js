
//capture guess
// is guess match a letter in word
//remove guess count from 12


//writes key guessed 
// document.body.onkeyup = function(event) {
//     document.getElementById("badGuess").innerHTML = String.fromCharCode(event.keyCode);
//   }

// const wins = 0;

// const badGuess = document.getElementById("currentWord");  

//inititialize game


const solve1 = document.getElementById("Word");
const wins = document.getElementById("wins");
const remaining = document.getElementById("remaining");
const wordList = ["tottenham", "liverpool", "bournmouth"];
allowedGuesses = 12;
wrongGuesses = [];
correctGuesses = [];
keyGuess = " ";
const word = wordList[Math.floor(Math.random() * wordList.length)];

console.log(wordList);
console.log(word);
console.log(allowedGuesses);
console.log(wrongGuesses);
console.log(correctGuesses);

for (var i = 0; i < word.length; i++) {
    correctGuesses.push("_");
    console.log(correctGuesses);
    console.log(word.length);
};

document.onkeyup = function (event) {
    var keyGuess = event.key;
    console.log(keyGuess);
    console.log(word[0]);
}
console.log("test" + event.key);
