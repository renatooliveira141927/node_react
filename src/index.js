const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());//lê o json e converte em obj javascript
app.use(routes);

app.listen(3333);

