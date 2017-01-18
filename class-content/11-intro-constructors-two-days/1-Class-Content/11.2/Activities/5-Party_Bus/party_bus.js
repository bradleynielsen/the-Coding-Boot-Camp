var Dud = require('./dud.js');

var PartyBus = function(driverName, startLocation, destination){
	this.duds = [];
	this.driverName = driverName;
	this.startLocation = startLocation;
	this.destination = destination;
	this.addDud = function(g, n, r){
		this.duds.push(new Dud(g, n, r));
	}
}

module.exports = PartyBus;