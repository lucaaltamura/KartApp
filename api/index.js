const express = require('express');
require('dotenv').config();
const { sql, poolConnect, pool } = require('./db');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/clienti', async (req, res) => {
  await poolConnect;
  try {
    const result = await pool.request().query('SELECT * FROM Clienti');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});