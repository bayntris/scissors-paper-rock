function getComputerSelection() {
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

function getPlayerSelection() {
    
    let playerSelection = prompt('Please choose between Scissors, Paper or Rock', '').toLowerCase();
    
    if (playerSelection === 'paper' || playerSelection === 'scissors' || playerSelection === 'rock') {
        return playerChoice;
    }
    else {
        playerSelection = prompt('Invalid answer, please choose between Paper, Scissors or Rock', '');
        return playerSelection.toLowerCase();
    }
    
}