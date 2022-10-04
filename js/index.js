// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  
// } else {
//   }

//navbar hide

// primary padding
(function () {
const headerHeight = document.querySelector('.header').clientHeight;

document.querySelector('.page').style.paddingTop = `${headerHeight}px`;
})();


// padding switch depends on screen size
window.addEventListener('resize', function() {
  let headerHeightDin = document.querySelector('.header').clientHeight;

  document.querySelector('.page').style.paddingTop = `${headerHeightDin}px`;
});


// dinamic navbar hide
let prevScrollpos = window.pageYOffset;

window.onscroll = () => {
  let headerHeight = document.querySelector('.header').clientHeight;
  let currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.header').style.top = "0";
    document.querySelector('.page').style.paddingTop = `${headerHeight}px`;
  } else {
    document.querySelector('.header').style.top = `${-headerHeight}px`;
    document.querySelector('.page').style.paddingTop = '60px';
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



