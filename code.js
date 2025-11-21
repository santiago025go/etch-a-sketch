const container =  document.querySelector('.container');

for(let i = 0; i < 16 ; i++){
    let row = document.createElement('div');
    row.style.display = 'flex';
    row.style.flex = '1';
    container.appendChild(row);
    for(let j = 0 ; j < 16 ; j++){
        let square = document.createElement('div');
        square.style.border = '1px solid black';
        square.style.flex = '1';
        row.appendChild(square);
    }
}