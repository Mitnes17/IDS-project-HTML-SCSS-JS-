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


//slider 

// function slider (e) {
//   let target = e.target;
  
//   if (target.className === 'btn-slider') {
//     render(target);
//   }
// }

// function render (target) {
//   let id = target.dataset.id;

//   let selectedBtn = document.querySelector('.btn-slider.active');
//   let selectedBlock = document.querySelector('.slider__render.active');
//   let selectedSubBlock = document.querySelector('.slider__svg-block.active');
//   let selectedImg = document.querySelector('img.active');

//   if (selectedBtn || selectedBlock || selectedSubBlock) {
//     selectedBlock.classList.remove('active');
//     selectedBtn.classList.remove('active');
//     selectedSubBlock.classList.remove('active');
//     selectedImg.classList.remove('active');
//   }

//   selectedBtn = target;
//   selectedBtn.classList.add('active');
  
//   selectedBlock = document.querySelector(`.slider__render[data-id="${id}"]`);
//   selectedBlock.classList.add('active');

//   selectedSubBlock = document.querySelector(`.slider__svg-block[data-id="${id}"]`);
//   setTimeout(() => selectedSubBlock.classList.add('active'), 1);

//   selectedImg = document.querySelector(`img[data-id="${id}"]`);
//   setTimeout(() => selectedImg.classList.add('active'), 1);
  
//   let image = document.querySelectorAll('.img-border');

//     switch (id) {
//       case '1' : 
//         image[0].style.borderColor = '#009fd6';
//         break;
//       case '2': 
//         image[1].style.borderColor = '#f1ae2a';
//         break;
//       case '3': 
//         image[2].style.borderColor = '#d84e30';
//         break;
//       case '4': 
//         image[3].style.borderColor = '#8ec33c';
//         break;
//       case '5': 
//         image[4].style.borderColor = '#c8da2d';
//         break;
//     }
// }

// document.querySelector('.slider__container').addEventListener('click', slider);

function slider (e) {
  let target = e.target.closest('.btn-wrap');
  
  if (target.className === 'btn-wrap') {
    render(target);
  }
}

function render (target) {
  let id = target.dataset.id;
  console.log(id);

  let selectedBtn = document.querySelector('.btn-wrap.active');
  let selectedBlock = document.querySelector('.slider__render.active');
  let selectedSubBlock = document.querySelector('.slider__svg-block.active');
  let selectedImg = document.querySelector('img.active');

  if (selectedBtn || selectedBlock || selectedSubBlock) {
    selectedBlock.classList.remove('active');
    selectedBtn.classList.remove('active');
    selectedSubBlock.classList.remove('active');
    selectedImg.classList.remove('active');
  }

  selectedBtn = target;
  selectedBtn.classList.add('active');
  
  selectedBlock = document.querySelector(`.slider__render[data-id="${id}"]`);
  selectedBlock.classList.add('active');

  selectedSubBlock = document.querySelector(`.slider__svg-block[data-id="${id}"]`);
  setTimeout(() => selectedSubBlock.classList.add('active'), 1);

  selectedImg = document.querySelector(`img[data-id="${id}"]`);
  setTimeout(() => selectedImg.classList.add('active'), 1);
  
  let image = document.querySelectorAll('.img-border');

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