'use strict';

filterSelection("all")
function filterSelection(categorySelected) {
  let divFilterElements;
  divFilterElements = document.getElementsByClassName("divFilter");
  if (categorySelected == "all") categorySelected = "";
  
  for (let i = 0; i < divFilterElements.length; i++){
    removeClass(divFilterElements[i], "show");
    if (divFilterElements[i].className.indexOf(categorySelected) > -1) addClass(divFilterElements[i], "show");
  }
}

function addClass(element, classes) {
  let currentClasses, classesToAdd;
  currentClasses = element.className.split(" ");
  classesToAdd = classes.split(" ");
  for (let i = 0; i < currentClasses.length; i++) {
    if (classesToAdd.indexOf(currentClasses[i] == -1)) {
      element.className += " " + classesToAdd[i];
    }
  }
}

function removeClass(element, classes) {
  let currentClasses, classesToRemove;
  currentClasses = element.className.split(" ");
  classesToRemove = classes.split(" ");
  for (let i = 0; i < classesToRemove.length; i++) {
    while (currentClasses.indexOf(classesToRemove[i]) > -1) {
      currentClasses.splice(currentClasses.indexOf(classesToRemove[i]), 1);
    }
  }
}

let buttonContainer = document.getElementById("productTypeButtonCtnr");
let buttons = buttonContainer.getElementsByClassName("categoryButton");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("activeCategoryButton");
    current[0].className = current[0].className.replace(" activeCategoryButton", "");
    this.className += " activeCategoryButton";
  }); 
}