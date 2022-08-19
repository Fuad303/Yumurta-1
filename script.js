const navIconEl = document.querySelector('.nav__icon');
const navCloseEl = document.querySelector('.nav__close');
const navList = document.querySelector('.nav__list');
const navBgOverlayEl = document.querySelector('.nav__bgOverlay');

const navOpen = () =>
{
    navList.classList.add('show');
    navBgOverlayEl.classList.add('active');
    document.body.style='visibility: visible, height: 100vh; width: 100vw; overflow: hidden;';
}
const navClose = () =>
{
    navList.classList.remove('show');
    navBgOverlayEl.classList.remove('active');
    document.body.style='visibility: visible, height: initial; width: 100%; overflow-x: hidden;';
}
navIconEl.addEventListener('click', navOpen);
navCloseEl.addEventListener('click', navClose); 
navBgOverlayEl.addEventListener('click', navClose); 

// Top Function  
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// End of Top Function
