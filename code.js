function createGrid(gridDimensions) {
    let container = document.querySelector('.container');
    container.innerHTML = '';
    for(let i = 0; i < gridDimensions ; i++){
        let row = document.createElement('div');
        row.style.display = 'flex';
        row.style.flex = '1';
        container.appendChild(row);
        for(let j = 0 ; j < gridDimensions ; j++){
            let square = document.createElement('div');
            square.style.flex = '1';
            square.style.opacity = '0.5';
            square.addEventListener('mousemove', (event) => {
                if(event.buttons === 1){
                    square.style.opacity = `${Number(square.style.opacity) + 0.2}`;
                    square.style.backgroundColor = currentColor;
                }
            });
            square.addEventListener('dragstart', (event) => event.preventDefault());
            row.appendChild(square);
        }
    }    
}

const inputText = document.querySelector('input');
const enterButton = document.querySelector('.enter');
const colorButtons = document.querySelectorAll('.tools button');
let currentColor = 'black';

enterButton.addEventListener('click', () => {
    if(inputText.value > 0 && inputText.value < 101 && inputText.value !== ''){
        createGrid(Math.floor(inputText.value));
        inputText.value = '';
    }
});

colorButtons.forEach((item, index) => {
    if(index > 0) {
        item.addEventListener('click', ()  => {
            colorButtons.forEach((item) => {
                if(item.className === currentColor){
                    item.style = '';
                }
            });
            item.style.border = '2px solid #fff';
            currentColor = item.className;
        });
    }
});


