"use strict";

var catbutton = document.getElementById("catbutton");

catbutton.addEventListener("click", handleCatButtonClick);

function handleCatButtonClick() {
  var catsFromLS = JSON.parse(localStorage.getItem("cats"));
  // console.log("allCats array after retrieving from local storage", catsFromLS);
  for (var i = 0; i < catsFromLS.length; i++) {
    var newCat = new Cat(catsFromLS[i].name);
    newCat.render();
  }
  // console.log( "allCats array after reinstantiating through our Cat constructor", Cat.all);
};


