'use strict';

var userName = prompt('What is your name ?');
alert('weclome ' + userName);
document.write('<span> Welcome </span>');
document.write('<span>' + userName + '</span>');


var counter1 = 0;


// var Age = prompt('Guess, Is my age more than 30? ');

// //console.log(myAge);

// if (Age.toLowerCase() === 'y' || Age.toLowerCase() === 'yes') {
//     alert('your guess is false');

// } else if (Age.toLowerCase() === 'n' || Age.toLowerCase() === 'no') {
//     alert('your guess is true');
//     counter1++;
//     console.log(counter1);
// } else { alert('wronge input'); }



// var movies = prompt('Guess, Do I love watching movies? ');
// //console.log(movies);

// if (movies.toLowerCase() === 'y' || movies.toLowerCase() === 'yes') {
//     alert('your guess is true');
//     counter1++;
//     console.log(counter1);

// } else if (movies.toLowerCase() === 'n' || movies.toLowerCase() === 'no') {
//     alert('your guess is false');
// } else { alert('wronge input'); }


// var car = prompt('Guess, Do I have a car? ');

// //console.log(car);

// if (car.toLowerCase() === 'y' || car.toLowerCase() === 'yes') {
//     alert('your guess is false');

// } else if (car.toLowerCase() === 'n' || car.toLowerCase() === 'no') {
//     alert('your guess is true');
//     counter1++;
//     console.log(counter1);
// } else { alert('wronge input'); }

// var born = prompt('Guess, Was I born in Jordan? ');
// //console.log(born);

// if (born.toLowerCase() === 'y' || born.toLowerCase() === 'yes') {
//     alert('your guess is true');
//     counter1++;
//     console.log(counter1);

// } else if (born.toLowerCase() === 'n' || born.toLowerCase() === 'no') {
//     alert('your guess is false');
// } else { alert('wronge input'); }


// var pet = prompt('Guess, Do I have a pet? ');

// //console.log(pet);

// if (pet.toLowerCase() === 'y' || pet.toLowerCase() === 'yes') {
//     alert('your guess is false');

// } else if (pet.toLowerCase() === 'n' || pet.toLowerCase() === 'no') {
//     alert('your guess is true');
//     counter1++;
//     console.log(counter1);
// } else { alert('wronge input'); }



var mounth;
var attempts1 = 0;
console.log(counter1);

while (attempts1 < 4) {

    mounth = parseInt(prompt('Guess, when was I born? (which mounth)')); 
    if (mounth === 6) {
        alert('your guess is true');
        counter1++;
        console.log(counter1); break;

    } else {
        attempts1++;
        console.log(attempts1)
        if (mounth > 6) { alert('too high'); } else if (mounth < 6) { alert('too low'); }
        else { alert('wronge input'); }
    }
}

alert('I was born in June, (the answer is 6)');

var colors = ['orange', 'brown', 'yellow', 'white'];
var myColor;
var attempts2 = 0;
while (attempts2 < 6) {
    myColor = prompt('Guess a color  I hate');
    myColor = myColor.toLocaleLowerCase();
    if (myColor === colors[0] || myColor === colors[1] || myColor === colors[2] || myColor === colors[3]) {
        alert('your guess is true');
        counter1++;
        console.log(counter1);
        break;
    } else {
        attempts2++;
        alert('your guess is false');
        console.log(attempts1)
    }
    // alert ('I hate ' + colors[0] + ' ' +  colors[1] + ' ' + colors[2] + ' ' + colors[3] + ' ')
}

alert('The Colors I hate are ' + colors);
alert( userName + ' you got ' + counter1 + ' out of 7');
document.write('<p>' + counter1 + ' is a good score' + '<p>');
