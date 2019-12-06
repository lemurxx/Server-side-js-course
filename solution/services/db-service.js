const config = require('../db/knex.config');
const knex = require('knex')(config.sqlite);

function getAll(table, callback) {
    knex.table(table)
        .then(data => {
            callback(null, data);
        })
        .catch(err => {
            callback(err, null);
        })
}

function getById(id, table, callback) {
    knex.table(table)
        .where({ id })
        .then(data => {
            callback(null, data);
        })
        .catch(err => {
            callback(err, null);
        })
}


function getByName(name, table, callback) {
    knex.table(table)
        .where({ name })
        .then(data => {
            callback(null, data);
        })
        .catch(err => {
            callback(err, null);
        })
}

function getResidents(planetId, callback) {
    knex.table('residents')
        .join('people', function() {
            this.on('resident', '=', 'people.id')
                .andOn('planet', '=', parseInt(planetId))
        })
        .then(data => {
            callback(null, data);
        })
        .catch(err => {
            callback(err, null);
        })
}

function deletePerson(id, callback) {
    knex.transaction(trx =>
            trx('residents')
            .where({ resident: id })
            .del()
            .then(() =>
                trx('people')
                .where({ id })
                .del()
            )
        )
        .then(data => callback(null, data))
        .catch(err => callback(err, null))
}

function insertPlanet(planet, callback) {
    knex.insert(planet)
        .into('planets')
        .then(data => {
            callback(null, data);
        })
        .catch(err => {
            callback(err, null);
        })
}

function updatePerson(id, callback) {
    knex.table('residents')
        .where({ resident: id })
        .update({ planet: 1 })
        .then(data => {
            callback(null, data);
        })
        .catch(err => {

            callback(err, null);
        })
}

module.exports = {
    getAll,
    getById,
    getByName,
    getResidents,
    deletePerson,
    updatePerson,
    insertPlanet
}