
function selectedDificult(dificultad) {
  sessionStorage.setItem('dificultad', dificultad);
  window.location.href = '../pages/colorselect.html';
}
