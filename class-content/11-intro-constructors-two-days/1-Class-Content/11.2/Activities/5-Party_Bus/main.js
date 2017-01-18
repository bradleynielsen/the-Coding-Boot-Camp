var PartyBus = require('./party_bus.js');

//fun fact: Beersville is a real city in PA!!!
var zbtPartyBus = new PartyBus('Cosmo', 'NYC', 'Beersville, PA');

//none
console.log('dudes?', zbtPartyBus.duds);

zbtPartyBus.addDud('female', 'Moon', 10);

console.log('dudes?', zbtPartyBus.duds);

zbtPartyBus.addDud('male', 'Breaker', 10);
zbtPartyBus.addDud('female', 'Pine', 8);
zbtPartyBus.addDud('male', 'Chance', 9);
zbtPartyBus.addDud('male', 'West', 4);
zbtPartyBus.addDud('female', 'Honor', 6);

console.log('dudes?', zbtPartyBus.duds);
