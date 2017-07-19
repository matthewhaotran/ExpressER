const router = require('express').Router();
const db = require('../models');

router.get('/', function(request, response){
  //return all allergyInfos in the database
  var promise = db.AllergyInfo.findAll()

  promise.then(function(allergyInfos){
    response.json(allergyInfos);
  });
});

router.get('/:id', function(request,response){
  db.AllergyInfo.findById(request.params.id).then(function(allergyInfo){
    if (allergyInfo === null){
      response.sendStatus(404);
    } else{
      response.json(allergyInfo);
    }
  });
});

router.post('/', function(request, response){
  const allergyInfo = db.AllergyInfo.build(request.body);

  allergyInfo.save().then(function(newallergyInfo){

    response.status(201).send(newallergyInfo);
  });
});


router.put('/:id', function(request, response){

  db.AllergyInfo.findById(request.params.id).then(function(allergyInfo){
   allergyInfo.update(request.body).then(function(allergyInfo){
      if (allergyInfo === null){
      response.sendStatus(404);
    } else{
      response.status(204).json(allergyInfo);
    }
   });
  });


});

router.delete('/:id', function(request,response){
  db.AllergyInfo.findById(request.params.id).then(function(allergyInfo){
    allergyInfo.destroy().then(function(){
      response.json(allergyInfo);
    });
  });

});


module.exports = router;
