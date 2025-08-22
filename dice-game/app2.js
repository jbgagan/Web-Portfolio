const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const rollBtn = document.getElementById('rollBtn');
const resetBtn = document.getElementById('resetBtn');
const score1El = document.getElementById('score1');
const score2El = document.getElementById('score2');
const turnText = document.getElementById('turnText');
const winnerEl = document.getElementById('winner');
const player1Box = document.getElementById('p1');
const player2Box = document.getElementById('p2');

let scores = [0, 0];
let currentPlayer = 0; // 0 = player1, 1 = player2
const WINNING_SCORE = 100;

function randomDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
  if (winnerEl.textContent !== "") return; // stop if game over

  const d1 = randomDie();
  const d2 = randomDie();
  const sum = d1 + d2;

  dice1.textContent = String.fromCharCode(0x267F + d1);
  dice2.textContent = String.fromCharCode(0x267F + d2);

  // update score
  scores[currentPlayer] += sum;

  if (currentPlayer === 0) {
    score1El.textContent = scores[0];
  } else {
    score2El.textContent = scores[1];
  }

  // check winner
  if (scores[currentPlayer] >= WINNING_SCORE) {
    winnerEl.textContent = `🎉 Player ${currentPlayer + 1} Wins!`;
    rollBtn.disabled = true;
    return;
  }

  // switch turn
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  turnText.textContent = `Player ${currentPlayer + 1}`;
  player1Box.classList.toggle('active', currentPlayer === 0);
  player2Box.classList.toggle('active', currentPlayer === 1);
}

function resetGame() {
  scores = [0, 0];
  currentPlayer = 0;
  score1El.textContent = 0;
  score2El.textContent = 0;
  turnText.textContent = "Player 1";
  dice1.textContent = '⚀';
  dice2.textContent = '⚀';
  winnerEl.textContent = '';
  rollBtn.disabled = false;
  player1Box.classList.add('active');
  player2Box.classList.remove('active');
}

rollBtn.addEventListener('click', rollDice);
resetBtn.addEventListener('click', resetGame);
