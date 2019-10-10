const people = require('./people').people;

//Write a function that return the number of people that have starships
function cntHasStarShip() {
    return people.filter(p => p.starships.length > 0).length;
}

console.log(cntHasStarShip());

//Add a vehiclesCount property to each object, the value of the property is number of items of the array of vehicles property
function addVehiclesCount() {
    people.forEach(p => {
        p.vehiclesCount = p.vehicles.length;
    })
}

addVehiclesCount();
console.log("Vehicles Cnt:");
console.log("--------------");
people.forEach(p => console.log(p.name, p.vehiclesCount));

//Sort the people object by the number of items in the array of films property
function sortByFilmsCnt() {
    people.sort((p1, p2) => p1.films.length - p2.films.length);
}
console.log(' ');
console.log("Sorted by films:");
console.log("----------------");
sortByFilmsCnt();
people.forEach(p => console.log(p.name, p.films.length));


//Sort the people objects by the number of items in the starships array and within that by the number of items in the vehicles array
function sortByStarsipsandVehicles() {
    people.sort((p1, p2) => {
        let stord = p1.starships.length - p2.starships.length;
        return stord == 0 ? p1.vehiclesCount - p2.vehiclesCount : stord;
    });
}
console.log(' ');
console.log("Sorted by starships, vehicles:");
console.log("----------------");
sortByStarsipsandVehicles();
people.forEach(p => console.log(p.name, p.starships.length, p.vehiclesCount));

//Count the total number of vehicles
function countVehicles() {
    return people.reduce((sum, p) => p.vehiclesCount + sum, 0);
}

console.log(' ');
console.log("Total vehicles count:");
console.log("---------------------");
console.log(countVehicles());