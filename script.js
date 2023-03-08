 const cellElemets = document.querySelectorAll('[data-cell]');

 let isCircleTurn;

 const winningCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

 ]

 const startGame = () => {
    for (const cell of cellElemets){
        cell.addEventListener('click', handleClick, {once: true});
    }

    isCircleTurn = false;

    board.classList.add('x');

 };



 const placeMark = (cell, classtoAdd) => {
    cell.classList.add(classtoAdd);
 };    

 const swapTurn = () => {
    isCircleTurn = !isCircleTurn;

    board.classList.remove('circle');
    board.classList.remove('x');

    if (isCircleTurn){
        board.classList.add('circle');
    }
    else{
        board.classList.add('x')
    }
 };

 const handleClick = (e) => {
    const cell = e.target;
    const classToAdd = isCircleTurn ? 'circle' : 'x';

    cell.classList.add(classToAdd);

 placeMark(cell, classToAdd);

 swapTurn();

};

startGame();
