const router = require('express').Router();
const db = require('../models');

//GET: /api/patientSymptoms
router.get('/', function (req, res) {
    db.PatientSymptom
        .findAll()
        .then(function (patientSymptoms) {
            res.json(patientSymptoms);
        });
});

router.get('/:id', function (req, res) {
    db.PatientSymptom.findById(req.params.id).then(function (patientSymptom) {
        if (patientSymptom === null) {
            res.sendStatus(404);
        } else {
            res.json(patientSymptom);
        }
    });
});

router.get('/:id/patientSymptom', function (req, res) {
    db.PatientSymptom.findAll({
        where: {
            visitId: req.params.id
        }
    }).then(function (patientSymptoms) {
        if (patientSymptoms === null) {
            res.sendStatus(404);
        } else {
            res.json(patientSymptoms);
        }
    });
});

//POST: /api/patientSymptoms
router.post('/', function (req, res) {
    const patientSymptom = db.PatientSymptom.build(req.body);

    patientSymptom.save().then(function (newPatientSymptom) {
        res.status(201).json(newPatientSymptom);
    });
});

// UPDATE
router.put('/:id', function (req, res) {
    db.PatientSymptom.findById(req.params.id).then(function (PatientSymptom) {
        PatientSymptom.update(req.body).then(function () {
            res.sendStatus(204);
        });
    });
});

// DELETE
router.delete('/:id', function (req, res) {
    db.PatientSymptom.findById(req.params.id).then(function (patientSymptom) {
        if (patientSymptom === null) {
            res.sendStatus(404);
        } else {
            patientSymptom.destroy().then(function () {
                res.json(patientSymptom);
            });
        }
    });
});


module.exports = router;
