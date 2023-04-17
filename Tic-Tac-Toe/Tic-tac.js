
let board = Array(9).fill(null);
let player1 = "";
let player2 = "";
let currentPlayer = "X";
let winner = null;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const startGame = () => {
    player1Name = document.getElementById("player1").value;
    player2Name = document.getElementById("player2").value;
}
const makeMove = (index) => {
    if (winner || board[index]) {
        return;
    }
    board[index] = currentPlayer;
    document.getElementById("board").children[index].innerText = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    checkWinner();
};

const checkWinner = () => {
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            winner = board[a];
            document.getElementById("winner").innerText = `${winner} wins!`;
            return;
        }
    }

    if (!board.includes(null)) {
        winner = "Draw";
        document.getElementById("winner").innerText = "It's a draw!";
    }
}
const resetGame = () => {
    board = Array(9).fill(null);
    currentPlayer = "X";
    winner = null;
    // Clear the cell texts on the HTML board
    const cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = "";
    }
    document.getElementById("winner").innerText = "";
}


const updateWinner = () => {
    const winnerElement = document.getElementById("winner");
    if (winner === "X") {
        winnerElement.innerText = `Winner: ${player1Name}`;
    } else if (winner === "O") {
        winnerElement.innerText = `Winner: ${player2Name}`;
    } else if (winner === "Tie") {
        winnerElement.innerText = "It's a Tie!";
    } else {
        winnerElement.innerText = "";
    }

    const resetGame = () => {
        // Clear the game board
        board = Array(9).fill(null);
        currentPlayer = "X";
        winner = null;
        // Clear the cell texts on the HTML board
        const cells = document.getElementsByClassName("cell");
        for (let i = 0; i < cells.length; i++) {
            cells[i].innerText = "";
        }
        // Clear the winner text
        updateWinner();
        // Reset player names and show the input fields and start button
        document.getElementById("player1").value = "";
        document.getElementById("player2").value = "";
        document.getElementById("player1").style.display = "block";
        document.getElementById("player2").style.display = "block";
        document.getElementsByClassName("start-btn")[0].style.display = "block";
        // Hide the game board
        document.getElementById("board").style.display = "none";
    };
}