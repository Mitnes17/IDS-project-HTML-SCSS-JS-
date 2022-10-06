// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  
// } else {
//   }

//navbar hide

// primary padding
(function () {
const headerHeight = document.querySelector('.header').clientHeight;

document.querySelector('.main-box').style.paddingTop = `${headerHeight}px`;
})();


// padding switch depends on screen size
window.addEventListener('resize', function() {
  let headerHeightDin = document.querySelector('.header').clientHeight;

  document.querySelector('.main-box').style.paddingTop = `${headerHeightDin}px`;
});


// dinamic navbar hide
let prevScrollpos = window.pageYOffset;

window.onscroll = () => {
  let headerHeight = document.querySelector('.header').clientHeight;
  let currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.header').style.top = "0";
    document.querySelector('.main-box').style.paddingTop = `${headerHeight}px`;
  } else {
    document.querySelector('.header').style.top = `${-headerHeight}px`;
    document.querySelector('.main-box').style.paddingTop = '60px';
  }
  prevScrollpos = currentScrollPos;
}


//event function
const body = document.querySelector('.body')
const sideBar = document.querySelector('.nav');

function navBar(e) {
  sideBar.classList.toggle('active');
  toggler.classList.toggle('active');
  body.classList.toggle('active'); //overflow
}


//toggler event
const toggler = document.querySelector('.btn-burger');

if (toggler) {
  toggler.addEventListener('click', navBar);
}


//event close with ESC
document.addEventListener('keydown', (event) => {
  if (event.code == 'Escape') {
    sideBar.classList.remove('active');
    toggler.classList.remove('active');
    body.classList.remove('active');
  }
});


//read more button
let smooth = () => document.querySelector('.hide').classList.toggle('active');

let readMore = () => {
  document.querySelector('.fishing__hidden-par').classList.toggle('active');
  document.querySelector('.fishing__toggler').classList.toggle('active');
  document.querySelector('.fishing__point').classList.toggle('active');
  document.querySelector('.fishing__points').classList.toggle('active');
  setTimeout(smooth, 1);
};

document.querySelector('.fishing__toggler').addEventListener('click', readMore);
