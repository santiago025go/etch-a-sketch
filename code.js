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
            square.addEventListener('mousemove', (event) => {
                if(event.buttons === 1){
                    square.style.backgroundColor = 'black';
                }
            });
            square.addEventListener('dragstart', (event) => event.preventDefault());
            row.appendChild(square);
        }
    }    
}

const inputText = document.querySelector('input');
const enterButton = document.querySelector('.enter');

enterButton.addEventListener('click', () => {
    if(inputText.value > 0 && inputText.value < 101 && inputText.value !== ''){
        createGrid(Math.floor(inputText.value));
        inputText.value = '';
    }
});


