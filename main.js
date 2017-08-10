
function setActive(val) {
  var navBtns = ['id_portfolio', 'id_about', 'id_contact'];
  for(var i = 0; i < navBtns.length; i++) {
    if(val.id == navBtns[i]) {
        document.getElementById(navBtns[i]).classList.add("w3-text-teal");
    } else {
        document.getElementById(navBtns[i]).classList.remove("w3-text-teal");
    }
  }
}

function showPortfolioSection(val) {
  console.log(val);
  var arrayBtns = ["all-btn", "web-btn", "health-it-btn", "support-btn"];
  var arraySections = ["", "web-section", "health-it-section", "support-section"];
  var idStr = val.id;
  for(var i = 0; i < arrayBtns.length; i++) {
    if(val.id == arrayBtns[i]) {
      document.getElementById(arrayBtns[i]).classList.add('w3-black');
      document.getElementById(arrayBtns[i]).classList.remove('w3-white');
    } else {
      document.getElementById(arrayBtns[i]).classList.remove('w3-black');
      document.getElementById(arrayBtns[i]).classList.add('w3-white');
    }

    if(val.id == arrayBtns[0]) {
      if(i < 3) {
        document.getElementById(arraySections[i+1]).classList.remove('hide-block');
      }
    } else {
      if(val.id == arrayBtns[i] && i != 0) {
        document.getElementById(arraySections[i]).classList.remove('hide-block');
      } else if(val.id != arrayBtns[i] && i != 0) {
        document.getElementById(arraySections[i]).classList.add('hide-block');
      }
    }
  }

}
