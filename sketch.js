const container = document.querySelector(".container");

let createGrid = function() {
    for (let i = 0; i < 16; i++){
        const gridRow = document.createElement("div");
        gridRow.className="row";
        container.appendChild(gridRow);
        for (let j = 0; j < 16; j++){
            const gridSquare = document.createElement("div");
            gridSquare.className="pixel";
            gridRow.appendChild(gridSquare);
        };
    };
    
};

createGrid();

