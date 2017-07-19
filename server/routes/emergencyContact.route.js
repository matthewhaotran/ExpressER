// REST ACTIONS performed on RESOURCES

const router = require('express').Router();
const db = require('../models');

//GET: /api/
router.get('/', function (req, res) {
  db.EmergencyContact.findAll().then(function (emergencyContacts) {
    res.json(emergencyContacts);
  });
});

router.get('/:id', function (req, res) {
  db.EmergencyContact.findById(req.params.id).then(function (emergencyContact) {
    if (emergencyContact === null) {
      res.sendStatus(404);
    } else {
      res.json(emergencyContact);
    }
  });
});

//POST: /api/patients
router.post('/', function (req, res) {
  const newEmergencyContact = new db.EmergencyContact(req.body);

  newEmergencyContact.save().then(function (emergencyContact) {
    res.status(201).json(emergencyContact);
  });
});

// UPDATE
router.put('/:id', function (req, res) {
  db.EmergencyContact.findById(req.params.id).then(function (emergencyContact) {
    emergencyContact.update(req.body).then(function () {
      res.sendStatus(204);
    });
  });
}); 

// DELETE
router.delete('/:id', function (req, res) {
  db.EmergencyContact.findById(req.params.id).then(function (emergencyContact) {
    if (emergencyContact === null) {
      res.sendStatus(404);
    } else {
      emergencyContact.destroy().then(function () {
        res.json(emergencyContact);
      });
    }
  });
});


module.exports = router;

