const router = require('express').Router();
const db = require('../models');

router.get('/', function(req, res) {
    db.Insurance.findAll().then(function(insurances) {
        res.json(insurances);
    });
});

router.get('/:id', function(req, res) {
    db.Insurance.findById(req.params.id).then(function(insurance) {
        if(insurance){
            res.json(insurance);
        } else {
            res.sendStatus(404)
        }
    });
});

router.post('/', function(req, res) {
    const insurance = db.Insurance.build(req.body);

    insurance.save().then(function(newInsurance) {
        res.status(201).json(insurance);
    });
});

router.put('/:id', function(req, res) {
    db.Insurance.findById(req.params.id).then(function(insurance) {
        insurance.update(req.body).then(function() {
            res.sendStatus(204);
        });
    });
});

router.delete('/:id', function(req, res) {
    db.Insurance.findById(req.params.id).then(function(insurance) {
        insurance.destroy().then(function() {
            res.sendStatus(200);
        });
    });
});

module.exports = router;
