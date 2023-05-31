
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el nivel de dificultad del sessionStorage
const dificultad = sessionStorage.getItem('dificultad');


// Obtener el elemento contenedor
const selectColorsGameDiv = document.querySelector('.select-colors-game-div');

// Determinar la cantidad de divs según el nivel de dificultad
let numDivs;
switch (dificultad) {
    case "middle":
        numDivs = 5;
        break;
    case "hard":
        numDivs = 6;
        break;
    default:
        numDivs = 4;
        break;
}
const colores = JSON.parse(sessionStorage.getItem('arrayColors'));

// Generar los divs dinámicamente
for (let i = 1; i <= numDivs; i++) {
  const div = document.createElement('div');
  div.classList.add(`color-select-ball0${i}`);
  div.classList.add('color-select-ball');
  div.id=`cs-${i}`
  div.style.backgroundColor = colores[i - 1]
  selectColorsGameDiv.appendChild(div);
}
// Obtener el array de colores del sessionStorage
console.log(colores)

// colores.map((color, index) => {
//   const bola = document.querySelector('#cs-' + (index + 1));
//   bola.style.backgroundColor = color;
// })

//   const colorSelectBall01 = document.querySelector('#cs-1');
//   const colorSelectBall02 = document.querySelector('#cs-2');
//   const colorSelectBall03 = document.querySelector('#cs-3');
//   const colorSelectBall04 = document.querySelector('#cs-4');

// let color1 = colores[0].toString()
// let color2 = colores[1].toString()
// let color3 = colores[2].toString()
// let color4 = colores[3].toString()
// console.log(color1)
// console.log(color2)
// console.log(color3)
// console.log(color4)

//   colorSelectBall01.style.backgroundColor = color1;
//   colorSelectBall02.style.backgroundColor = color2;
//   colorSelectBall03.style.backgroundColor = color3;
//   colorSelectBall04.style.backgroundColor = color4;
})

