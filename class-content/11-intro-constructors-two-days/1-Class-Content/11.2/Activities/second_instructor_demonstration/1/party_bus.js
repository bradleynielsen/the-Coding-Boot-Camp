var Dud = require('./dud.js');

var PartyBus = function(){
	this.duds = [];
	this.addDud = function(g){
		this.duds.push(new Dud(g));
	}
}

module.exports = PartyBus;