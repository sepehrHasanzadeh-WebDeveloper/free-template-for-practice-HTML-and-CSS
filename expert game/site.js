let slide=document.querySelector('.slide-show');
let slide1=document.getElementById('1');
let slide2=document.getElementById('2');
let slide3=document.getElementById('3');
let imgSlide=document.getElementById('img-slide');
let head=document.querySelector(".head");

slide1.addEventListener('click', (event)=>{
    head.style.backgroundImage=" linear-gradient(to bottom right,#FCC419,#FF922B,#F72585)";
})
slide2.addEventListener('click', (event)=>{
    head.style.backgroundImage="linear-gradient(161.15deg, #F83800 12.73%, #F8640A 72.95%)";
})
slide3.addEventListener('click', (event)=>{
    head.style.backgroundImage="linear-gradient(220.55deg, #FFC328 0%, #E20000 100%)";
})
 
var slideBaner = document.getElementsByClassName("slide-baner");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var n = 0;
function displayNone() {
  for (let i = 0; i < slideBaner.length; i++) {
    slideBaner[i].style.display = "none";
  }
}
function noAction() {
  for (let i = 0; i < slideBaner.length; i++) {
    slideBaner[i].classList.remove("active-baner");
  }
}
next.addEventListener("click", function () {
  n++;
  if (n > slideBaner.length - 1) {
    n = 0;
  }
  displayNone();
  noAction();
  slideBaner[n].style.display = "block";
  slideBaner[n].classList.add("active-baner");
});

prev.addEventListener("click", function () {
  n--;
  if (n < 0) {
    n = slideBaner.length - 1;
  }
  displayNone();
  noAction();
  slideBaner[n].style.display = "block";
  slideBaner[n].classList.add("active-baner");
});

setInterval(function () {
  n++;
  if (n > slideBaner.length - 1) {
    n = 0;
  }
  displayNone();
  noAction();
  slideBaner[n].style.display = "block";
  slideBaner[n].classList.add("active-baner");
}, 4000);
