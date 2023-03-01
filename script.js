const grid = document.querySelector('.grid');
let squares;
const clearButton = document.querySelector('.clear');
let pixels = document.querySelector('.pixels');

// Create 16x16 grid

function createGrid(size) {

    for (let i = 0; i < (size * size); i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
    }
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

function setSquares() {
    squares = document.querySelectorAll('.square');
    squares.forEach( square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = "#000";
    });
});
}

clearButton.addEventListener('click', () => {
    squares.forEach( square => {
        square.style.backgroundColor = "#FFF";
    });
});



pixels.addEventListener('click', () => {
    var size = parseInt(prompt('How many pixels per side?'));
    
    //if no input, set to 16
    if (isNaN(size)) {
        size = 16;
    }
    grid.innerHTML = '';
    alert(size);
    createGrid(size);
    setSquares();
});

createGrid(16);
setSquares();

