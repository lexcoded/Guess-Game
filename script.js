const guessButton = document.querySelector("#guessButton");
const playAgainButton = document.querySelector("#play-again-button");
const guessInput = document.querySelector("#guessInput");
let feedback = document.querySelector("#feedback");
let scoreDisplay = document.querySelector("#score");
let numberOfGuesses = 0;


/*
    getRandomNumber() generates a 
    random number between 1 and 100 for the 
    user to guess.
*/


function getRandomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}



let randomNumber = getRandomNumber();


/*
    compare the user's guess to the
     random number and provide feedback.
*/


guessButton.addEventListener("click", function() {
    const userGuess = parseInt(guessInput.value);
    
    
    scoreDisplay.textContent = ++numberOfGuesses;

    if(userGuess === randomNumber) {
        feedback.textContent = "Congratulations! You guessed the correct number!";
        feedback.style.color = "green";
        guessButton.disabled = true;
        console.log(randomNumber);
    } else if(userGuess < randomNumber) {
        feedback.textContent = "Too low! Try again.";
        feedback.style.color = "red";
        console.log(randomNumber);
    } else {
        feedback.textContent = "Too high! Try again.";
        feedback.style.color = "red";   
        console.log(randomNumber);
    }
});

/*
    Reset the game when the user
     clicks the "Play Again" button.
*/

playAgainButton.addEventListener("click", function() {
    numberOfGuesses = 0;
    randomNumber = getRandomNumber();
    scoreDisplay.style.display = "none";
    feedback.textContent = "";
    guessInput.value = "";
    guessButton.disabled = false;
    
});