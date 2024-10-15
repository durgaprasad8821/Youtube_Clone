const game_area = document.querySelector(".game_board");
const game_cells = [
    rook,knight,bishop,king,queen,bishop,knight,rook,
    pawn,pawn,pawn,pawn,pawn,pawn,pawn,pawn,
    ' ',' ',' ',' ',' ',' ',' ',' ',
    ' ',' ',' ',' ',' ',' ',' ',' ',
    ' ',' ',' ',' ',' ',' ',' ',' ',
    ' ',' ',' ',' ',' ',' ',' ',' ',
    pawn,pawn,pawn,pawn,pawn,pawn,pawn,pawn,
    rook,knight,bishop,queen,king,bishop,knight,rook,
]

let currentGo = 'black';

function createPlayGround(){

    game_cells.forEach((data,id) => {
        const cells = document.createElement('div')
        cells.classList.add('square')
        cells.innerHTML = data
        cells.setAttribute('id' , id);
        game_area.appendChild(cells);
        const row = Math.floor((63 - id) / 8)+1
        if (row % 2 === 0){
            cells.classList.add(id % 2 === 0 ? 'green' : 'blue');
        }else{
            cells.classList.add(id % 2 === 0 ? 'blue' : 'green');
        }
        if(id <= 15){
            cells.firstChild.firstChild.classList.add('white')
        }

        if (id >= 48){
            cells.firstChild.firstChild.classList.add('black');
        }

        if (id <= 15 || id>= 48){
            cells.firstChild.setAttribute('draggable',true)
        }

    })
}
createPlayGround()

const game_area_pieces = document.querySelectorAll(".game_board .square");

game_area_pieces.forEach((key) =>{
    key.addEventListener('dragstart', dragStart);
    key.addEventListener('dragover', dragover);
    key.addEventListener('drop', dragDrop);

})

let startPosition;
let draggedElement;

function dragStart(e){
    startPosition = (e.target.parentNode.getAttribute('id'))
    draggedElement = e.target;
     
}
function dragover(e){
    e.preventDefault()
}
function dragDrop(e){
    e.stopPropagation()
    const value = e.target.classList.contains('icons');
    const correntGo = draggedElement.firstChild.classList.contains(currentGo);
    const opponentGo =  currentGo === 'white' ? 'black' : 'white'
    const takenByopponent = e.target.firstChild?.classList.contains(opponentGo);
    playerTurn()
}


const presentTrun = document.querySelector(".turn")
console.log(presentTrun)
let playerGo = "Black";
function playerTurn(){
    if(playerGo === "Black"){
        playerGo = "White";
        revertId()
        presentTrun.textContent = "White"
    }else{
        playerGo = "Black";
        reverNormal()
        presentTrun.textContent = "Black"
    }
}


function revertId(){
    const revertData = document.querySelectorAll(".square");
    revertData.forEach((event , id) =>{
            event.setAttribute('id', 8 * 8 -1)-id;
    })

}


function reverNormal(){
    const revertData = document.querySelectorAll(".square");
    revertData.forEach((event , id) =>{
            event.setAttribute('id', id);
    })

}