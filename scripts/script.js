const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
    squareBox = document.createElement("div");
    squareBox.style.width = "95px";
    squareBox.style.height = "95px";
    squareBox.style.border = "1px solid blue";
    squareBox.style.margin = "10px";
    squareBox.style.boxSizing = "border-box";
    squareBox.style.borderRadius = "5px";
    squareBox.classList.add("boxes");
    squareBox.style.setProperty("--someColor", "#3882f6");


    container.appendChild(squareBox);
    
}