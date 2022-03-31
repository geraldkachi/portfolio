"use strict";

var sections = document.querySelectorAll('.section');
var sectBtns = document.querySelectorAll('.controlls');
var sectBtn = document.querySelectorAll('.control');
var allSections = document.querySelector(".main-content");

function PageTransitions() {
  // Buttom click active class 
  for (var i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      var currentBtm = document.querySelectorAll(".active-btn");
      currentBtm[0].className = currentBtm[0].className.replace("active-btn", "");
      this.className += " active-btn";
    });
  } // Section active


  allSections.addEventListener("click", function (e) {
    var id = e.target.dataset.id;

    if (id) {
      // remove selected from the other active
      sectBtns.forEach(function (btn) {
        btn.classList.remove('active');
      });
      e.target.classList.add('active'); // hide other sections

      sections.forEach(function (section) {
        return section.classList.remove('active');
      });
      var element = document.getElementById(id);
      element.classList.add('active');
    }
  }); // Toggle theme

  var themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", function () {
    var element = document.body;
    element.classList.toggle("light-mode");
  });
}

PageTransitions();