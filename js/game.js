
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el nivel de dificultad del sessionStorage
const dificultad = sessionStorage.getItem('dificultad');


// Obtener el elemento contenedor
const selectColorsGameDiv = document.querySelector('.select-colors-game-div');

// Determinar la cantidad de divs según el nivel de dificultad
let numColorButton;
let numRows;
switch (dificultad) {
    case "middle":
        numColorButton = 5;
        numRows = 8;
        break;
    case "hard":
        numColorButton = 6;
        numRows = 6;
        break;
    default:
        numColorButton = 4;
        numRows = 10;
        break;
}
const colores = JSON.parse(sessionStorage.getItem('arrayColors'));

// Generar los divs dinámicamente
for (let i = 1; i <= numColorButton; i++) {
  const div = document.createElement('div');
  div.classList.add('color-select-ball');
  div.id=`cs-${i}`
  div.style.backgroundColor = colores[i - 1];
  selectColorsGameDiv.appendChild(div);
}
// Obtener el array de colores del sessionStorage
console.log(colores)

const tableroElement = document.getElementById("tableGame");
let rowsCreated = 0;
const createRows = () => {
    const rowElement = document.createElement("div");
    rowElement.classList.add("row");
    rowElement.id = `row${rowsCreated + 1}`;

    const checkContainer = document.createElement("div");
    checkContainer.classList.add("check-cell");
    const historyContainer = document.createElement("div");
    historyContainer.classList.add("row-history");

    for(let i = 0; i < 4; i++) {
        const smallBallElement = document.createElement("div");
        smallBallElement.className = "check small-balls";
        checkContainer.appendChild(smallBallElement);
    }

    for(let i = 0; i < 4; i++) {
        const historyBall = document.createElement("div");
        historyBall.classList.add("history-ball");
        historyContainer.appendChild(historyBall);
    }

    const checkButton = document.createElement("button");
    checkButton.type = "button";
    checkButton.textContent = "Check";
    checkButton.classList.add("check-btn");

    // Agregamos a la row
    rowElement.appendChild(checkContainer);
    rowElement.appendChild(historyContainer);
    rowElement.appendChild(checkButton);
    // Agregamos la row al tablero
    tableroElement.appendChild(rowElement);
    rowsCreated += 1;
}

for(let i = 1; i <= numRows; i++) {
    createRows()
}

const colorButtonsNodeList = document.querySelectorAll(".color-select-ball");
const colorButtonsArray = Array.from(colorButtonsNodeList);

colorButtonsArray.forEach((colorButton) => {
    colorButton.addEventListener("click", () => {
        const color = colorButton.style.backgroundColor;
        paintBall(color);
    })
})

const paintBall = (color) => {
    console.log(color);
}

const checkRol = () => {
    alert("Comprobando..")
}

})