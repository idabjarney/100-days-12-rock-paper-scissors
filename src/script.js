import './styles/styles.scss';

console.log('-------------------------------')
// const prompt = require("prompt-sync")({ sigint: true });
const rockPaperArray = ['rock', 'paper', 'scissors'];
// const playerSelection = prompt('Choose rock, paper or scissors');
const computerChoice = computerSelection();


function computerSelection() {
  let randomNumber = Math.floor(Math.random()* rockPaperArray.length);
  let computerChoice = rockPaperArray[randomNumber];
  return computerChoice;
};

function playRound(player, computer) {
  if (player === computer) {
    return `Both the player and computer chose ${player}. It's a tie!`
  };

  if (player === 'rock') {
    if (computer === 'paper') {
      return `Player picked ${player} and the computer picked ${computer}. The computer wins!`;
    };
    if (computer === 'scissors') {
      return `Player picked ${player} and the computer picked ${computer}. The player wins!`;
    };
  }

  if (player === 'paper') {
    if (computer === 'scissors') {
      return `Player picked ${player} and the computer picked ${computer}. The computer wins!`;
    };
    if (computer === 'rock') {
      return `Player picked ${player} and the computer picked ${computer}. The player wins!`;
    };
  }

  if (player === 'scissors') {
    if (computer === 'rock') {
      return `Player picked ${player} and the computer picked ${computer}. The computer wins!`;
    };
    if (computer === 'paper') {
      return `Player picked ${player} and the computer picked ${computer}. The player wins!`;
    };
  }
}

console.log(playRound(playerSelection, computerChoice))




console.log('-------------------------------')
