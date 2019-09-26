/*
EXERCISE 1
Write a function that changes its string argument the following way:
input: The class starts at [hour]:30[period]
output: The class starts between [hour][period] and [hour + 1][period]
The input format is NOT needed to be checked

sample:
input: The class starts at 4:30PM
output: The class starts between 4PM and 5PM
input: The class starts at 10:30AM
output: The class starts between 10AM and 11AM

JS reference:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
*/

var str = 'The class starts at 9:30AM';

function changeText(text) {
    let hour = parseInt(str.substr(20));
    let period = str.substr(str.length - 2);
    return 'The class starts between ' + hour + period + ' and ' + (hour + 1) + period;
}

console.log(changeText(str));

/*
EXERCISE 2
Write a function that breaks every single word of a it's string argument to a new line 
and returns the result as a string

sample:
input: "To be or not to be" 
output: 
"To
be
or
not
to
be"

JS reference:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Escape_notation
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
*/

function breakText(str) {
    return str.split(' ').join('\n');
}

console.log(breakText('To be or not to be'));

/*
EXERCISE 3
Write a function that processes the query string of an url. The function accepts 2 arguments: the url and a query parameter name
and returns the value of the specified parameter
you do NOT have to check if the query parameter can be found in url 

sample:
input: "http://example.com/path/to/page?firstname=john&lastname=doe&email=jdoe@example.com" , "lastname"
output: "doe"

JS reference:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr 
or
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

*/


function getParam(url, paramName) {
    let paramStart = url.indexOf(paramName);
    let valueStart = url.indexOf('=', paramStart) + 1;
    let valueEnd = url.indexOf('&', valueStart);
    if (valueEnd === -1) //last parameter
        return url.substr(valueStart);
    else
        return url.substring(valueStart, valueEnd - 1);
}

console.log(getParam("http://example.com/path/to/page?firstname=john&lastname=doe&email=jdoe@example.com", "email"));
console.log(getParam("http://example.com/path/to/page?firstname=john&lastname=doe&email=jdoe@example.com", "lastname"));

/*
EXERCISE 3
Write a function that processes the query string of an url and returns every parameters of it in the following format:
name1:value1, name2:value2, name3:value3....

sample:
input: "http://example.com/path/to/page?firstname=john&lastname=doe&email=jdoe@example.com" 
output: "firstname:john, lastname:doe, email:jdoe@example.com"

JS reference:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

*/

function getParams(url) {
    let query = url.split('?')[1];
    let params = query.split('&');
    return params.join(', ').replace(/=/g, ':');
}

console.log(getParams("http://example.com/path/to/page?firstname=john&lastname=doe&email=jdoe@example.com"));

/*
EXERCISE 4
Write a function that prints a decimal number in binary or octal or hexadecimal format. 
The function accepts 2 parameter the number and on of the following strings: 'OCT', 'HEX', 'BIN'
IF the first parameter is not a number or an invalid string value is passed as the 2nd parameter 
the function returns the 'Invalid parameter' string

sample:
input: 10, 'BIN'
output: '1010'
input: 10, 'OCT'
output: '12'
input: 10, 'HEX'
output: 'A'
input: 10, 'OTHER'
output: 'Invalid parameter'

JS reference:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
 */

function convertDecimal(value, format) {
    if (isNaN(value))
        return 'Invalid parameter';
    let base;
    switch (format) {
        case 'BIN':
            base = 2;
            break;
        case 'OCT':
            base = 8;
            break;
        case 'HEX':
            base = 16;
            break;
    }
    if (base === undefined)
        return 'Invalid parameter';
    return value.toString(base);

}


console.log(convertDecimal(10, 'BIN'));
console.log(convertDecimal(10, 'OCT'));
console.log(convertDecimal(10, 'HEX'));
console.log(convertDecimal(10, 'OTHER'));
console.log(convertDecimal('A', 'HEX'));

//let's pass the value in octal / hexadecimal format
console.log(convertDecimal(010, 'BIN')); //octal
console.log(convertDecimal(0x10, 'BIN')); //hexa


/*
EXERCISE 5
Write a function that returns a random integer in the range specified by the min, max parameters passed 
min inclusive, max exclusive

sample: 
input: 10, 20
output: ie. 10, 14, 19 

JS reference:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/

function generateInRange(min, max) {
    return min + Math.floor(Math.random() * Math.floor(max));
}

console.log(generateInRange(10, 20));