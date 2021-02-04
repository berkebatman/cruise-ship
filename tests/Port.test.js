const { Ship } = require("../Ship");
const { Port } = require("../Port");
const { Itinerary } = require("../Itinerary");

describe('tests', () => {
    let testShip;
    let girneLimani;
    let tasucuMersin;
    let akdenizTuru;

  beforeEach(() => {
    girneLimani = new Port('girneLimani');
    tasucuMersin = new Port('tasucuMersin');
    akdenizTuru = new Itinerary([girneLimani, tasucuMersin]);
    testShip = new Ship(akdenizTuru);
  });

describe('port constructor', () => {
    it('should create a new Port object', () => {
        expect(girneLimani).toBeInstanceOf(Object);
    });
});

describe('add ship to the port', () => {
    it('add ship to a port', () => {
        tasucuMersin.addShip(testShip)
        expect(tasucuMersin.ships).toContain(testShip);
    });
});

describe('remove ship', () => {
    it('remove ship from the port', () => {
        const port = new Port('Dover')
        const titanic = {}
        const queenMary = {}
        port.addShip(titanic)
        port.addShip(queenMary)
        port.removeShip(queenMary) 
        expect(port.ships).toEqual([titanic]);
    });
});

});
