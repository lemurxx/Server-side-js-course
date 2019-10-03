//create a module exporting the following functions:

//write a function that returns a people object, which name property equals name
//sample input: 'Luke Skywalket'
//        output: { name: 'Luke Skywalker',
//          height: '172',
//          mass: '77',
//          hair_color: 'blond',
//          skin_color: 'fair',
//          eye_color: 'blue', ... }
//
function byName(name) {

}

//write a function that returns an array of people objects, which exe_color property equals color
//sample input: 'blue'
//        output: [{ name: 'Luke Skywalker',
//          height: '172',
//          mass: '77',
//          hair_color: 'blond',
//          skin_color: 'fair',
//          eye_color: 'blue', ... }, {...} ]
//
function byEyeColor(color) {

}

//write a function that returns an array of people objects, which prop property equals value
//sample input: 'eye_color', 'blue'
//        output: [{ name: 'Luke Skywalker',
//          height: '172',
//          mass: '77',
//          hair_color: 'blond',
//          skin_color: 'fair',
//          eye_color: 'blue', ... }, {...} ]
//
function byProp(prop, value) {

}



//write a sort function that sorts people objects by the property specified in prop argument,
//the function has another boolean argument asc, which default value is true
//if the asc argument is true the people objects has to be in ascending order, othrtwise in descending order 
//sample input: "mass", false
//       outpur: people array sorted by the mass property desc
function sort(prop, asc = true) {

}


//write an all function, that return a copy of the people array, 
//the function has a fields parameter, which is an array containing a list of property names
//if the fields is set the elements of the array returned by the function have only the properties specified in the fields array
//if the property value is a string containing a number (ie. mass) convert it to number
//
//sample input: ['name', 'mass', 'eye_color']
//       output: [{ name: 'Beru Whitesun lars', mass: '75', eye_color: 'blue' },
//                { name: 'Leia Organa', mass: '49', eye_color: 'brown' }...]
function all(fields) {

}