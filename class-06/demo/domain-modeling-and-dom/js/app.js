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

//1 create object that will contain all properties and a method to getAge
var frankie = {
    name: 'Frankie',
    age: 0,
    likes : ['cuddling', 'chasing string', 'napping', 'food'],
    imagePath: 'images/frankie.jpeg',
    goodWithKids: true,
    goodWithDogs: false,
    goodWithOtherCats: true,
    breed: 'british short-hair',
    randomAge: function(min,max) {
        // this.age = 5;
        this.age = getRandomNumber(min,max);
    },

//     <article>
//     <h2>frankie</h2>
//     <p>Frankie is adorable, and is 4 months old.</p>
//     <ul>
//       <li>cuddling</li>
//       <li>chasing string</li>
//     </ul>
//     <img src="images/frankie.jpeg" />
//   </article>
     render: function () {
         var container = document.getElementById('kittenProfiles');
         // create and append article to the container
         var articleE1 = document.createElement('article');
         container.appendChild(articleE1);
         // create h2 with frankie name as textContent and append it to the article
         var h2E1 = document.createElement('h2');
         articleE1.appendChild(h2E1);
         h2E1.textContent = this.name;
        // create p with frankie age string and append it to article
        var pE1 = document.createElement('p');
        articleE1.appendChild(pE1);
        // Frankie is adorable, and is 4 months old.
        pE1.textContent = `Frankie is adorable, he is ${this.age} months old.`;
        // create ul and append it to article
        var ulE1 = document.createElement('ul');
        articleE1.appendChild(ulE1);
        // append li's to the ul containing frankie likes
        for(var i =0; i<this.likes.length ; i++) {
            var liE1 = document.createElement('li');
            ulE1.appendChild(liE1);
            liE1.textContent = this.likes[i];
        }
        // create image and set the src  attribute to frankie image path then append it to the article
        var imgE1 = document.createElement('img');
        imgE1.setAttribute('src',this.imagePath);
        articleE1.appendChild(imgE1);

          console.log(container);
     }
}

frankie.randomAge(1,9);
frankie.render();
console.log(frankie);


//2 helper function to calculate random age within range
function getRandomNumber(min,max) {
    var newAge = Math.floor(Math.random()* (max-min+1) + min); 
    return newAge;
}


//3 call getAge after creating the object to set the age property to the random age



// render function
// get (from the DOM) who the parent element is going to be.
// where am I attaching this new element ??


