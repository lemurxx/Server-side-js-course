const fs = require('fs');
const csvRoot = './services/csv/';
const dataStore = {
    people: {
        file: 'people.csv',
        data: null
    },
    planets: {
        file: 'planets.csv',
        data: null
    },
    residents: {
        file: 'residents.csv',
        data: null
    }
}

function error(message, callback, callAsync = false) {
    if (callAsync)
        process.nextTick(() => callback(new Error(message), null));
    else
        callback(new Error(message), null);
}

function getCSVData(collectionName, callback) {
    let filePath = dataStore[collectionName].file;
    if (!filePath) {
        error('Data not found: ' + collectionName, callback);
        return;
    }
    fs.readFile(csvRoot + filePath, (err, data) => {
        if (err) {
            error(err.message, callback);
        }
        const lines = data.toString().split('\r\n').filter(line => line.length > 0);
        if (lines.length > 0) {
            const fields = lines[0].split(',').filter(el => el.length > 0);
            lines.shift();
            let objects = [];
            lines.map(line => {
                const values = line.trim().split(',').filter(el => el.length > 0);
                if (values.length != fields.length) {
                    error('Invalid data', callback);
                    return;
                }
                let obj = {};
                values.forEach((val, idx) => {
                    obj[fields[idx]] = val;
                })
                objects.push(obj);
            });
            dataStore[collectionName].data = objects;
            callback(null, objects);
            return;
        }
        error('No data', callback);

    });

}


function getAll(collectionName, callback) {

    if (dataStore[collectionName].data) {
        setImmediate(() => callback(null, dataStore[collectionName].data));
    } else {
        getCSVData(collectionName, (err, data) => {
            callback(err, data);
        });
    }
}

function getFiltered(collectionName, predicateFunc, callback) {
    getAll(collectionName, (err, data) => {
        callback(err, err ? null : data.filter(predicateFunc));
    });
}

function getById(id, collectionName, callback) {
    getFiltered(collectionName, el => el.id == id, callback)
}

function getByName(name, collectionName, callback) {
    getFiltered(collectionName, el => el.name == name, callback)
}


function getResidents(planetId, callback) {
    getAll('residents', (err, residents) => {
        if (err) {
            callback(err, null);
            return;
        }
        getAll('people', (err, people) => {
            if (err) {
                callback(err, null);
                return;
            }
            let planetResidents = residents.filter(res => res.planet == planetId).map(res => res.resident);
            let planetPeople = people.filter(p => planetResidents.indexOf(p.id) > -1);
            callback(null, planetPeople);

        })
    })
}


module.exports = {
    getAll,
    getById,
    getByName,
    getResidents
}