let gameOver = false;
let movementCount = 0;
let moveNumber = document.querySelector('#moven');
let players = document.querySelector('#player');
let winPoint = document.querySelector('#winArea');
let bomb = document.querySelector('#bomb');
let bomb2 = document.querySelector('#bomb2');
const text = document.querySelector('h1');




document.addEventListener('DOMContentLoaded', () => {
    const playerElement = document.getElementById('player');
    const board = document.getElementById('board');
    const squares = Array.from(board.getElementsByClassName('square'));
    let playerPosition = 0; 
    const rowSize = 12; 
    
    //blocking square
    const blockedSquares = [5, 25, 26, 15, 17, 19, 20, 21, 24, 27, 29, 33, 37, 38, 47, 51, 53, 54, 56, 58, 59, 61, 63, 66, 71, 73, 75, 78, 81, 85, 87, 90, 91, 94, 97, 101, 110, 111, 112, 116, 121, 124, 126, 138, 140, 141, 142, 143, 104, 117];
    blockedSquares.forEach(index => {
        squares[index].classList.add('blocked');
    });

    // Function to check if a position is blocked
    const isBlocked = (position) => {
        return blockedSquares.includes(position);
    };
  
    //player position
    const updatePlayerPosition = () => {
        const square = squares[playerPosition];
        const rect = square.getBoundingClientRect();
        const boardRect = board.getBoundingClientRect();

        playerElement.style.left = `${rect.left - boardRect.left}px`;
        playerElement.style.top = `${rect.top - boardRect.top}px`;
    };

    //display numbers of move
    const updateMovementDisplay = () => {
        const movementDisplay = document.querySelector('#moven');
        if (movementDisplay) {
            movementDisplay.innerText = `Move's: ${movementCount}`;
        }
    };
    

    //checking win
    const checkWin = () => {
        if (playerPosition === 118) {
            gameOver = true;
            
            text.innerText = (`You win with: ${movementCount + 1} move's!`)
            //alert("You win")
            
        }
        
    }

    //bomb
    const bombs = () => {
        if (playerPosition === 105) {
            gameOver = true;
            text.innerText = ("you Lose")
            bomb.style.visibility = 'visible';
        }
        
    }
    const bombs2 = () => {
        if (playerPosition === 107) {
            gameOver = true;
            text.innerText = ("you Lose")
            bomb2.style.visibility = 'visible';
        }

    }



    //movement
    const moveUp = () => {
        if (gameOver) return;

        const newPosition = playerPosition - rowSize;
        if (newPosition >= 0 && !isBlocked(newPosition)) {
            playerPosition = newPosition;
            updatePlayerPosition();
            checkWin();
            bombs();
            bombs2();
            movementCount++;
            updateMovementDisplay();
        }
    };
    //movement
    const moveDown = () => {
        if (gameOver) return;

        const newPosition = playerPosition + rowSize;
        if (newPosition < squares.length && !isBlocked(newPosition)) {
            playerPosition = newPosition;
            updatePlayerPosition();
            checkWin();
            bombs();
            bombs2();
            movementCount++;
            updateMovementDisplay();
        }
    };
    //monement
    const moveLeft = () => {
        if (gameOver) return;

        if (playerPosition % rowSize > 0) {
            const newPosition = playerPosition - 1;
            if (!isBlocked(newPosition)) {
                playerPosition = newPosition;
                updatePlayerPosition();
                checkWin();
                bombs();
                bombs2();
                movementCount++;
                updateMovementDisplay();
            }
        }
    };
    //movement
    const moveRight = () => {
        if (gameOver) return;

        if (playerPosition % rowSize < rowSize - 1) {
            const newPosition = playerPosition + 1;
            if (!isBlocked(newPosition)) {
                playerPosition = newPosition;
                updatePlayerPosition();
                checkWin();
                bombs();
                bombs2();
                movementCount++;
                updateMovementDisplay();
            }
        }
    };

    //buttons controls
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
    updateMovementDisplay();

});

function resetPage() {
    location.href = 'level2.html';
}

function moveToGame () {
    location.href = 'main-page.html';
}

function giveAlert() {
    alert('Coming Soon...');
}