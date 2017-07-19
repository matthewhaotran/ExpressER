// REST ACTIONS performed on RESOURCES

const router = require('express').Router();
const db = require('../models');

//GET: /api/
router.get('/', function (req, res) {
 db.Specialty.findAll().then(function (specialtys) {
   res.json(specialtys);
 });
});

router.get('/:id', function (req, res) {
 db.Specialty.findById(req.params.id).then(function (specialty) {
   if (specialty === null) {
     res.sendStatus(404);
   } else {
     res.json(specialty);
   }
 });
});

//POST: /api/specialtys
router.post('/', function (req, res) {
 const newSpecialty = new db.Specialty(req.body);

 newSpecialty.save().then(function (specialty) {
   res.status(201).json(specialty);
 });
});

// UPDATE
router.put('/:id', function (req, res) {
 db.Specialty.findById(req.params.id).then(function (specialty) {
   specialty.update(req.body).then(function () {
     res.sendStatus(204);
   });
 });
});

// DELETE
router.delete('/:id', function (req, res) {
 db.Specialty.findById(req.params.id).then(function (specialty) {
   if (specialty === null) {
     res.sendStatus(404);
   } else {
     specialty.destroy().then(function () {
       res.json(specialty);
     });
   }
 });
});


module.exports = router;
