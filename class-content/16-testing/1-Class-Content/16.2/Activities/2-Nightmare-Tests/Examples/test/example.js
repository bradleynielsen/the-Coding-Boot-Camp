'use strict';

var Nightmare = require('nightmare');
var should = require('chai').should();


describe('Frontend Masters', function() {
  this.timeout(10000);
  it('should show form when loaded', function(done) {
    var nightmare = new Nightmare({
      show: true
    });
    nightmare
      .goto('https://frontendmasters.com/')
      .wait('a[href*="https://frontendmasters.com/login/"]')
      .click('a[href*="https://frontendmasters.com/login/"]')
      .wait('#rcp_user_login')
      .evaluate(function() {
        return document.title;
      })
      .end()
      .then(function(result) {
        result.should.equal('Login to Frontend Masters');
        done();
      })
      .catch(function(err) {
        console.error(err);
      });
  });

  it('should present multiple workshop choices after login', function(done) {
    var nightmare = new Nightmare({
      show: true
    });
    var login = '#menu-item-112';
    nightmare
      .goto('https://frontendmasters.com/')
      .wait('a[href*="https://frontendmasters.com/login/"]')
      .click('a[href*="https://frontendmasters.com/login/"]')
      .wait('#rcp_user_login')
      .type('#rcp_user_login', 'PelekeS')
      .type('#rcp_user_pass', 'password')
      .click('#rcp_login_submit')
      .wait('.course-list-item-alt')
      .evaluate(function() {
        return document.querySelectorAll('div.course-list-item-alt').length;
      })
      .end()
      .then(function(course_count) {
        course_count.should.be.above(1);
        done();
      })
      .catch(function(err) {
        console.error(err);
      });
  });

  it('should ', function () {
    throw new Error('Failed on purpose, just to make the Mocha output more interesting.');
  });
});
