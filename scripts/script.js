function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);

    if (number === 0) {
        return 'paper';
    }
    else if (number === 1) {
        return 'scissors';
    }
    else if (number === 2) {
        return 'rock';
    }
    else {
        return 'Sorry, something has gone wrong';
    }
}

function playerSelection() {
    
    let playerChoice = prompt('Please choose between Scissors, Paper or Rock', '').toLowerCase();
    
    if (playerChoice === 'paper' || playerChoice === 'scissors' || playerChoice === 'rock') {
        return playerChoice;
    }
    else {
        playerChoice = prompt('Invalid answer, please choose between Paper, Scissors or Rock', '');
        return playerChoice.toLowerCase();
    }
    
}