var selectedOptions = false;
var originalBoard;
var player = "O";
var computer = "X";
var winCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

var cells = document.querySelectorAll(".cell");

startGame();

function startGame() {
    // if(selectedOptions)
    { // console.log("Game Started");
        document.querySelector(".endgame").style.display = "none";
        originalBoard = Array.from(Array(9).keys());
        // console.log(originalBoard);

        for (var i = 0; i < cells.length; i++) {
            cells[i].innerText = "";
            cells[i].style.removeProperty('background-color');
            cells[i].addEventListener("click", turnClick, false);
        }
    }
}

function turnClick(event) {
    // console.log(event.target.id);
    // turn(event.target.id, player);

    if (typeof originalBoard[event.target.id] == 'number') {
        turn(event.target.id, player)
        if (!checkWin(originalBoard, player) && !checkTie()) turn(bestSpot(), computer);
    }


}


function turn(squareId, player) {
    originalBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
    let gameWon = checkWin(originalBoard, player);
    if (gameWon) gameOver(gameWon);
}


function checkWin(board, player) {
    let plays = board.reduce((a, e, i) =>
        (e === player) ? a.concat(i) : a, []);
    let gameWon = null;
    for (let [index, win] of winCombination.entries()) {
        if (win.every(elem => plays.indexOf(elem) > -1)) {
            gameWon = {
                index: index,
                player: player
            };
            break;
        }
    }
    return gameWon;
}


function gameOver(gameWon) {
    for (let index of winCombination[gameWon.index]) {
        document.getElementById(index).style.backgroundColor =
            gameWon.player == player ? "blue" : "red";
    }
    for (var i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', turnClick, false);
    }
    declareWinner(gameWon.player == player ? "You win!" : "You lose.");
    setTimeout(startGame, 1500);
}

function declareWinner(who) {
    document.querySelector(".endgame").style.display = "block";
    document.querySelector(".endgame .text").innerText = who;
}


function emptySquares() {
    return originalBoard.filter(s => typeof s == 'number');
}

function bestSpot() {
    return minimax(originalBoard, computer).index;
}

function checkTie() {
    if (emptySquares().length == 0) {
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = "green";
            cells[i].removeEventListener('click', turnClick, false);
        }
        declareWinner("Tie Game!");
        setTimeout(startGame, 1500);
        return true;
    }
    return false;
}

function minimax(newBoard, Player) {
    var availSpots = emptySquares();

    if (checkWin(newBoard, player)) {
        return {
            score: -10
        };
    } else if (checkWin(newBoard, computer)) {
        return {
            score: 10
        };
    } else if (availSpots.length === 0) {
        return {
            score: 0
        };
    }
    var moves = [];
    for (var i = 0; i < availSpots.length; i++) {
        var move = {};
        move.index = newBoard[availSpots[i]];
        newBoard[availSpots[i]] = Player;

        if (Player == computer) {
            var result = minimax(newBoard, player);
            move.score = result.score;
        } else {
            var result = minimax(newBoard, computer);
            move.score = result.score;
        }

        newBoard[availSpots[i]] = move.index;

        moves.push(move);
    }

    var bestMove;
    if (Player === computer) {
        var bestScore = -10000;
        for (var i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        var bestScore = 10000;
        for (var i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }

    return moves[bestMove];
}

