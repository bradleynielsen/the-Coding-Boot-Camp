'use strict';

var Nightmare = require('nightmare'),
    should = require('chai').should();

describe('Frontend Masters', function () {

  var login = '#menu-item-112';
  
  it('should require me to login', function () {
    // ID for the login button.

    Nightmare({ show : true })
      .goto('https://frontendmasters.com/')
      // Just to be safe.
      .wait(login)
      // Click the login button.
      .click(login)
      // Assert the title is as expected.
      .evaluate(function () { 
        document.title.should.equal('Login to Frontend Masters');
      });
  });

  it('should present multiple workshop choices after login', function () {

    Nightmare()
      .goto('https://frontendmasters.com/')
      // Just to be safe.
      .wait(login)
      // Click the login button.
      .click(login)
      // Assert the title is as expected.
      .evaluate(function () { 
        document.title.should.equal('Login to Frontend Masters');
      })
      // Actually log in
      .type('#rcp_user_login', 'PelekeS')
      .type('#rcp_user_pass', 'password')
      .click('#rcp_login_submit')
      // Make sure there are multiple courses
      .evaluate(function () {
        return document.querySelectorAll('div.course-list-item-alt');
      })
      .then(function (course_count) {
        course_count.should.be.above(1)
      });
  });

  it('should ', function () {
    throw new Error('Failed on purpose, just to make the Mocha output more interesting.');
  });

});
