'use strict';

var name = 'my name is 201';
var number = 2; //1.5
var bool = true; //false
// console.log(name2);
// x = 3;
// console.log(x);

// d = 'ddddd';
// console.log(d);
// console.log('type of name',typeof name);
// console.log('type of number', typeof number);
// console.log('type of bool', typeof bool);

// var answer1 = confirm('are you ready ?');
// console.log(answer1);
// if(answer1 === true) {
//     console.log('welcome');
// } else {
//     console.log('try again');
// }

// logical operator
var myBool = true;
var anotherBool = false;
var thirdBool = true;

// AND = both condiotions have to be true
if(myBool && thirdBool) {
    console.log('myBool and thirdBool are true');
} else if (myBool || anotherBool) {
    console.log('one of them is true');
} else if (thirdBool) {
    console.log('thirdBool is true');
} else {
    console.log('everything above were false')
}
var color = prompt('what is your fav color ?');
console.log(color);

switch(color.toLowerCase()) {
    case 'blue':
        console.log('your fav is blue');
        break;
    case 'red':
        console.log('your fav is red');
        break;
    default:
        console.log('your fav color is ', color);
}


