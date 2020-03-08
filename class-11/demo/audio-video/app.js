'use strict';
var randomizer = document.getElementById('randomizer');
var levees = document.getElementById('levees');
randomizer.addEventListener('click', randomSound);

function randomSound () {
    levees.volume = Math.random();
    console.log(levees.volume);
}

