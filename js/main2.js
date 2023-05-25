var dark = document.getElementById('dark');
var light = document.getElementById('light');

dark.onclick = function() {
  if (!localStorage.getItem('theme')){
    document.getElementById("style").href = "../css/style-dark.css";
    localStorage.setItem('theme', '1')
  }
  else{
    document.getElementById("style").href = "../css/style.css";
    localStorage.clear();
  }
  

}
window.onload = function(){
  if (!localStorage.getItem('theme')){
    document.getElementById("style").href = "../css/style.css";
  }
  else{
    document.getElementById("style").href = "../css/style-dark.css";
  }
}

$(document).ready(function(){
  $('.reviews__inner').slick({
    infinite: true,
    dots: true,
    arrows: false
  });
});