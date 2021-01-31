const { Ship } = require("../Ship");
const { Port } = require("../Port");
const { Itinerary } = require("../Itinerary");

// test port is 'Girne Limani'
// beforeEach 
describe('ship constructor', () => {

    it('should create a ship object', () => {
        let girneLimani = new Port('girneLimani');
        let tasucuMersin = new Port('tasucuMersin');
        let akdenizTuru = new Itinerary([girneLimani, tasucuMersin]);
        let testShip = new Ship(akdenizTuru);
        expect(testShip).toBeInstanceOf(Object);
    });

    it('the new ship created should have current/previous ports', () => {
        let girneLimani = new Port('girneLimani');
        let tasucuMersin = new Port('tasucuMersin');
        let akdenizTuru = new Itinerary([girneLimani, tasucuMersin]);
        let testShip = new Ship(akdenizTuru);
        expect(testShip.currentPort).toBe(akdenizTuru.ports[0]);
        expect(testShip.previousPort).toBe(null);
    });

});

describe('sail setter', () => {

    it('can set sail', () => {
        let tasucuMersin = new Port('tasucuMersin');
        let girneLimani = new Port('girneLimani');
        let akdenizTuru = new Itinerary([girneLimani, tasucuMersin]);
        let testShip = new Ship(akdenizTuru);
        testShip.setSail();
        expect(testShip.previousPort).toBe(girneLimani); // expected behaviour is that
        // the setSail() function will set the currenPort = 0)
        expect(testShip.currentPort).toBeFalsy();
    });

});

describe('ship should dock at a different port', () => {

    it('should dock at the next port in the itinerary', () => {
        let tasucuMersin = new Port('tasucuMersin');
        let girneLimani = new Port('girneLimani');
        let akdenizTuru = new Itinerary([girneLimani, tasucuMersin]);
        let testShip = new Ship(akdenizTuru);
        testShip.setSail();
        testShip.dock();  
        expect(testShip.currentPort).toEqual(tasucuMersin);
    });

});

describe('Ship should not sail more than no of itineraries, edge case test', () => {

    it('should thow an error when sailed from final destination', () => {
        let tasucuMersin = new Port('tasucuMersin');
        let girneLimani = new Port('girneLimani');
        let akdenizTuru = new Itinerary([girneLimani, tasucuMersin]);
        let testShip = new Ship(akdenizTuru);
        testShip.setSail();
        testShip.dock();  
        console.log(testShip)
        expect(() => testShip.setSail()).toThrowError('End of itinerary reached');
    });

});