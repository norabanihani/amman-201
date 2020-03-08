var names = [
  "cruisin-goat",
  "emotional-goat",
  "goat-out-of-hand",
  "kissing-goat",
  "sassy-goat",
  "smiling-goat",
  "sweater-goat"
];

//(1) get the images
var leftImage = document.querySelector('#leftImage');
var rightImage = document.querySelector('#rightImage');
var imageSection = document.querySelector('#imagesSection')

//(2) add src,alt,title to the images to test if ever thing is working
leftImage.src = `assets/${names[0]}.jpg`;
leftImage.alt = names[0];
leftImage.title = names[0];

rightImage.setAttribute('src',`assets/${names[1]}.jpg`);
rightImage.setAttribute('alt',names[1]);
rightImage.setAttribute('title',names[1]);

//(3_1) create constructor function for the goats
function Goat(name) {
  this.name = name;
  this.clicks = 0;
  this.views = 0;
  this.imagePath = `assets/${this.name}.jpg`;
  Goat.all.push(this);
}
Goat.all =[];

//(3_2) instantiate objects for all the goats one shot
for(var i =0; i<names.length; i++) {
  new Goat(names[i]);
}

//(4) render 2 random images
var leftGoat, rightGoat;
function render () {
   leftGoat = Goat.all[randomNumber(0,Goat.all.length-1)];
  console.log(leftGoat);
   rightGoat = Goat.all[randomNumber(0,Goat.all.length-1)];
  console.log(rightGoat);
  leftImage.setAttribute('src',leftGoat.imagePath);
  leftImage.setAttribute('alt',leftGoat.name);
  leftImage.setAttribute('title',leftGoat.name);
  rightImage.setAttribute('src',rightGoat.imagePath);
  rightImage.setAttribute('alt',rightGoat.name);
  rightImage.setAttribute('title',rightGoat.name);
}
render();

//(5) add the event listener to render new images
imageSection.addEventListener('click',handleClickOnGoat);
var totalClicks =0;
function handleClickOnGoat(event) {
  if(totalClicks <5 ) {
    if(event.target.id !== 'imagesSection') {
      if(event.target.id === 'leftImage') {
        leftGoat.clicks++;
      } else if(event.target.id === 'rightImage') {
        rightGoat.clicks++;
      }
      totalClicks++;
      leftGoat.views++;
      rightGoat.views++;
      render();
    }
  }  else {
    console.log('more than 5 clicks');
    imageSection.removeEventListener('click',handleClickOnGoat);
    render2();
  }
}

function render2() {
  var ulE1 = document.getElementById('summary');
  for (var i =0; i<Goat.all.length ; i++) {
    var liE1 = document.createElement('li');
    liE1.textContent = `${Goat.all[i].name} has ${Goat.all[i].clicks} clicks and ${Goat.all[i].views} views`;
    ulE1.appendChild(liE1);
  }
}


// (5) Where should we add the event listener(for the left or right/ to imagesSection will be better since we will have only one clickListener )
// 5a identify the  clicked image
// 5b keep track of how many times the image have been clicked and viewed?
// 5c re render the images


//helper functions
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
