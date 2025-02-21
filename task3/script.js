const symbols = ['🐶', '🐱', '🐭', '🐰', '🦊', '🐻', '🐼', '🐸'] ;  
let flippedCards = [];
let matchedPairs = 0;

const gameBoard = document.getElementById('game-board');
const restartBtn = document.getElementById('restart-btn');

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createCard(symbol) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">${symbol}</div>
      <div class="card-back">❓</div>
    </div>
  `;

  card.addEventListener('click', () => {
    if (!card.classList.contains('flipped') && flippedCards.length < 2) {
      flipCard(card, symbol);
    }
  });

  return card;
}

function setupBoard() {
  gameBoard.innerHTML = '';
  const doubledSymbols = shuffle([...symbols, ...symbols]);
  doubledSymbols.forEach(symbol => {
    const card = createCard(symbol);
    gameBoard.appendChild(card);
  });
  matchedPairs = 0;
  flippedCards = [];
}

function flipCard(card, symbol) {
  card.classList.add('flipped');
  flippedCards.push({ card, symbol });

  if (flippedCards.length === 2) {
    checkMatch();
  }
}

function checkMatch() {
  const [first, second] = flippedCards;

  if (first.symbol === second.symbol) {
    matchedPairs++;
    flippedCards = [];

    if (matchedPairs === symbols.length) {
      setTimeout(() => alert('🎉 Congratulations! You found all pairs!'), 500);
    }
  } else {
    setTimeout(() => {
      first.card.classList.remove('flipped');
      second.card.classList.remove('flipped');
      flippedCards = [];
    }, 1000);
  }
}

function restartGame() {
  setupBoard();
}

restartBtn.addEventListener('click', restartGame);
window.addEventListener('load', setupBoard);

