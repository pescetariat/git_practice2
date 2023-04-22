let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:


let generateTarget= () => {
    return Math.floor(Math.random() * 10);
}

let compareGuesses=(humanGuess, computerGuess, targetGuess) => {
    if (humanGuess < 0 || humanGuess > 9) {
        window.alert('Please enter a number between 0 and 9.');
    }
    let humanDifference = Math.abs(targetGuess - humanGuess);
    let computerDifference = Math.abs(targetGuess - computerGuess);
    return humanDifference <= computerDifference;
}

let updateScore=(winner) => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

let advanceRound=() => {
    currentRoundNumber++;
}