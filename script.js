const grid = document.querySelector('.grid');

// Create 16x16 grid
for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
}


const squares = document.querySelectorAll('.square');

