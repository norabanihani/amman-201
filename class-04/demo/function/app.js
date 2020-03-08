console.log('Class04 Demo!!');

// what is a function?

// function declaration (function follwed by the func name)
function sayHello() {
    console.log('hello world');
}

// invoke or call a function
sayHello();

// passing data in function (Parameter + Argument)
function fullName (first, last) {
    var yourName = first +' ' +last;
    // console.log(yourName);
    return yourName;
}
var user = fullName('ahmad','abuSamaan');
console.log('user: ', user);
// return statement

// So, now why do we need Functions?
function multiply(n1,n2){
    var n3 = n1* n2;
    return n3;
    // console.log('hhhh');
}
var result1 = multiply(5,2);
console.log('result1: ', result1);
var result2 = multiply(6,2);
console.log('result2: ', result2);
var result3 = multiply(5,5);
console.log('result3: ', result3);


// Returning Multiple Values
function square (l) {
    var area = l*l;
    var ocean = 4 * l;
    var arr = [area,ocean];
    return arr;
}
var mySquare = square(5);
console.log('mySquare: ', mySquare);

// Function Expression
//function userName () {
//     var name2 = prompt('what is your name?');
//     alert(name2);
// }
// userName();

// Function Declaration
// var userName = function () {
//     var name2 = prompt('what is your name?');
//     alert(name2);
// }
// userName();

// IIFEs: Immediately-Invoked Function Expressions
// var userName2 = ( function () {
//     var name2 = prompt('what is your name?');
//     alert(name2);
// }) ();
// userName2();



//local vs global scope

var globalVar = 'universal';

function scoper(param) {
	var localVar = 'I like my privacy.';

	console.log('inside the function we can see param = ' + param);
	console.log('we can also see localVar = ' + localVar);
	console.log('and we can see globalVar = ' + globalVar);

	for (var i = 0; i < 3; i++) {
		console.log('the value of i in the loop is ' + i);
	}

	console.log('can we see i outside the loop? ' + i);
}

scoper('argument');

// console.log('can we see i outside the function? ' + i);
console.log('globally we can see globalVar: ' + globalVar);
// console.log('but not localVar: ' + localVar);
console.log('or param: ' + param);