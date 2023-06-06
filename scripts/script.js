
let playerScore = 0;
let computerScore = 0;

const playerResult = document.querySelector('#player-score');
const computerResult = document.querySelector('#computer-score');
const result = document.querySelector("#result-explanation");
console.log(result);


const buttonPaper = document.querySelector('#paper');
const buttonScissors = document.querySelector('#scissors');
const buttonRock = document.querySelector('#rock');


function setScores(event) {

    const target = event.target.getAttribute('id');
    result.textContent = singleRound(target, getComputerSelection());
    result.style.margin = '30px';

   
    if (isWinner()) {
        clearScores();
    }

    
    playerResult.textContent = playerScore;
    computerResult.textContent = computerScore;

    
    

   
}


buttonPaper.addEventListener('click', setScores);

buttonScissors.addEventListener('click', setScores);

buttonRock.addEventListener('click', setScores);


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



    function singleRound(playerSelection, computerSelection) {

        if (playerSelection === 'paper') {
            if (computerSelection === 'scissors') {
                computerScore++;

                if (isWinner()) {
                    
                    return checkWinner();
                }

                return 'Computer Wins this round! Scissors beats Paper!';
            }
            else if (computerSelection === 'rock') {
                playerScore++;

                if (isWinner()) {
                  
                    return checkWinner();
                }

                return 'You Win this round! Paper beats Rock!';
            }
            else {
                return 'Tie! Both chose Paper!';
            }
        }
        else if (playerSelection === 'scissors') {
            if (computerSelection === 'rock') {
                computerScore++;

               if (isWinner()) {
                   
                    return checkWinner();
                }

                return 'Computer Wins this round! Rock beats Scissors!';
            }
            else if (computerSelection === 'paper') {
                playerScore++;

                if (isWinner()) {
                   
                    return checkWinner();
                }

                return 'You Win this round! Scissors beats Paper!';
            }
            else {
                return 'Tie! Both chose Scissors!';
            }
        }
        else if (playerSelection === 'rock') {
            if (computerSelection === 'paper') {
                computerScore++;

               if (isWinner()) {
                    
                    return checkWinner();
                }

                return 'Computer Wins this round! Paper beats Rock!';
            }
            else if (computerSelection === 'scissors') {
                playerScore++;
                
                return 'You Win this round! Rock beats Scissors!';
            }
            else {
                return 'Tie! Both chose Rock!';
            }
        }
        
     
    }


    function isWinner() {
        if (playerScore === 5 || computerScore === 5) {
            return true;
        }
        return false;
    }

    function checkWinner() {
        if (playerScore > computerScore) {
            return `Congratulations! You Win! Final score is 
            Player: ${playerScore} - Computer: ${computerScore} `;
        }
        else {
            return `Unlucky! Computer Wins! Final score is 
            Player: ${playerScore} - Computer: ${computerScore}`;
        }
    }

    function clearScores() {
        playerScore = 0;
        computerScore = 0;
    }

    
   

   
    
