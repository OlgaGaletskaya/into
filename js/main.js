var dark = document.getElementById('dark');
var light = document.getElementById('light');

dark.onclick = function() {
  if (!localStorage.getItem('theme')){
    document.getElementById("style").href = "css/style-dark.css";
    localStorage.setItem('theme', '1')
  }
  else{
    document.getElementById("style").href = "css/style.css";
    localStorage.clear();
  }
  

}
window.onload = function(){
  if (!localStorage.getItem('theme')){
    document.getElementById("style").href = "css/style.css";
  }
  else{
    document.getElementById("style").href = "css/style-dark.css";
  }
}
function showInteg(){
  document.getElementById("vk").style.display = "none"
  document.getElementById("wa").style.display = "none"
  document.getElementById("bs").style.display = "none"
  document.getElementById("teli").style.display = "none"
  document.getElementById("gc").style.display = "none"
}
function showIntegVK(){
  showInteg()
  document.getElementById("vk").style.display = "block";

}
function showIntegWA(){
  showInteg()
  document.getElementById("wa").style.display = "block";

}
function showIntegBS(){
  showInteg()
  document.getElementById("bs").style.display = "block";

}
function showIntegTEL(){
  showInteg()
  document.getElementById("teli").style.display = "block";

}
function showIntegGC(){
  showInteg()
  document.getElementById("gc").style.display = "block";

}
$(document).ready(function(){
  $('.reviews__inner').slick({
    infinite: true,
    dots: false,
    arrows: true,
  });
  $('#vid001').click(function(){
    event.preventDefault();
    $.fancybox.open({
      src: '#vid_001',
      type: 'inline'
    });
  });
  $('#vid002').click(function(){
    event.preventDefault();
    $.fancybox.open({
      src: '#vid_002',
      type: 'inline'
    });
  });
  $('#vid003').click(function(){
    event.preventDefault();
    $.fancybox.open({
      src: '#vid_003',
      type: 'inline'
    });
  });
  $('#vid004').click(function(){
    event.preventDefault();
    $.fancybox.open({
      src: '#vid_004',
      type: 'inline'
    });
  });
  $('#vid005').click(function(){
    event.preventDefault();
    $.fancybox.open({
      src: '#vid_005',
      type: 'inline'
    });
  });
  $('#vid006').click(function(){
    event.preventDefault();
    $.fancybox.open({
      src: '#vid_006',
      type: 'inline'
    });
  });
  $('.video__inner').slick({
    infinite: true,
    slidesToShow: 5,
    //slidesToScroll: 1,
    arrows: true,
    //swipe: false
  });
});