    var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var wins = 0;

        var losses = 0;

        var guessesLeft = 9;

        var guessesSoFar = [];

        var userGuess = null;

        var letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];

        console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);

        document.onkeyup = function (event) {

            var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

            if (guessesSoFar.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) {

        guessesSoFar[guessesSoFar.length] = userGuess;


    guessesLeft--;

            }


            if (letterToBeGuessed == userGuess) {

        wins++;

            var html = "<h1>The Psychic Game</h1>" + "<h3>Guess what letter I\'m thinking of</h3>" + "<h3>Wins: " + wins + "</h3>" + "<h3>Losses: " + losses + "</h3>" + "<h3>Guesses Left: " + guessesLeft + "</h3>" + "<h3>Your guesses so far: " + guessesSoFar + "</h3>";
            }