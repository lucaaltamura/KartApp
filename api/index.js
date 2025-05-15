const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/ping', (req, res) => {
  res.send('Pong!');
});

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});