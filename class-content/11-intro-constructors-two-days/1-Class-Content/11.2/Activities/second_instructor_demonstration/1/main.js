var PartyBus = require('./party_bus.js');

var zbtPartyBus = new PartyBus();

//none
console.log('dudes?', zbtPartyBus.duds);

//a dudess enters the party bus
zbtPartyBus.addDud('female');

console.log('dudes?', zbtPartyBus.duds);
