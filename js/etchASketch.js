/***
 * //GUI: 
 * div containers and input dialog box
 * //Input: 
 * user mouse hover, user input grid size
 * //Output: 
 * fixed size square grid made of divs
 * user can hover over grid and it will change color
 * color should be randomize
 * when user hover pass one grid multiple times, it gets 10% darker until it become black
 * 
 */


const BOARD_SIZE = 640;
const BORDER_BOX_SIZE = 1;

//Initial values
const gridContainer = document.querySelector(".grid-container");
gridContainer.style.width = `${BOARD_SIZE}px`;
gridContainer.style.height = `${BOARD_SIZE}px`;
const gridInput = document.querySelector(".grid-size-input");
const genGridButton = document.querySelector(".gen-grid-button");
genGridButton.addEventListener('click', () => {
    let input = gridInput.value;
    if(input == null || isNaN(input) || input <= 0 || input >= 100){
        alert("Please input valid number!");
    } else {
        let num = Math.floor(Number(input));
        console.log(Number(num));
        generateGrid(Number(num));
    }
});

//Main logic
function calculateBoxSize(GRID_SIZE){
    return (BOARD_SIZE / GRID_SIZE) - (BORDER_BOX_SIZE * 2);
}

function randomizeColor(){
    let randomValues = [];
    for(let i = 0; i < 4; i++){
        randomValues.push(Math.floor(Math.random() * 255));
    }
    return `rgba(${randomValues[0]},${randomValues[1]},${randomValues[2]},${randomValues[3]})`;
}

function generateGrid(GRID_SIZE){
    //clear child
    gridContainer.innerHTML = "";
    //generate grid
    for(let i = 0; i < GRID_SIZE;i++){
        const rowContainer = document.createElement("div");
        rowContainer.style.display = "flex";
        rowContainer.style.justifyContent = "space-between";

        for(let j=0;j < GRID_SIZE;j ++){
            const grid = document.createElement("div");
            grid.style.width = `${calculateBoxSize(GRID_SIZE)}px`;
            grid.style.height = `${calculateBoxSize(GRID_SIZE)}px`;

            grid.style.borderWidth = `${BORDER_BOX_SIZE}px`;
            grid.style.borderStyle = "solid";
            grid.style.borderColor = "transparent";

            grid.addEventListener('mouseenter', () => {
                grid.style.backgroundColor = randomizeColor();
            });

            rowContainer.appendChild(grid);
        }

        gridContainer.appendChild(rowContainer);
    }
}

generateGrid(16); //Start-up grid