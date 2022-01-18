const container = document.querySelector('.grid-container');
let width =16;
let height =16;
for (let i =1; i<=width*height;i++){
    const square = document.createElement('div');
    square.classList.add('grid-item');
    container.appendChild(square);
}

container.style.gridTemplateColumns = `repeat(${width},40px)`;