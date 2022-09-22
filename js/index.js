let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("jsNavbar").style.top = "0";
  } else {
    document.getElementById("jsNavbar").style.top = "-140px";
  }
  prevScrollpos = currentScrollPos;
}

