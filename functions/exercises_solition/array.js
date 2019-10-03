/*
With the help of the reduce method find the minimum of the array's elements
JS reference:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
*/
const minArray;
console.log('min', minArray);

/*
with the help of the reduce method reverse an array
JS reference:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
*/
const reverseArray;
console.log('reversed', reverseArray);

/*
with the help of the map method reverse an array
https://developer.mozilla.org/hu/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/
const reverseArray2;
console.log('reversed', reverseArray2);


/*
write a function that returns a deep copy of an array that contains nested arrays
You can use the Array.isArray(value) method to decide if value is an array
JS reference:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
*/

function deepCopy(array) {
    let copy = [];
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i]))
            copy.push(deepCopy(array[i]));
        else
            copy.push(array[i]);
    }
    return copy;
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
    return array.map(el => {
        if (Array.isArray(el))
            return mapCopyArray(el);
        return el;
    })
}

arrayToCopy = [1, 3, 5, [3, 3, 3],
    [2, [11, 12]], 24
];
copy = deepCopy2(arrayToCopy);

arrayToCopy[4][1][1] = 1000;
console.log(JSON.stringify(arrayToCopy));
console.log(JSON.stringify(copy));
//the copy should not change!!!

let copy3 = mapCopyArray(arrayToCopy);
arrayToCopy[4][1][1] = 9000;
console.log(JSON.stringify(arrayToCopy));
console.log(JSON.stringify(copy3));


//write a function that calculates the average of its arguments (the number of arguments is indefinite)

function avg(...args) {
    var sum = args.reduce((acc, el) => acc + el, 0);
    return sum / args.length;
}

console.log(avg(2, 4, 6, 8));

//write a function that calculates the sum of it's first 2 arguments and the average of the rest of it' arguments
//sample input: 1, 2, 3, 4, 5
//output: 7 (1 + 2 + (3 + 4 + 5 ) / 3)

function sumAvg(a, b, ...other) {
    var sum = other.reduce((acc, el) => acc + el, 0);
    return a + b + sum / other.length;
}

console.log(sumAvg(1, 2, 3, 4, 5));


//write a function that returns a function that returns it's argument multiplied by 10
function fmultiply() {
    return function multiply(x) {
        return x * 10;
    }
}


console.log(fmultiply()(10));

//write a function that accepts an x argument and returns a function that returns it's argument multiplird by x
function fmultiply2(x) {
    return function multiply(y) {
        return x * y;
    }
}

console.log(fmultiply2(2)(10));