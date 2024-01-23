// Load page with 16x16 grid
// When user hovers over grid, change color of each individual square
// If user clicks button, prompt them to select the size of grid (no less than 2X2 and no more than 100X100)
// Reset button reloads page

// Get HTML elements
const sketchBox = document.querySelector('#etch-a-sketch');
const selectGridBtn = document.querySelector('#select-grid-btn');
const resetBtn = document.querySelector('#reset-btn');

// Set/Get grid size
function setGridSize() {
    let userGridSize;

    do {
        userGridSize = prompt('Select a grid size (2 to 100): ', '16');
        if (userGridSize === null) {
            return;
        }
    } while (userGridSize < 2 || userGridSize > 100);

    setUpGrid(userGridSize);
}

// Set up grid
function setUpGrid(size) {
    // Loop size of grid and create grid divs
    sketchBox.innerHTML = '';

    for (let i = 0; i < size; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('grid-row-div');
        sketchBox.appendChild(rowDiv);

        for (let i = 0; i < size; i++) {
            const div = document.createElement('div');
            div.classList.add('grid-div');
            rowDiv.appendChild(div);
            div.addEventListener('mouseover', () => {
                const randomColor = Math.floor(Math.random() * 16777215).toString(16);
                div.style.backgroundColor = '#' + randomColor;
            });
        }
    }
}
// Load default grid when page loads
window.onload = setUpGrid(16);
// User selects grid size
selectGridBtn.addEventListener('click', setGridSize);
// User resets grid back to default
resetBtn.addEventListener('click', setUpGrid(16));