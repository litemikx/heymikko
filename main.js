
function setActive(val) {
  if(val.id == 'id_portfolio') {
    document.getElementById('id_portfolio').classList.toggle("w3-text-teal");
    document.getElementById('id_about').classList.remove("w3-text-teal");
    document.getElementById('id_contact').classList.remove("w3-text-teal");
  } else if(val.id == 'id_about') {
    document.getElementById('id_portfolio').classList.remove("w3-text-teal");
    document.getElementById('id_about').classList.toggle("w3-text-teal");
    document.getElementById('id_contact').classList.remove("w3-text-teal");
  } else if(val.id == 'id_contact') {
    document.getElementById('id_portfolio').classList.remove("w3-text-teal");
    document.getElementById('id_about').classList.remove("w3-text-teal");
    document.getElementById('id_contact').classList.toggle("w3-text-teal");
  }

}
