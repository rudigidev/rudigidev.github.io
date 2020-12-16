let btnBars = document.getElementById('icon-bars');
let navBar = document.getElementById('navku');
let social = document.getElementById('social-media');
function toggleNav(){
    console.log('test');
    if (navBar.style.display === 'block') {
        return close();
    }
    return open();
}
function open() {
    navBar.style.display = "block";
    social.style.display = "block";
}
function close() {
    navBar.style.display = "none";
    social.style.display = "none";
}

function openAbout(evt, cityName) {
    var i, tabcontent, tablink;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
      tablink[i].className = tablink[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  document.getElementById("defaultopen").click();


  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function opencert(n){
    let certiImg = document.getElementsByClassName('daftar-certi')
    if(certiImg[n].style.display === 'block'){
      return close()
    }
      return open()


    function open(){
      certiImg[n].style.display = 'block'
    }
    function close(){
      certiImg[n].style.display = 'none'
    }
}