// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  
// } else {
//   }

//navbar hide

// primary padding
(function () {
const headerHeight = jsHeader.clientHeight;
document.getElementById('jsPage').style.paddingTop = `${headerHeight}px`;
})();


// padding switch depends on screen size
window.addEventListener('resize', function() {
  let headerHeightDin = jsHeader.clientHeight;
  document.getElementById('jsPage').style.paddingTop = `${headerHeightDin}px`;
});


// dinamic navbar hide
let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  let headerHeight = jsHeader.clientHeight;
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("jsHeader").style.top = "0";
    document.getElementById('jsPage').style.paddingTop = `${headerHeight}px`;
  } else {
    document.getElementById("jsHeader").style.top = `${-headerHeight}px`;
    document.getElementById('jsPage').style.paddingTop = '60px';
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
const toggler = document.querySelector('.toggler');
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



