const router = require('express').Router();
const db = require('../models');

router.get('/', function (request, response) {
  //return all visits in the database
  var promise = db.Visit.findAll({
    include: [{
      model: db.Patient,
      as: 'patient'
    }, {
      model: db.PatientSymptom,
      as: 'patientSymptoms',
      include:[{
        model: db.Symptom,
        as: 'symptom'
      }]
    }, {
      model: db.Doctor,
      as: 'doctor'
    }]
  })
  promise.then(function (visits) {
    response.json(visits);
  });
});

router.get ('/:id', function (request, response) {
  db.Visit
  .findById(request.params.id, {
    include: [{
      model:db.Patient,
      as: 'patient',
      include: [{
        model: db.EmergencyContact,
        as: 'emergencyContacts'
      }, {
        model: db.Insurance,
        as: 'insurances'
      }]
    }, {
      model: db.PatientSymptom,
      as: 'patientSymptoms',
      include : [{
        model: db.Symptom,
        as: 'symptom'
      }]
    }]
  })
  .then(function(visit){
    if (visit === null) {
      response.sendStatus(404);
    } else {
      response.json(visit);
    }
  });
});
// router.get('/:id', function (request, response) {
//   db.Visit.findById(request.params.id).then(function (visit) {
//     if (visit === null) {
//       response.sendStatus(404);
//     } else {
//       response.json(visit);
//     }
//   });
// });

//Get visit by patientId
router.get('/:id/patient', function (req, res) {
  db.Visit.findAll({
    where: {
      patientId: req.params.id
    }
  }).then(function (visit) {
    if (visit === null) {
      res.sendStatus(404);
    } else {
      res.json(visit);
    }
  });
});

router.post('/', function (request, response) {
  const visit = db.Visit.build(request.body);

  visit.save().then(function (newvisit) {

    response.status(201).send(newvisit);
  });
});


router.put('/:id', function (request, response) {

  db.Visit.findById(request.params.id).then(function (visit) {
    visit.update(request.body).then(function (visit) {
      if (visit === null) {
        response.sendStatus(404);
      } else {
       response.json(visit);
      }
    });
  });


});

router.delete('/:id', function (request, response) {
  db.Visit.findById(request.params.id).then(function (visit) {
    visit.destroy().then(function () {
      // response.sendStatus(204).json(visit);
      response.status(204).json(visit);
    });
  });

});


module.exports = router;
