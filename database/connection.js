var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      user : 'kevin',
      password : '12345',
      database : 'apiusers'
    }
  });

module.exports = knex  