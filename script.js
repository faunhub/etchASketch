function createDrawingPad(size){
    let width =size;
    let height =size;
    for (let i =1; i<=width*height;i++){
        const square = document.createElement('div');
        square.classList.add('grid-item');
        container.appendChild(square);
    }
    let numberOfColumns = 640/width;
    container.style.gridTemplateColumns = `repeat(${size},${numberOfColumns}px)`;
    let pixelCollection = container.childNodes;
    pixelCollection.forEach(pixel => pixel.addEventListener('mouseover', 
    (pixel) => pixel.target.classList.add('grid-item-hover')));
}

function changeSize(){
    container.innerHTML = "";
    sizeDisplay.innerText = slider.value;
    createDrawingPad(slider.value);
}

function resetPad(){
    container.innerHTML = "";
    createDrawingPad(slider.value);
}

const container = document.querySelector('.grid-container');
const slider = document.querySelector('.slider');
const reset = document.querySelector('.resetButton');
const sizeDisplay = document.querySelector('.size-display');

createDrawingPad(64);
sizeDisplay.innerText = slider.value;
slider.addEventListener('change', changeSize);
reset.addEventListener('click', resetPad);
