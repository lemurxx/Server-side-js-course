//create a module that exposes 6 functions

//Create a function that returns it's string argument
//sample input: 'echo'
//saple output: 'echo'
function repeatSync(text) {}

//Create an aynchrounous function that passes it's first argument to it's (second) callback argument
//The callback is a node-style error first callback 
//sample input: 'echo', (err, echoedText) { console.log(echoedText); }
function repeat(text) {}

//Create a function that returns it's string argument in all uppercase letters  
//sample input: 'echo'
//saple output: 'ECHO'
function upperSync(text) {}

//Create an aynchrounous function that passes it's first string argument to it's (second) callback argument in all uppercase letters
function upper(text) {}

//Create a function that returns it's string argument in all lowercase letters  
//sample input: 'ECHO'
//saple output: 'echo'
function lowerSync(text) {}

//Create an aynchrounous function that passes it's first string argument to it's (second) callback argument in all lowercase letters
function lower(text) {}