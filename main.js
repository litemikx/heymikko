
//Set which of the nav button will be set to active
function setActive(val) {
  var navBtns = ['id_portfolio', 'id_about', 'id_contact'];
  var navDivs = ['portfolio', 'about', 'contact'];
  for(var i = 0; i < navBtns.length; i++) {
    if(val.id == navBtns[i]) {
        document.getElementById(navBtns[i]).classList.add("w3-text-teal");

    } else {
        document.getElementById(navBtns[i]).classList.remove("w3-text-teal");

    }
  }
}

// Set which of the filter button is active
function showPortfolioSection(val) {
  //console.log(val);
  var arrayBtns = ["all-btn", "web-btn", "health-it-btn", "support-btn"];
  var arraySections = ["", "web-section", "health-it-section", "support-section"];
  var idStr = val.id;
  for(var i = 0; i < arrayBtns.length; i++) {
    if(val.id == arrayBtns[i]) {
      document.getElementById(arrayBtns[i]).classList.add('w3-teal');
      document.getElementById(arrayBtns[i]).classList.remove('w3-white');
    } else {
      document.getElementById(arrayBtns[i]).classList.remove('w3-teal');
      document.getElementById(arrayBtns[i]).classList.add('w3-white');
    }

    if(val.id == arrayBtns[0]) {
      if(i < 3) {
        document.getElementById(arraySections[i+1]).classList.remove('hide-block');
        document.getElementById(arraySections[i+1]).classList.add('fadeIn');
      }
    } else {
      if(val.id == arrayBtns[i] && i != 0) {
        document.getElementById(arraySections[i]).classList.remove('hide-block');
        document.getElementById(arraySections[i]).classList.add('fadeIn');
      } else if(val.id != arrayBtns[i] && i != 0) {
        document.getElementById(arraySections[i]).classList.add('hide-block');
        document.getElementById(arraySections[i]).classList.remove('fadeIn');
      }
    }
  }

}
