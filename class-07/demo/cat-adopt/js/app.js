// problem domain: the Seattle Kitten Rescue has tons of kittens who
// need good homes. One of the best ways to reach prospective adoptive
// homes is to have profiles for each kitten available on a website.
// There are hundreds of kittens, though, and only a few volunteers;
// it's too time-consuming to hand-code each kitten's profile on their
// website. They need a better way.

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
var cats =[];
function Cat (name,likes,imagePath,goodWithKids,goodWithDogs,goodWithOtherCats,breed) {
  this.name = name;
  this.age = 0;
  this.likes = likes;
  this.imagePath = imagePath;
  this.goodWithKids = goodWithKids;
  this.goodWithDogs = goodWithDogs;
  this.goodWithOtherCats = goodWithOtherCats;
  this.breed = breed;
  cats.push(this);
  console.log('cats array',cats);
}

Cat.prototype.getAge = function(min, max) {
  this.age = getRandomNumber(min, max);
}

Cat.prototype.render = function() {
  console.log(this);
  var container = document.getElementById("kittenProfiles");
      // create and append article to the container
      var articleEl = document.createElement("article");
      container.appendChild(articleEl);
      // create h2 with frankie name as textContent and append it to the article
      var h2El = document.createElement("h2");
      articleEl.appendChild(h2El);
      h2El.textContent = this.name; // or frankie.name
      // create p with frankie age string and append it to article
      var pEl = document.createElement("p");
      articleEl.appendChild(pEl);
      pEl.textContent = `Frankie is adorable, and is ${this.age} months old.`;
      // create ul and append it to article
      var ulEl = document.createElement("ul");
      articleEl.appendChild(ulEl);
      for (let i = 0; i < this.likes.length; i++) {
        var liEl = document.createElement("li");
        ulEl.appendChild(liEl);
        liEl.textContent = this.likes[i];
      }

      var tableE1 = document.createElement('table');
      container.appendChild(tableE1);
      var trE1 = document.createElement('tr');
      tableE1.appendChild(trE1);
      var thE1 = document.createElement('th');
      trE1.appendChild(thE1);
      var thE2 = document.createElement('th');
      trE1.appendChild(thE2);
      var thE3 = document.createElement('th');
      trE1.appendChild(thE3);
      thE1.textContent = 'good with cats';
      thE2.textContent = 'good with dogs';
      thE3.textContent = 'good with kids';

var trE2 = document.createElement('tr');
tableE1.appendChild(trE2);
var tdE1 = document.createElement('td');  
var tdE2 = document.createElement('td'); 
var tdE3 = document.createElement('td');
trE2.appendChild(tdE1);
trE2.appendChild(tdE2);
trE2.appendChild(tdE3);
tdE1.textContent = this.goodWithOtherCats;
tdE2.textContent = this.goodWithDogs;
tdE3.textContent = this.goodWithKids;
      // create image and set the src attribute to frankie image path then append it to the article
      var imgEl = document.createElement("img");
      imgEl.setAttribute("src", this.imagePath);
      articleEl.appendChild(imgEl);
}


// (name,likes,imagePath,goodWithKids,goodWithDogs,goodWithOtherCats,breed)
var frankie = new Cat('Frankie',['cuddling','food','sleeping','playing'],`images/frankie.jpeg`,false,true,true,'british');
var serena = new Cat('serena',['cuddling','playing'],`images/serena.jpeg`,false,false,false,'angora');
var jumper = new Cat('jumper',['food','sleeping'],`images/jumper.jpeg`,false,true,false,'persian');

// var cats = [frankie,serena,jumper];
for (var i =0; i< cats.length; i++) {
  cats[i].getAge(4,7);
  cats[i].render();
}

// frankie.getAge(4,7);
// frankie.render();
// serena.getAge(4,7);
// serena.render();
// jumper.getAge(4,7);
// jumper.render();


//Helper function
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// //Calling functions
// frankie.getAge(3, 7);
// frankie.render();
// jumper.getAge(3, 7);
// jumper.render();
// serena.getAge(3, 7);
// serena.render();


// ////////////////////////////////////////////////////////////////////
// //1 create a constructor function for all cats

// //2 add getAge method to the prototype

// //3 add render method to the prototype

// //4 creat 3 new instance of cats by using the new keyword

// //5 add all cats in array

// //6 loop through them and call the getAge and render methods

// //7 do a repl.it for tables (table.html code is attached) then apply it in html



// // table steps

// // 1 create table

// // 2 create first row

// // 3 create second row

// // 4 create the 3 table headers and assign values to the textContent

// // 5 append the table headers to the first row

// // 6 creat 3 table data and assign values to the textContent

// // 7 append the table data to the second row

// // 8 append the two rows to the table

// // 9 append the table to the article


// ////////////////////////////////////////   
// // <table>
// //   <tr>
// //     <th>good with cats</th>
// //     <th>good with dogs</th>
// //     <th>good with kids</th>
// //   </tr>
// //   <tr>
// //     <td>true</td>
// //     <td>true</td>
// //     <td>false</td>
// //   </tr>
// // </table>