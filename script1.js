
let gameOver = false;

let players = document.querySelector('#player');
let winPoint = document.querySelector('#winArea');
let moveUp = up;
let moveDown = down;
let moveLeft = left;
let moveRight = right;




//Player movement && check winner
document.addEventListener('DOMContentLoaded', () => {
    const playerElement = document.getElementById('player');
    const board = document.getElementById('board');
    const squares = Array.from(board.getElementsByClassName('square'));
    let playerPosition = 0; 
    const rowSize = 10; 
    
    //blocking square
    const blockedSquares = [11, 12, 22, 32, 42, 52];
    blockedSquares.forEach(index => {
        squares[index].classList.add('blocked');
    });

    
  
    const updatePlayerPosition = () => {
        const square = squares[playerPosition];
        const rect = square.getBoundingClientRect();
        const boardRect = board.getBoundingClientRect();

        playerElement.style.left = `${rect.left - boardRect.left}px`;
        playerElement.style.top = `${rect.top - boardRect.top}px`;
    };

    //checking win
    const checkWin = () => {
        if (playerPosition === 99) {
            gameOver = true;
            console.log("gameover")
        }
        
    }
    const moveUp = () => {
        const newPosition = playerPosition - rowSize;
        if (newPosition >= 0) {
            playerPosition = newPosition;
            updatePlayerPosition();
            blockedSquares[2, 12, 22, 32, 42, 52];
            checkWin();
        }
    };

    const moveDown = () => {
        const newPosition = playerPosition + rowSize;
        if (newPosition < squares.length) {
            playerPosition = newPosition;
            updatePlayerPosition();
            blockedSquares[2, 12, 22, 32, 42, 52];
            checkWin();
        }
    };

    const moveLeft = () => {
        if (playerPosition % rowSize > 0) {
            const newPosition = playerPosition - 1;
            playerPosition = newPosition;
            updatePlayerPosition();
            blockedSquares[2, 12, 22, 32, 42, 52];
            checkWin();
        }
    };

    const moveRight = () => {
        if (playerPosition % rowSize < rowSize - 1) {
            const newPosition = playerPosition + 1;
            playerPosition = newPosition;
            updatePlayerPosition();
            blockedSquares[2, 12, 22, 32, 42, 52];
            checkWin();
        }
    };

    
    document.getElementById('up').addEventListener('click', moveUp);
    document.getElementById('down').addEventListener('click', moveDown);
    document.getElementById('left').addEventListener('click', moveLeft);
    document.getElementById('right').addEventListener('click', moveRight); 

    
    updatePlayerPosition();
});









//if (winPoint.players) {
   // gameOver = true;
    //console.log("gameover")
//}

























