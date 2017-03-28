const express = require('express');

const app = express();
const port = process.env.PORT || 8000;

app.get('/colors', function (req, res) {
  res.json([
    '#7B1FA2',
    '#512DA8',
    '#0097A7',
    '#00796B',
    '#388E3C',
    '#FBC02D',
    '#F57C00'
  ]);
});

app.use(express.static(`${process.cwd()}/public`));

app.listen(port, function (err) {
  if (err) throw err;
  console.log(`Servidor corriendo en http://127.0.0.1:${port}`);
});
