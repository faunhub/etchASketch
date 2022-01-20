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
    makeDrawer("#000000");
}

function makeDrawer(color){
    pixelCollection.forEach(pixel => pixel.addEventListener('mouseover', 
    (pixel) => pixel.target.style.backgroundColor =color));
}

function getrandomColor(){
    const hexValues = '0123456789ABCDEF';
    let randomColor = '#';
    for (let i=0; i<6;i++){
        randomColor+= hexValues[Math.floor(Math.random()*16)];
    }
    return randomColor;
}

function makeDrawerRainbow(){
    pixelCollection.forEach(pixel => pixel.addEventListener('mouseover', 
    (pixel) => pixel.target.style.backgroundColor =getrandomColor()));
}

function changeSize(){
    container.innerHTML = "";
    sizeDisplay.innerText = slider.value;
    colorPicker.value = "#000000";
    createDrawingPad(slider.value);
}

function resetPad(){
    container.innerHTML = "";
    colorPicker.value = "#000000";
    createDrawingPad(slider.value);
}

const container = document.querySelector('.grid-container');
const pixelCollection = container.childNodes;
const slider = document.querySelector('.slider');
const reset = document.querySelector('.resetButton');
const sizeDisplay = document.querySelector('.size-display');
const colorPicker = document.querySelector('.colorPicker');
const randomColor = document.querySelector('.rainbow');

createDrawingPad(32);
sizeDisplay.innerText = slider.value;
slider.addEventListener('change', changeSize);
reset.addEventListener('click', resetPad);
colorPicker.addEventListener('change', () => makeDrawer(colorPicker.value));
randomColor.addEventListener('click', makeDrawerRainbow);


