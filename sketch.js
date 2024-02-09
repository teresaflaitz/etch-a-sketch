const container = document.querySelector(".container");

let createGrid = function(size = 16) {
    
    //Create and append 16 rows
    for (let i = 0; i < size; i++){
        const gridRow = document.createElement("div");
        gridRow.className="row";
        container.appendChild(gridRow);
        
        //Create and append 16 pixels to each row
        for (let j = 0; j < size; j++){
            const gridSquare = document.createElement("div");
            gridSquare.className="pixel";
            gridRow.appendChild(gridSquare);
            

            gridSquare.addEventListener("mouseover", (event) => {
                gridSquare.style.backgroundColor = "black";
            });
        };
    };
    
};

createGrid();

const btn = document.querySelector("#new");

let deleteGrid = function(){
    let grid = document.querySelectorAll(".row");
    for (let i = 0; i < grid.length; i++) {
        grid[i].remove();
    };
};

btn.addEventListener("click", (event) => {
    let gridSize = prompt("Enter grid size (max 100)");
    console.log("Button clicked!");
    deleteGrid();
    createGrid(gridSize);
});
