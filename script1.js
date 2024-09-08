//movement 

document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('player');
    const board = document.getElementById('board');
    const squares = Array.from(board.getElementsByClassName('square'));
    let playerPosition = 0; // Starts at the first square
    const rowSize = 10; // Number of squares per row
  
    const updatePlayerPosition = () => {
      const square = squares[playerPosition];
      const rect = square.getBoundingClientRect();
      const boardRect = board.getBoundingClientRect();
  
      player.style.left = `${rect.left - boardRect.left}px`;
      player.style.top = `${rect.top - boardRect.top}px`;
    };
  
    const movePlayer = (direction) => {
      const numSquares = squares.length;
      let newPosition = playerPosition;
  
      if (direction === 'up') {
        newPosition = playerPosition - rowSize;
      } else if (direction === 'down') {
        newPosition = playerPosition + rowSize;
      } else if (direction === 'left') {
        newPosition = playerPosition - 1;
      } else if (direction === 'right') {
        newPosition = playerPosition + 1;
      }
  
      if (direction === 'up' && newPosition >= 0) {
        playerPosition = newPosition;
      } else if (direction === 'down' && newPosition < numSquares) {
        playerPosition = newPosition;
      } else if (direction === 'left' && playerPosition % rowSize > 0) {
        playerPosition = newPosition;
      } else if (direction === 'right' && playerPosition % rowSize < rowSize - 1) {
        playerPosition = newPosition;
      }
  
      updatePlayerPosition();
    };
  
    // Add console.log to debug button selection
    console.log(document.getElementById('right')); // This should log the right button or null if not found
  
    document.getElementById('up').addEventListener('click', () => movePlayer('up'));
    document.getElementById('down').addEventListener('click', () => movePlayer('down'));
    document.getElementById('left').addEventListener('click', () => movePlayer('left'));
    document.getElementById('right').addEventListener('click', () => movePlayer('right')); // Ensure correct spelling here!
  
    updatePlayerPosition();
  });

  console.log(document.getElementById('right'));























