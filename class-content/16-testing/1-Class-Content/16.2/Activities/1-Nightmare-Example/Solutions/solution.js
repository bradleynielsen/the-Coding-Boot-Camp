'use strict';

var Nightmare = require('nightmare'),
    should = require('chai').should(),
    nightmare = Nightmare({ show: true });

// STORY: As a developer nerd, I want to be able to log in to a dashboard of workshops.
nightmare
  // Visit login page
  .goto('http://frontendmasters.com/login/')
  // Enter username 
  .type('#rcp_user_login', 'PelekeS') 
  // Enter password 
  .type('#rcp_user_pass', 'password')
  // Take a screenshot of the login form.
  .screenshot('login.png')
  // Click login button. Always check if you've done this where necesssary!
  //   It's easy to forget.
  .click('#rcp_login_submit')
  // Wait until the element containing videos I can select is rendered
  .wait('div.course-list-alt')
  // Scroll down a few hundred pixels.
  .scrollTo(500, 0)
  // Take a screenshot and save it to the current directory.
  .screenshot('workshops.png')
  // Make sure there's more than one video to choose from.
  .evaluate(function () {
     return document.querySelectorAll('div.course-list-item-alt').length;
  })
  // 
  .end()
  .then(function (workshops) { 
    workshops.should.be.above(1);
  })
