//start game 


const solve1 = document.getElementById("word");
const wins = document.getElementById("wins");
const remaining = document.getElementById("remaining");
const badGuess = document.getElementById("badGuesses");

const winCount = 0;
const wordList = ["tottenham", "liverpool", "bournmouth", "newcastle", "arsenal"];
wrongGuesses = [];
correctGuesses = [];
keyGuess = " ";
const word = wordList[Math.floor(Math.random() * wordList.length)];

console.log(wordList);
console.log(word);
console.log(wrongGuesses);
console.log(correctGuesses);

//creates dashed out array the length of the word
for (var i = 0; i < word.length; i++) {
    correctGuesses.push("_");
    console.log(correctGuesses);
    console.log(word.length);
};
solve1.innerHTML = correctGuesses.join(' ');

//on key event to parse where the response goes
document.onkeyup = function (event) {
    var keyGuess = event.key;

    if (word.indexOf(keyGuess) === -1) {
        wrongGuesses.push(keyGuess);
        badGuess.innerHTML = wrongGuesses;
        remaining.innerHTML = "Chances Remaining: " + (12 - wrongGuesses.length);
    } else {
        for (var i = 0; i < word.length; i++) {
            if (word[i] === keyGuess) {
                correctGuesses[i] = keyGuess;
            }
        }
        solve1.innerHTML = correctGuesses.join(' ');
    }

    console.log("right" + correctGuesses);
    console.log("wrong" + wrongGuesses);

    //finsish alerts
    if (correctGuesses.indexOf('_') === -1) {
        alert('You Won!!!');
        wins.innerHTML = "Wins: " + (winCount + 1)

    }
    else if (12 - wrongGuesses.length == 0) {
        alert("You lost!!!");

    }
};

function reset() {
    
    var wordList = ["tottenham", "liverpool", "bournmouth", "newcastle", "arsenal"];
    var word = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(wordList);
    console.log(word);
    console.log(wrongGuesses);
    console.log(correctGuesses);
    for (var i = 0; i < word.length; i++) {
        correctGuesses.push("_");
    }
        wrongGuesses = [];
        correctGuesses = [];
        keyGuess = " ";
        badGuess.innerHTML = wrongGuesses;
        for (var i = 0; i < word.length; i++) {
            correctGuesses.push("_");
            console.log(correctGuesses);
            console.log(word.length);
        };
        solve1.innerHTML = correctGuesses.join(' ');
    }
