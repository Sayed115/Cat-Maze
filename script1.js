
let gameOver = false;

let players = document.querySelector('#player');
let winPoint = document.querySelector('#winArea');
let bomb = document.querySelector('#bomb');
const text = document.querySelector('h1');



//Player movement && check winner
document.addEventListener('DOMContentLoaded', () => {
    const playerElement = document.getElementById('player');
    const board = document.getElementById('board');
    const squares = Array.from(board.getElementsByClassName('square'));
    let playerPosition = 0; 
    const rowSize = 10; 
    
    //blocking square
    const blockedSquares = [2, 4, 5, 6, 10, 12, 16, 17, 18, 24, 31, 33, 34, 35, 36, 37, 39, 41, 43, 47 , 51, 53, 55, 57, 58, 61, 62, 65, 67, 71, 74, 77, 79, 83, 86, 87, 89, 90, 91, 92, 93];
    blockedSquares.forEach(index => {
        squares[index].classList.add('blocked');
    });

    // Function to check if a position is blocked
    const isBlocked = (position) => {
        return blockedSquares.includes(position);
    };
  
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
            console.log("gameover");
            text.innerText = ("you win")
            //alert("You win")
            winPoint.style.visibility = 'visible';
        }
        
    }

    //bomb
    const bombs = () => {
        if (playerPosition === 97) {
            gameOver = true;
            text.innerText = ("you Lose")
            bomb.style.visibility = 'visible';
        }
    }



    
    const moveUp = () => {
        const newPosition = playerPosition - rowSize;
        if (newPosition >= 0 && !isBlocked(newPosition)) {
            playerPosition = newPosition;
            updatePlayerPosition();
            checkWin();
            bombs();
        }
    };

    const moveDown = () => {
        const newPosition = playerPosition + rowSize;
        if (newPosition < squares.length && !isBlocked(newPosition)) {
            playerPosition = newPosition;
            updatePlayerPosition();
            checkWin();
            bombs();
        }
    };

    const moveLeft = () => {
        if (playerPosition % rowSize > 0) {
            const newPosition = playerPosition - 1;
            if (!isBlocked(newPosition)) {
                playerPosition = newPosition;
                updatePlayerPosition();
                checkWin();
                bombs();
            }
        }
    };

    const moveRight = () => {
        if (playerPosition % rowSize < rowSize - 1) {
            const newPosition = playerPosition + 1;
            if (!isBlocked(newPosition)) {
                playerPosition = newPosition;
                updatePlayerPosition();
                checkWin();
                bombs();
            }
        }
    };

    
    document.getElementById('up').addEventListener('click', moveUp);
    document.getElementById('down').addEventListener('click', moveDown);
    document.getElementById('left').addEventListener('click', moveLeft);
    document.getElementById('right').addEventListener('click', moveRight)

    //keyboard controls
    window.addEventListener("keydown", (event) => {
      
        if (event.key === 'ArrowRight') {
            moveRight()
        }
        if (event.key === 'ArrowDown') {
            moveDown()
        }
        if (event.key === 'ArrowUp') {
            moveUp()
        }
        if (event.key === 'ArrowLeft') {
            moveLeft()
        }
    });
    
    
    updatePlayerPosition();

    if (gameOver || playerPosition === 99) {
        text.innerText = ("you win")
    }

    

});









//if (winPoint.players) {
   // gameOver = true;
    //console.log("gameover")
//}

























