// this is the cats_controller.js file

var models  = require('../models');
var express = require('express');
var router  = express.Router();


router.get('/', function(req, res) {

  // TODO:
  // =====
  // use the Cat model to find all cats,
  // and use the include option to grab info from the User model.
  // This will let us show the cat and it's owner.


  // connect that to this .then
  .then(function(cats) {
    res.render('cats/index', {
      user_id: req.session.user_id,
      email: req.session.user_email,
      logged_in: req.session.logged_in,
      cats: cats
    })
  })
});

router.post('/create', function (req, res) {

  // TODO:
  // =====
  // use the Cat model to create a cat based on what's
  // passed in req.body (name, sleepy, user_id)


  // connect that to this .then
  .then(function() {
    res.redirect('/');
  })
});

router.put('/update/:id', function(req,res) {

  // TODO:
  // =====
  // use the Cat model to update a cat's sleepy status
  // based on the boolean passed in req.body sleepy
  // and the id of the cat (as passed in the url)


  // connect that to this .then.
  .then(function (result) {
    res.redirect('/');
  })
});


router.delete('/delete/:id', function(req,res) {
  
  // TODO:
  // =====
  // use the Cat model to delete a cat
  // based on the id passed in the url


  // connect that to this .then.
  .then(function() {
    res.redirect('/');
  });
});


module.exports = router;
