
//THE PLAYER ENTERS HIS NAME IN THE INPUT BOX AND IT IS SAVED IN THE SESSION STORAGE. IF THE PLAYER DOESN'T REGISTER ANY INPUT, THE FUNCTION BLOCKS THE ADVANCE TO THE DIFFICULTY SELECTION PAGE.

const playerSave = () => {

  let player = document.getElementById("nameCel").value;

  if (!player) {
    return;
  }
  
  sessionStorage.setItem("usuario", player);


  window.location.href = "../pages/dificult.html";
};   