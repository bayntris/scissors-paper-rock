
let playerScore = 0;
let computerScore = 0;



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
        return playerSelection;
    }
    else {
        playerSelection = prompt('Invalid answer, please choose between Paper, Scissors or Rock', '');
        return playerSelection.toLowerCase();
    }
}

    function singleRound(playerSelection, computerSelection) {

        

        if (playerSelection === 'paper') {
            if (computerSelection === 'scissors') {
                computerScore++;
                return 'Computer Wins! Scissors beats Paper!';
            }
            else if (computerSelection === 'rock') {
                playerScore++;
                return 'You Win! Paper beats Rock!';
            }
            else {
                return 'Tie! Both chose Paper!';
            }
        }
        else if (playerSelection === 'scissors') {
            if (computerSelection === 'rock') {
                computerScore++;
                return 'Computer Wins! Rock beats Scissors!';
            }
            else if (computerSelection === 'paper') {
                playerScore++;
                return 'You Win! Scissors beats Paper!';
            }
            else {
                return 'Tie! Both chose Scissors!';
            }
        }
        else if (playerSelection === 'rock') {
            if (computerSelection === 'paper') {
                computerScore++;
                return 'Computer Wins! Paper beats Rock!';
            }
            else if (computerSelection === 'scissors') {
                playerScore++;
                return 'You Win! Rock beats Scissors!';
            }
            else {
                return 'Tie! Both chose Rock!';
            }
        }
     
    }


    function game() {


        for (let i = 0; i <= 4; i++) {
            console.log(singleRound(getPlayerSelection(), getComputerSelection()));
            console.log(`Player Score: ${playerScore} - Computer Score ${computerScore}`);
        }
        console.log(checkWinner());
        console.log(clearScores());

    }


    function checkWinner() {
        if (playerScore > computerScore) {
            return `Congratulations! Player Wins!!!`;
        }
        else if (computerScore > playerScore) {
            return `Unlucky! Computer Wins!!!`;
        }
        else {
            return `Wow! It's a tie`;
        }
    }

    function clearScores() {
        playerScore = 0;
        computerScore = 0;
    }

    game();
   

   
    
