/*
write a function that has 3 arguments and returns the average of its arguments
Sample input: 1, 2, 6
       output: 3
 */



/*
write a function that has an undefinite number arguments and returns the average of its arguments
Sample input: 2, 4, 6, 8
      output: 6
      input: 1, 2, 6
      output: 3
 */
function avg() {}


console.log(avg(2, 4, 6, 8));
console.log(avg(1, 2, 6));

/*
Write a function that calculates the sum of it's first 2 arguments and the average of the rest of it' arguments
    sample input: 1, 2, 3, 4, 5
    output: 7 (1 + 2 + (3 + 4 + 5 ) / 3)
*/

function sumAvg() {}

console.log(sumAvg(1, 2, 3, 4, 5));

/*
Write a function that returns a function that returns it's argument multiplied by 10
    sample input: - 
    output: a function
*/

function fMultiply10() {

}

let func = fMultiply10();
console.log(func(10));

/*
write a function that accepts an x argument and returns a function that returns it's argument multiplied by x
    sample input: 10
    output: a function
*/

function fMultiplyX(x) {

}

console.log(fMultiplyX(10)(10));