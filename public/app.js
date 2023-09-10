// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle player moves
const ticTacToe = (element, index) => {
    if (cells[index] === '' && currentPlayer === 'X') {
        cells[index] = currentPlayer;
        element.textContent = 'X';
        currentPlayer = 'O';
        result.textContent = "Player O's turn";
        checkWin();
    } else if (cells[index] === '' && currentPlayer === 'O') {
        cells[index] = currentPlayer;
        element.textContent = 'O';
        currentPlayer = 'X';
        result.textContent = "Player X's turn";
        checkWin();
    }
};

// Function to check for a win
const checkWin = () => {
    for (let condition of conditions) {
        const [a, b, c] = condition;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            result.textContent = `Player ${cells[a]} wins!`;
            btns.forEach(btn => btn.disabled = true);
        }
    }

    if (cells.every(cell => cell !== '')) {
        result.textContent = "It's a draw!";
    }
};

// Function to reset the game
const resetGame = () => {
    cells = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    result.textContent = "Player X's turn";
    btns.forEach(btn => {
        btn.textContent = '';
        btn.disabled = false;
    });
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);
