const router = require('express').Router();
const db = require('../models');

router.get('/', function(request, response){
  //return all symptoms in the database
  var promise = db.Symptom.findAll()

  promise.then(function(symptoms){
    response.json(symptoms);
  });
});

router.get('/:id', function(request,response){
  db.Symptom.findById(request.params.id).then(function(symptom){
    if (symptom === null){
      response.sendStatus(404);
    } else{
      response.json(symptom);
    }
  });
});

router.post('/', function(request, response){
  console.log(request);
  const symptom = db.Symptom.build(request.body);

  symptom.save().then(function(newsymptom){

    response.status(201).send(newsymptom);
  });
});


router.put('/:id', function(request, response){

  db.Symptom.findById(request.params.id).then(function(symptom){
   symptom.update(request.body).then(function(symptom){
      if (symptom === null){
      response.sendStatus(404);
    } else{
  response.status(204).json(symptom);
    }
   });
  });


});

router.delete('/:id', function(request,response){
  db.Symptom.findById(request.params.id).then(function(symptom){
    symptom.destroy().then(function(){
      response.json(symptom);
    });
  });

});


module.exports = router;
