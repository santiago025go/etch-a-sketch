function createGrid(gridDimensions) {
    for(let i = 0; i < gridDimensions ; i++){
        let row = document.createElement('div');
        row.style.display = 'flex';
        row.style.flex = '1';
        container.appendChild(row);
        for(let j = 0 ; j < gridDimensions ; j++){
            let square = document.createElement('div');
            square.style.border = '1px solid black';
            square.style.flex = '1';
            square.addEventListener('mouseenter', () => square.style.backgroundColor = 'black');
            row.appendChild(square);
        }
    }    
}

const container =  document.querySelector('.container');
const button = document.querySelector('button');
let numberOfSquares;
button.addEventListener('click', () => {
    numberOfSquares = prompt('Number of squares: ');    
    container.innerHTML = '';
    createGrid(numberOfSquares);    
});



