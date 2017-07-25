// REST ACTIONS performed on RESOURCES

const router = require('express').Router();
const db = require('../models');

//GET: /api/
router.get('/', function (req, res) {
  db.Patient.findAll().then(function (patients) {
    res.json(patients);
  });
});

router.get('/:id', function (req, res) {
  db.Patient.findById(req.params.id).then(function (patient) {
    if (patient === null) {
      res.sendStatus(404);
    } else {
      res.json(patient);
    }
  });
});

//Get Emergency Contacts by patientId
router.get('/:id/emergencyContact', function (req, res) {
  db.EmergencyContact.findAll({
    where: {
      patientId: req.params.id
    }
  }).then(function (emergencyContacts) {
    if (emergencyContacts === null) {
      res.sendStatus(404);
    } else {
      res.json(emergencyContacts);
    }
  });
});

//POST: /api/patients
router.post('/', function (req, res) {
  const newPatient = new db.Patient(req.body);

  newPatient.save().then(function (patient) {
    res.status(201).json(patient);
  });
});

// UPDATE
router.put('/:id', function (req, res) {
  db.Patient.findById(req.params.id).then(function (patient) {
    patient.update(req.body).then(function (patient) {
      res.json(patient);
    });
  });
});

// DELETE
router.delete('/:id', function (req, res) {
  db.Patient.findById(req.params.id).then(function (patient) {
    if (patient === null) {
      res.sendStatus(404);
    } else {
      patient.destroy().then(function () {
        res.status(204).json(patient);
      });
    }
  });
});


module.exports = router;
