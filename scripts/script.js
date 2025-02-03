const container = document.querySelector(".container");
const generateGridButton = document.querySelector(".generateGrid");
const windowWidth = 1349;

generateGridButton.addEventListener("click", generateGrid);

// for (let i = 0; i < 256; i++) {
//     squareBox = document.createElement("div");
//     squareBox.style.width = "95px";
//     squareBox.style.height = "95px";
//     squareBox.style.border = "1px solid blue";
//     squareBox.style.margin = "10px";
//     squareBox.style.boxSizing = "border-box";
//     squareBox.style.borderRadius = "5px";
//     squareBox.classList.add("boxes");
//     //squareBox.style.opacity = "0";
//     squareBox.style.transition = "0.4s ease";
//     squareBox.style.setProperty("--someColor", "#3882f6");
    


//     container.appendChild(squareBox);
    
// }

function generateGrid () {
    let gridSize = document.querySelector("#grid-size").value;
    gridSize = Math.min(Math.max(gridSize, 1), 64);
    container.innerHTML = "";

    console.log(gridSize);

    let squareSize;

    //const squareSize = container.style.width / gridSize;
    if ((gridSize >= 29) && (gridSize <= 30)) {
        squareSize = windowWidth / (gridSize + 1.4);
    }
    else if ((gridSize >= 25) && (gridSize < 29)) {
        squareSize = windowWidth / (gridSize + 0.5);
    }
    else if ((gridSize > 19) && (gridSize < 25)) {
        squareSize = windowWidth / (gridSize - 1);
    }
    else if ((gridSize > 9) && (gridSize < 20)) {
        squareSize = windowWidth / (gridSize - 2);
    }
    else if ((gridSize > 6) && (gridSize <= 9)) {
        squareSize = windowWidth / (gridSize - 1.5) ;
    }

    else if ((gridSize > 1) && (gridSize <= 6)) {
        squareSize = windowWidth / (gridSize - 0.7) ;
    }
    


    for (let i = 0; i < gridSize * gridSize; i++) {
        let squareBox = document.createElement("div");
        // squareBox.style.width = "95px";
        // squareBox.style.height = "95px";
        squareBox.style.width = `${squareSize}px`;
        squareBox.style.height = `${squareSize}px`;
        squareBox.style.border = "1px solid blue";
        squareBox.style.margin = "10px";
        squareBox.style.boxSizing = "border-box";
        squareBox.style.borderRadius = "5px";
        squareBox.classList.add("boxes");
        //squareBox.style.opacity = "0";
        squareBox.style.transition = "0.4s ease";
        squareBox.style.setProperty("--someColor", "#3882f6");
        
    
    
        container.appendChild(squareBox);
        
    }

}