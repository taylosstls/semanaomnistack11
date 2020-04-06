const knex = require('knex');
const config = require('../../knexfile');

// configuracação.routa
const connection = knex(config.development);

module.exports = connection;