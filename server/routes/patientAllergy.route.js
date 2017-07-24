const router = require('express').Router();
const db = require('../models');

router.get('/', function (req, res) {
  db.PatientAllergy.findAll().then(function (patientAllergy) {
    res.json(patientAllergy);
  })
});

router.get('/:id/', function (req, res) {
  db.PatientAllergy.findById(req.params.id).then(function (patientAllergy) {
    if (patientAllergy === null) {
      res.sendStatus(404);
    } else {
      res.json(patientAllergy);
    }
  });
});

router.post('/', function (req, res) {
  const patientAllergy = db.PatientAllergy.build(req.body);

  patientAllergy.save().then(function (newPatientAllergy) {
    res.status(201).json(newPatientAllergy);
  });
});

router.put('/:id', function (req, res) {
  db.PatientAllergy.findById(req.params.id).then(function (patientAllergy) {
    patientAllergy.update(req.body).then(function () {
      res.sendStatus(204);
    });
  });
});

router.delete('/:id', function (req, res) {
  db.PatientAllergy.findById(req.params.id).then(function (patientAllergy) {
    if (patientAllergy === null) {
      res.sendStatus(404);
    } else {
    patientAllergy.destroy().then(function () {
      res.sendStatus(204);
    });
    }
  });
});




module.exports = router;
