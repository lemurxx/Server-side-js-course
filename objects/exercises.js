const people = require('./people').people;

//Write a function that return the number of people that have starships
function cntHasStarShip() {}

console.log(cntHasStarShip());

//Add a vehiclesCount property to each object, the value of the property is number of items of the array of vehicles property
function addVehiclesCount() {

}

addVehiclesCount();
console.log("Vehicles Cnt:");
console.log("--------------");
people.forEach(p => console.log(p.name, p.vehiclesCount));

//Sort the people object by the number of items in the array of films property
function sortByFilmsCnt() {

}
console.log(' ');
console.log("Sorted by films:");
console.log("----------------");
sortByFilmsCnt();
people.forEach(p => console.log(p.name, p.films.length));


//Sort the people objects by the number of items in the starships array and within that by the number of items in the vehicles array
function sortByStarsipsandVehicles() {

}
console.log(' ');
console.log("Sorted by starships, vehicles:");
console.log("----------------");
sortByStarsipsandVehicles();
people.forEach(p => console.log(p.name, p.starships.length, p.vehiclesCount));

//Count the total number of vehicles
function countVehicles() {

}

console.log(' ');
console.log("Total vehicles count:");
console.log("---------------------");
console.log(countVehicles());