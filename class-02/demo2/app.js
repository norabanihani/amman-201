// var car1 = 'Audi';
// var car2 ='Pajero';
// var car3 = 'Toyota';

// var cars = ['Audi','Pajero','Toyota'];
var cars =[];
cars = ['Audi','Pajero','Toyota'];

// console.log(cars);

console.log(cars[2]);

if(cars[2]=== 'Pajero') {
  console.log('true');
}
else {
  console.log('false');
}

console.log(cars);
cars.push('BMW');
console.log(cars);

cars.pop();
console.log(cars);

cars.unshift('Tesla');
console.log(cars);

cars.shift();
console.log(cars);

console.log(cars.length);

cars[3]='opel';
console.log(cars);