import './styles/styles.scss';

const rockPaperArray = ['rock', 'paper', 'scissors'];
const playerScoreElement = document.querySelector('.player-score');
const aiScoreElement = document.querySelector('.ai-score');
const playerSelectionDisplay = document.querySelector('.player-selection-display');
const aiSelectionDisplay = document.querySelector('.ai-selection-display');
const selectionButtons = document.querySelectorAll('.select-button');

let playerScore = 0;
let aiScore = 0;


selectionButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    playerSelectionDisplay.style.border = 'none'; 
    playerSelectionDisplay.style.boxShadow = 'none'; 
    aiSelectionDisplay.style.border = 'none'; 
    aiSelectionDisplay.style.boxShadow = 'none'; 
    const playerSelection = rockPaperArray[index];
    playerSelectionDisplay.innerText = `'${playerSelection}'`;
    aiSelectionDisplay.innerText = '';
    setTimeout(() => {
      const computerSelection = generateComputerSelection();
      aiSelectionDisplay.innerText = `'${computerSelection}'`;
      const didWin = getResults(playerSelection, computerSelection);
      
      if (didWin === true) {
        playerScore++;
        playerScoreElement.innerText = playerScore;
        // playerSelectionDisplay.style.border = 'solid 1px #62ac45';
        playerSelectionDisplay.style.boxShadow = '0px 0px 3px 1px #76c756a8';
        // aiSelectionDisplay.style.border = 'solid 1px #ca4848'; 
        aiSelectionDisplay.style.boxShadow = '0px 0px 3px 1px #e25252b2';
      } else if (didWin === false) {
        aiScore++;
        aiScoreElement.innerText = aiScore;
        // aiSelectionDisplay.style.border = 'solid 1px #62ac45';
        aiSelectionDisplay.style.boxShadow = '0px 0px 3px 1px #76c756a8';
        // playerSelectionDisplay.style.border = 'solid 1px #ca4848';
        playerSelectionDisplay.style.boxShadow = '0px 0px 3px 1px #e25252b2';
      } else {
        // playerSelectionDisplay.style.border = 'border: 2px solid #f5cb41';
        playerSelectionDisplay.style.boxShadow = '0px 0px 3px 1px #f5cb41';
        // aiSelectionDisplay.style.border = 'border: 2px solid #f5cb41'; 
        aiSelectionDisplay.style.boxShadow = '0px 0px 3px 1px #f5cb41';
      }
    }, 1000);
  })
})

function generateComputerSelection() {
  let randomNumber = Math.floor(Math.random()* rockPaperArray.length);
  let computerChoice = rockPaperArray[randomNumber];
  return computerChoice;
};

function getResults(player, computer) {
  if (player === computer) {
    return null
  };

  if (player === 'rock') {
    if (computer === 'paper') {
      return false;
    };
    if (computer === 'scissors') {
      return true;
    };
  }

  if (player === 'paper') {
    if (computer === 'scissors') {
      return false;
    };
    if (computer === 'rock') {
      return true;
    };
  }

  if (player === 'scissors') {
    if (computer === 'rock') {
      return false;
    };
    if (computer === 'paper') {
      return true;
    };
  }
};





