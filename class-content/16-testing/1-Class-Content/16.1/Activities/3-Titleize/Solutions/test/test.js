'use strict';

var should = require('chai').should(),
  titleize = require('../titleize.js');

describe('Titleize', function () {
  it('should capitalize initial letter of each word in input', function () {
    titleize('seth godin').should.equal('Seth Godin');
  });

  it('should append period to leading titles', function () {
    titleize('dr zhivago').should.equal('Dr. Zhivago');
  });

  it('should not change properly cased strings', function () {
    titleize('Mr. Alexander Pushkin').should.equal('Mr. Alexander Pushkin');
  });

  it('should add periods to properly capitalied titles', function () {
    titleize('Mr Alexander Pushkin').should.equal('Mr. Alexander Pushkin');
  });

  it('should properly case mixed case strings', function () {
    titleize('Mr AlEXANDER PushKIn').should.equal('Mr. Alexander Pushkin');
  })
});
