var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var data = require('./data');

var app = express();
var port = 8777;

app.use(cors());
app.use(bodyParser.json());

app.get('/packages', (req, res, next) => {
  res.send(data.toDos)
});

app.post('/packages', (req, res) => {
  data.toDos.push(req.body);
  res.send(data.toDos);
});

app.delete('/packages/:index', (req, res) => {
  data.toDos.splice(req.params.index, 1);
  res.send(data.toDos);
});

app.listen(port, () => {
  console.log('listening on port', port)
});
