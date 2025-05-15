const sql = require('mssql');
require('dotenv').config();

const config = {
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  server: process.env.SQL_SERVER,
  database: process.env.SQL_DATABASE,
  options: {
    encrypt: process.env.SQL_ENCRYPT === 'true',
    trustServerCertificate: false
  }
};

const pool = new sql.ConnectionPool(config);
const poolConnect = pool.connect();

module.exports = {
  sql,
  poolConnect,
  pool
};