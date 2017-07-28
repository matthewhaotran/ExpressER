const express = require('express');
const bodyParser = require('body-parser');
const patientRoute = require('./routes/patient.route');
const patientSymptomRoute = require('./routes/patientSymptom.route');
const doctorRoute = require('./routes/doctor.route');
const insuranceRoute = require('./routes/insurance.route');
const emergencyContactRoute = require('./routes/emergencyContact.route');
const patientAllergyRoute = require('./routes/patientAllergy.route');
const allergyInfoRoute = require('./routes/allergyInfo.route');
const symptomRoute = require('./routes/symptom.route');
const specialtyRoute = require('./routes/specialty.route');
const visitRoute = require('./routes/visit.route');
const twilioRoute = require('./routes/twilio.route');





const db = require('./models');

const app = express();

app.use(express.static(`${__dirname}/../dist`));
app.use(bodyParser.json());
app.use('/api', require('./api'));
app.use('/api/patient', patientRoute);
app.use('/api/patientSymptom', patientSymptomRoute);
app.use('/api/allergyInfo', allergyInfoRoute);
app.use('/api/symptom', symptomRoute);
app.use('/api/patientAllergy', patientAllergyRoute);
app.use('/api/doctor', doctorRoute);
app.use('/api/insurance', insuranceRoute);
app.use('/api/emergencyContact', emergencyContactRoute);
app.use('/api/specialty', specialtyRoute);
app.use('/api/visit', visitRoute);
app.use('/api/twilio', twilioRoute);

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/../dist/index.html`);
});

module.exports = app;
