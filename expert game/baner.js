var slide = document.getElementsByClassName("slide-baner");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var n = 0;
function displayNone() {
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
}
function noAction() {
  for (let i = 0; i < slide.length; i++) {
    slide[i].classList.remove("active-baner");
  }
}
next.addEventListener("click", function () {
  n++;
  if (n > slide.length - 1) {
    n = 0;
  }
  displayNone();
  noAction();
  slide[n].style.display = "block";
  slide[n].classList.add("active-baner");
});

prev.addEventListener("click", function () {
  n--;
  if (n < 0) {
    n = slide.length - 1;
  }
  displayNone();
  noAction();
  slide[n].style.display = "block";
  slide[n].classList.add("active-baner");
});

setInterval(function () {
  n++;
  if (n > slide.length - 1) {
    n = 0;
  }
  displayNone();
  noAction();
  slide[n].style.display = "block";
  slide[n].classList.add("active-baner");
}, 4000);
