function openTab(evt, id) {
  var contents = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }
  var tabs = document.getElementsByClassName("tab");
  for (var j = 0; j < tabs.length; j++) {
    tabs[j].className = tabs[j].className.replace(" active", "");
  }
  document.getElementById(id).style.display = "block";
  evt.currentTarget.className += " active";
}

function filterTable() {
  var text = document.getElementById("filter").value.toLowerCase();
  var rows = document.getElementById("grid").rows;
  for (var i = 1; i < rows.length; i++) {
    var city = rows[i].cells[0].textContent.toLowerCase();
    rows[i].style.display = city.indexOf(text) > -1 ? "" : "none";
  }
}