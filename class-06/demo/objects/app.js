'use strict';

var person = {
    name:'Haneen', 
    age: 28,
    sayHi : function () {
        // console.log('hi ',user);
        console.log(this.name);
        console.log(this);
    }
}

console.log(this);
var userName = Window.prompt('what is your name ?');
// person.sayHi();

// console.log(person);

// person.name = 'Razan';
// console.log(person);

// // bracket notation -> to add a new key
// person['notes'] = 'cat lover';
// console.log(person);

// // dot notation -> to update a value of the key
// person.notes = 'dog lover';