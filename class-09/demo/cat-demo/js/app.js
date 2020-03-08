// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like (eg: cuddling, chasing string, napping, food)
// - an image
// good with kids
// good with dogs
// good with other cats
// breed (e.g: Egyptian Mau, Persian,British Shorthair)

// TODO: dynamically generate kitten objects using form data
var cats = [];
function Cat(
  name,
  likes,
  imagePath,
  goodWithKids,
  goodWithDogs,
  goodWithOtherCats,
  breed
) {
  this.name = name;
  this.age = 0;
  this.likes = likes;
  this.imagePath = imagePath;
  this.goodWithKids = goodWithKids;
  this.goodWithDogs = goodWithDogs;
  this.goodWithOtherCats = goodWithOtherCats;
  this.breed = breed;
  cats.push(this);
}
Cat.prototype.getAge = function(min, max) {
  this.age = getRandomNumber(min, max);
};
Cat.prototype.render = function() {
  var container = document.getElementById("kittenProfiles");
  // create and append article to the container
  var articleEl = document.createElement("article");
  container.appendChild(articleEl);
  // create h2 with frankie name as textContent and append it to the article
  var h2El = document.createElement("h2");
  articleEl.appendChild(h2El);
  h2El.textContent = this.name;
  // create p with frankie age string and append it to article
  var pEl = document.createElement("p");
  articleEl.appendChild(pEl);
  pEl.textContent = `${this.name} is adorable, and is ${this.age} months old.`;
  // create ul and append it to article

  var ulEl = document.createElement("ul");
  articleEl.appendChild(ulEl);
  // append li's to the ul containing frankie interests
  for (let i = 0; i < this.likes.length; i++) {
    var liEl = document.createElement("li");
    ulEl.appendChild(liEl);
    liEl.textContent = this.likes[i];
  }
  // 1 create table
  var tableEl = document.createElement("table");
  // 2 create first row
  var headerRowEl = document.createElement("tr");
  // 3 create second row
  var dataRowEl = document.createElement("tr");
  // 4 create the 3 table headers and assign values to the textContent
  var th1El = document.createElement("th");
  th1El.textContent = "good with cats";
  var th2El = document.createElement("th");
  th2El.textContent = "good with kids";
  var th3El = document.createElement("th");
  th3El.textContent = "good with dogs";

  // 5 append the table headers to the first row
  headerRowEl.appendChild(th1El);
  headerRowEl.appendChild(th2El);
  headerRowEl.appendChild(th3El);
  // 6 creat 3 table data and assign values to the textContent
  // 7 append the table data to the second row

  var td1El = document.createElement("td");
  td1El.textContent = this.goodWithOtherCats;
  dataRowEl.appendChild(td1El);
  var td2El = document.createElement("td");
  td2El.textContent = this.goodWithKids;
  dataRowEl.appendChild(td2El);
  var td3El = document.createElement("td");
  td3El.textContent = this.goodWithDogs;
  dataRowEl.appendChild(td3El);
  // 8 append the two rows to the table
  tableEl.appendChild(headerRowEl);
  tableEl.appendChild(dataRowEl);
  // 9 append the table to the article
  articleEl.appendChild(tableEl);

  // create image and set the src  attribute to frankie image path then append it to the article
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", this.imagePath);
  articleEl.appendChild(imgEl);
  
};

var myForm = document.getElementById('catForm');
myForm.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log(event);
  console.log(event.target);
  var name = event.target.name.value;
  console.log(name);
  var breed = event.target.breed.value;
  console.log(breed);
  var likes = event.target.likes.value.split(',');
  console.log(likes);
  var cats = event.target.cats.checked;
  console.log(cats);
  var dogs = event.target.dogs.checked;
  console.log(dogs);
  var kids = event.target.kids.checked;
  console.log(kids);
  var imgPath = `images/${name}.jpeg`;
  // function Cat(name,likes,imagePath,goodWithKids,goodWithDogs,goodWithOtherCats,breed)
  var catObj = new Cat(name,likes,imgPath,kids,dogs,cats,breed);
  catObj.getAge(4,7);
  catObj.render();
  myForm.reset();
})



// for (let i = 0; i < cats.length; i++) {
//   cats[i].getAge(3, 7);
//   cats[i].render();
// }

//helper functions
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
