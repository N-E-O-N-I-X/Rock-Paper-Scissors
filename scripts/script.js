let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}

updateScoreElement();

/* Сверху "shortcut"
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/

let isAutoPlaying = false;
let intervalID;

//const autoPlay = () => {

//};

function autoPlay() {
  if (!isAutoPlaying) {
      intervalID = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalID);
    isAutoPlaying = false;
  }
}

document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  });

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
  });

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper')
  } else if (event.key === 's') {
    playGame('scissors')
  }
})

function playGame (playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
      result='You lose';
    } 
    else if (computerMove === 'paper') {
      result='You win';
    }
    else if (computerMove === 'scissors') {
      result='Tie';
    }
  } else if (playerMove === 'paper')  {
    if (computerMove == 'rock') {
      result='You win';
    } 
    else if (computerMove == 'paper') {
      result='Tie';
    }
    else if (computerMove == 'scissors') {
      result='You lose';
    }
  } else if (playerMove === 'rock') {
    if (computerMove == 'rock') {
result='Tie';
    } 
    else if (computerMove == 'paper') {
      result='You lose';
    }
    else if (computerMove == 'scissors') {
      result='You win';
    }
  }

  if (result === 'You win') {
    score.wins += 1;
  } 
  else if (result === 'You lose') {
    score.losses += 1;
  }
  else if (result === 'Tie') {
    score.ties += 1;
  }

localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

document.querySelector('.js-result')
  .innerHTML = result;

document.querySelector('.js-moves')
    .innerHTML = `Your move
  <img src="images/${playerMove}.png" class="move-icon"> - 
  <img src="images/${computerMove}.png" class="move-icon">
  Computer's move`;
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove () {

  let computerMove = '';
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  }
  else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } 
  else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;

}
