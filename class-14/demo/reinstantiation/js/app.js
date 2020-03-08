"use strict";

var catform = document.getElementById("catform");
var catlist = document.getElementById("catlist");

function Cat(name) {
  this.name = name;
  Cat.all.push(this);
}
Cat.all = [];

Cat.prototype.render = function() {
  var liEl = document.createElement("li");
  liEl.textContent = this.name;
  catlist.appendChild(liEl);
};

catform.addEventListener("submit", handleCatSubmit);

function handleCatSubmit(e) {
  e.preventDefault();
  var newCat = new Cat(e.target.kitty.value);
  catform.reset();
  newCat.render();
  console.log("Cat.all -> ", Cat.all);
  // let's convert the JS obj to a string
  var catString = JSON.stringify(Cat.all);
  localStorage.setItem("cats", catString);
  console.log("catString", catString);
  // console.log("this is what is in local storage", localStorage.cats);
}
