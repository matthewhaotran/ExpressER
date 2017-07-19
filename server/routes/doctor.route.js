// REST ACTIONS performed on RESOURCES

const router = require('express').Router();
const db = require('../models');

//GET: /api/
router.get('/', function (req, res) {
  db.Doctor.findAll().then(function (doctors) {
    res.json(doctors);
  });
});

router.get('/:id', function (req, res) {
  db.Doctor.findById(req.params.id).then(function (doctor) {
    if (doctor === null) {
      res.sendStatus(404);
    } else {
      res.json(doctor);
    }
  });
});

//POST: /api/Doctors
router.post('/', function (req, res) {
  const newDoctor = new db.Doctor(req.body);

  newDoctor.save().then(function (doctor) {
    res.status(201).json(doctor);
  });
});

// UPDATE
router.put('/:id', function (req, res) {
  db.Doctor.findById(req.params.id).then(function (doctor) {
    doctor.update(req.body).then(function () {
      res.sendStatus(204);
    });
  });
}); 

// DELETE
router.delete('/:id', function (req, res) {
  db.Doctor.findById(req.params.id).then(function (doctor) {
    if (doctor === null) {
      res.sendStatus(404);
    } else {
      doctor.destroy().then(function () {
        res.json(doctor);
      });
    }
  });
});


module.exports = router;
