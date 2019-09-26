/*
With the help of the reduce method find the minimum of the array's elements
JS reference:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
*/



/*
with the help of the reduce method reverse an array
JS reference:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
*/



/*
with the help of the map method reverse an array
https://developer.mozilla.org/hu/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/



/*
write a function that returns a deep copy of an array that contains nested arrays
You can use the Array.isArray(value) method to decide if value is an array
JS reference:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
*/

function deepCopy(array) {
    return array;
}

let arrayToCopy = [1, 3, 5, [3, 3, 3],
    [2, [11, 12]], 24
];

let copy = deepCopy(arrayToCopy);
arrayToCopy[4][1][1] = 1000;
console.log(JSON.stringify(arrayToCopy));
console.log(JSON.stringify(copy));
//the copy should not change!!!


/*
write a function that returns a deep copy of an array that contains nested arrays
without using loops
*/

function deepCopy2(array) {
    return array;
}

arrayToCopy = [1, 3, 5, [3, 3, 3],
    [2, [11, 12]], 24
];
copy = deepCopy2(arrayToCopy);

arrayToCopy[4][1][1] = 1000;
console.log(JSON.stringify(arrayToCopy));
console.log(JSON.stringify(copy));
//the copy should not change!!!