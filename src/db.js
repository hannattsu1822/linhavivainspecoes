const { Pool } = require('pg');

const pool = new Pool({
  user: 'root',
  host: 'mysql.railway.internal',
  database: 'railway',
  password: 'pcTrgHmsQdhEjQPPMEUpfSeXkmPLdJHi',
  port: 33006,
});

module.exports = pool;
