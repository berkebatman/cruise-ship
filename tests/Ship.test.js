const { Ship } = require("../Ship");
const { Port } = require("../Port");
const { Itinerary } = require("../Itinerary");

// test port is 'Girne Limani'
// beforeEach 
describe('ship constructor', () => {
    it('should create a ship object', () => {
        let testPort = new Port('Girne Limani')
        let testShip = new Ship(testPort);
        expect(testShip).toBeInstanceOf(Object);
    });

    it('the new ship created should have a starting port', () => {
        let testPort = new Port('Girne Limani')
        let testShip = new Ship(testPort);
        expect(testShip.currentPort).toBe(testPort);
        expect(testShip.currentPort.name).toBe('Girne Limani');
    });
});

describe('sail setter', () => {
    it('should create a ship object', () => {
        let testPort = new Port('Girne Limani')
        let testShip = new Ship(testPort);
        testShip.setSail();
        expect(testShip.previousPort).toBe(testPort); // expected behaviour is that
        // the setSail() function will set the currenPort = 0)
    });
});

describe('ship should dock at a different port', () => {
    it('should create a ship object, checks the port object', () => {
        let girneLimani = new Port ('Girne Limani')
        let testShip = new Ship(girneLimani);
        let mersinLimani = new Port('Tasucu')
        testShip.dock(mersinLimani);    
        expect(testShip.currentPort).toBe(mersinLimani);
    });
});