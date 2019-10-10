const people = require('./people').people;

const propTypes = {
    "name": "str",
    "height": "num",
    "mass": "num",
    "hair_color": "str",
    "skin_color": "str",
    "eye_color": "str",
    "birth_year": "str",
    "gender": "str",
}


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
    let obj = byProp('name', name);
    if (obj.length > 0)
        return obj[0];
    return undefined;
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
    return byProp('eye_color', color);
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
    return people.filter(p => p[prop] == value);
}

function getPropType(propName) {
    let prop = propTypes[propName];
    return (prop || "str");
}

function getValue(obj, prop, type) {
    return type == "num" ? parseInt(obj[prop]) : obj[prop];
}


//write a sort function that sorts people objects by the property specified in prop argument,
//the function has another boolean argument asc, which default value is true
//if the asc argument is true the people objects has to be in ascending order, othrtwise in descending order 
//sample input: "mass", false
//       outpur: people array sorted by the mass property desc
function sort(prop, asc = true) {
    const pType = getPropType(prop);
    people.sort((p1, p2) => (getValue(p1, prop, pType) - getValue(p2, prop, pType)) * (asc ? 1 : -1));
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
    return people.map(p => {
        if (fields && fields.length > 0) {
            let mapped = {};
            fields.forEach(field => {
                mapped[field] = p[field];
            });
            return mapped;
        }
        return p;
    });
}

module.exports = {
    byName: byName,
    byEyeColor: byEyeColor,
    sort: sort,
    all: all
};