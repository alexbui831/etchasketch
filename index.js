//  containers
const pageContainer = document.getElementById("page-container");
const topbtnContainer = document.getElementById("top-btn-container");
const gridContainer = document.getElementById("grid-container");
const botbtnContainer = document.getElementById("bot-btn-container");

//  buttons
const btnBlack = document.getElementById("black-btn");
const btnRainbow = document.getElementById("rainbow-btn");
const btnPattern1 = document.getElementById("pattern1-btn");
const btnPattern2 = document.getElementById("pattern2-btn");
const btnEraser = document.getElementById("eraser");
const btnClear = document.getElementById("clear-btn");

//  slider
const slider = document.getElementById("sliderBar");
let sliderBar = document.querySelector("#sliderBar");

newGrid(sliderBar.value);

//  function that allows user input to create new grid layout
function newGrid(amount) {

    let gridSize = amount * amount;

    //  removes all previous divs created
    gridContainer.textContent = ("");

    //  creates enough enough div x * x 
    for (let i = 0; i < gridSize; i++) {
        const div = document.createElement("div");
        div.setAttribute("class", "grid-item");
        gridContainer.append(div);
    }

    //  style css container to match amount of elements preferred
    gridContainer.setAttribute("style", `grid-template-columns: repeat(${amount}, 1fr); grid-template-rows: repeat(${amount},1fr)`);
}

function colorTool(choice) {
    //  create divs nodelist
    const divs = gridContainer.querySelectorAll("div");

    if (choice === "black-paint") {
        //  allow when each div element is hovered, add class "change color"
        divs.forEach((div) => {
            div.addEventListener("mouseover", () => {
                div.setAttribute("style", "background-color: black");
            });
        });
    }
    else if (choice === "rainbow") {
        //  allows each div to get a random color
        divs.forEach((div) => {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            div.addEventListener("mouseover", () => {
                div.setAttribute("style", `background-color: rgb(${r}, ${g}, ${b})`);
            });
        });
    }
    else if (choice === "pattern1") {
        divs.forEach((div) => {
            let randomNumber = Math.floor(Math.random() * 5);
            let color = "";
            switch (randomNumber) {
                case 0:
                    color = "#ffc6ff"
                    break;
                case 1:
                    color = "#9bf6ff"
                    break;
                case 2:
                    color = "#ffadad"
                    break;
                case 3:
                    color = "#caffbf"
                    break;
                case 4:
                    color = "#bdb2ff"
                    break;
            }
            div.addEventListener("mouseover", () => {
                div.setAttribute("style", `background-color: ${color}`)
            });
        });
    }
    else if (choice === "pattern2") {
        divs.forEach((div) => {
            let randomNumber = Math.floor(Math.random() * 5);
            let color = "";
            switch (randomNumber) {
                case 0:
                    color = "#dab49d"
                    break;
                case 1:
                    color = "#895737"
                    break;
                case 2:
                    color = "#5e3023"
                    break;
                case 3:
                    color = "#c08552"
                    break;
                case 4:
                    color = "#f3e9dc"
                    break;
            }
            div.addEventListener("mouseover", () => {
                div.setAttribute("style", `background-color: ${color}`)
            });
        });
    }
    else if (choice === "eraser") {
        divs.forEach((div) => {
            div.addEventListener("mouseover", () => {
                div.setAttribute("style", "background-color: white")
            });
        });
    }
}
//  function that wipes all color from the grid
function clearGrid() {
    const divs = gridContainer.querySelectorAll("div");
    console.log("CLEAR");
    // clear grid by removing colored class from all divs
    divs.forEach((div) => {
        div.setAttribute("style", "background-color: white");
    });
}
//  adds click function to black button
btnBlack.addEventListener("click", () => {
    colorTool("black-paint");
});
//  adds click function to rainbow button
btnRainbow.addEventListener("click", () => {
    colorTool("rainbow");
});
//  adds click function to pattern1 button
btnPattern1.addEventListener("click", () => {
    colorTool("pattern1");
});
//  adds click function to pattern2 button
btnPattern2.addEventListener("click", () => {
    colorTool("pattern2");
});
//  adds click function to erasor button
btnEraser.addEventListener("click", () => {
    colorTool("eraser");
});
//  adds click function to clear button
btnClear.addEventListener("click", () => {
    clearGrid();
});
//  allows slider to adjust grid size
slider.addEventListener("click", () => {
    newGrid(sliderBar.value);
});
