const container = document.querySelector('.grid-container');

function createDrawingPad(size){
    let width =size;
    let height =width;
    for (let i =1; i<=width*height;i++){
        const square = document.createElement('div');
        square.classList.add('grid-item');
        container.appendChild(square);
    }
    let squareSize = 640/width;
    container.style.gridTemplateColumns = `repeat(${width},${squareSize}px)`;
}

createDrawingPad(64);

let pixelCollection = container.childNodes;
pixelCollection.forEach(pixel => pixel.addEventListener('mouseover', (pixel) => pixel.target.classList.add('grid-item-hover')));

let slider = document.querySelector('.slider');
// slider.addEventListener('change', changeSize);

// function changeSize(){
//     const size = slider.value;
//     console.log(size);
//     createDrawingPad(size);
// }