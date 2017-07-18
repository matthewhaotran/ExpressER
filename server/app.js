const express = require('express');
const bodyParser = require('body-parser');
const patientRoute = require('./routes/patient.route');

const db = require('./models');

const app = express();

app.use(express.static(`${__dirname}/../dist`));
app.use(bodyParser.json());
app.use('/api', require('./api'));
app.use('/api/patient', patientRoute);

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/../dist/index.html`);
});

module.exports = app;
