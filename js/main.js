var dark = document.getElementById('dark');
var light = document.getElementById('light');

dark.onclick = function() {
  document.getElementById("style").href = "css/style-dark.css";

}
light.onclick = function() {
  document.getElementById("style").href = "css/style.css";

}