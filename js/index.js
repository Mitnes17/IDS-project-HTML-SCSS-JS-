import {colors, textCount, textSpace} from "./Circle.js";

// primary padding
(function () {
const headerHeight = document.querySelector('.header').clientHeight;

document.querySelector('.main-box').style.paddingTop = `${headerHeight}px`;
})();
//

// padding switch depends on screen size
window.addEventListener('resize', function() {
  let headerHeightDin = document.querySelector('.header').clientHeight;

  document.querySelector('.main-box').style.paddingTop = `${headerHeightDin}px`;
});
//

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
//

//event function
const body = document.querySelector('.body')
const sideBar = document.querySelector('.nav');

function navBar(e) {
  sideBar.classList.toggle('active');
  toggler.classList.toggle('active');
  body.classList.toggle('active'); //overflow
}
//

//toggler event
const toggler = document.querySelector('.btn-burger');

if (toggler) {
  toggler.addEventListener('click', navBar);
}
//

//event close with ESC
document.addEventListener('keydown', (event) => {
  if (event.code == 'Escape') {
    sideBar.classList.remove('active');
    toggler.classList.remove('active');
    body.classList.remove('active');
  }
});
//

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
//

//slider 
function slider (e) {
  let target = e.target.closest('.btn-wrap');

  if (target.className === 'btn-wrap') {
    render(target);
  }
}

function render (target) {
  let id = target.dataset.id;

  let selectedBtn = document.querySelector('.btn-wrap.active');
  let selectedBlock = document.querySelector('.slider__render.active');

  if (selectedBtn || selectedBlock) {
    selectedBlock.classList.remove('active');
    selectedBtn.classList.remove('active');
  }

  selectedBtn = target;
  selectedBtn.classList.add('active');
  
  selectedBlock = document.querySelector(`.slider__render[data-id="${id}"]`);
  selectedBlock.classList.add('active');
  
  //border-color switch
  const width = document.querySelector('.body').offsetWidth;
  const imageF = () => width > '1199' ? document.querySelectorAll('.img-border1') : document.querySelectorAll('.img-border');
  const image = imageF();

    switch (id) {
      case '1' : 
        image[0].style.borderColor = '#009fd6';
        break;
      case '2': 
        image[1].style.borderColor = '#f1ae2a';
        break;
      case '3': 
        image[2].style.borderColor = '#d84e30';
        break;
      case '4': 
        image[3].style.borderColor = '#8ec33c';
        break;
      case '5': 
        image[4].style.borderColor = '#c8da2d';
        break;
    }
}

document.querySelector('.slider__container').addEventListener('click', slider);
//

//render-wrap dinamic size for overflow content
const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    const width = document.querySelector('.body').offsetWidth;
    const height = document.querySelector('.slider__render.active').clientHeight;
    const backHeight = document.querySelector('.slider__back').clientHeight;

    if (entry.target.className === 'render-wrap') {
      if (width < '768') {
        document.querySelector('.render-wrap').style.height = `${2 * height}px`;
      }

      if (width >= '768' && width < '1200') {
          document.querySelector('.render-wrap').style.height = `${height}px`;
      }

      //dependence on back img
      if (width > '1199') { 
        if (height <= backHeight) {
        document.querySelectorAll('.render-wrap').forEach(element =>
          element.style.height = `${backHeight}px`
        );
        }
      }
    }
  }
});

resizeObserver.observe(document.querySelector('.render-wrap'));
//

//interval setting circle color and text
setInterval(function iter() {

  //colors of the circle
  colors.forEach((elem, i) => {
    setTimeout(() => {
      document.querySelector('.circle__grand').style.borderColor = elem; 
      document.querySelector('div.circle__small > figure').style.borderColor = elem; 
      document.querySelector('.circle__dot').style.borderColor = elem; 
      document.querySelector('.circle__center').style.backgroundColor = elem; 
    }, 
      i * 5000)
  });

  //text in the circle
  textSpace.forEach((elem, i) => {
    setTimeout(() => {
      document.querySelector('.circle__space').innerHTML = elem;
    },
    i * 5000)
  });

  //count in the circle
  textCount.forEach((elem, i) => {
    setTimeout(() => {
      document.querySelector('.circle__count').innerHTML = elem;
    },
    i * 5000)
  });
  
  return iter;
}(), 60000);
//