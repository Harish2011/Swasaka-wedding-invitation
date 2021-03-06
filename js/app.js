// Transparent to solid header
const header = document.querySelector("header");

function scrollFunction() {

    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        header.classList.add("header__solid");
    } else {
        header.classList.remove("header__solid");
    }

}

window.onscroll = function () {
    scrollFunction()
};

// Mobile navbar toggler
const menu = document.getElementById('btn__menu');
const closeMenu = document.getElementById('btn__close');
const overlay = document.querySelector('.overlay');

function navToggler() {
    document.querySelector('.nav').classList.toggle('nav__active');
    document.querySelector('.overlay').classList.toggle('hide');
}

menu.addEventListener('click', () => {
    navToggler();
});

closeMenu.addEventListener('click', () => {
    navToggler();
});

overlay.addEventListener('click', () => {
    navToggler();
});

// Testimony toggler

const groom = document.getElementById('groom');
const bride = document.getElementById('bride');

bride.addEventListener('click', () => {
    document.getElementById("bridepics").style.display="";
    document.getElementById("groompics").style.display="none";
    groom.className="tabbar__item";
    bride.className="tabbar__item tabbar__item--current";

});
groom.addEventListener('click', () => {
    document.getElementById("groompics").style.display=""
    document.getElementById("bridepics").style.display="none"
    bride.className="tabbar__item";
    groom.className="tabbar__item tabbar__item--current";
});

// Service Worker for PWA

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function () {
//         navigator.serviceWorker.register('/techinnovators/sw.js')
//     });
// }

var x = document.getElementById("myAudio"); 

function heartsound() { 
  x.play(); 
}