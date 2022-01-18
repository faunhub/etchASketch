const container = document.querySelector('.grid-container');
// let slider = document.querySelector('.slider');
// slider.addEventListener('change', changeSize);

let width =16;
let height =width;
for (let i =1; i<=width*height;i++){
    const square = document.createElement('div');
    square.classList.add('grid-item');
    container.appendChild(square);
}
let squareSize = 640/width;
container.style.gridTemplateColumns = `repeat(${width},${squareSize}px)`;