const {Ship, Port} = require("../Ship");

describe('ship constructor', () => {
    it('should create a ship object', () => {
        let girneLimani = new Port('Girne Limani')
        let testShip = new Ship(girneLimani);
        expect(testShip).toBeInstanceOf(Object);
    });

    it('the new ship created should have a starting port', () => {
        let testPort = new Port('Girne Limani')
        let testShip = new Ship(testPort);
        expect(testShip.currentPort).toBe(testPort);
    });
});

describe('sail setter', () => {
    it('should create a ship object', () => {
        let testPort = new Port('Girne Limani')
        let testShip = new Ship(testPort);
        testShip.setSail();
        expect(testShip.currentPort).toBeFalsy(); // expected behaviour is that
        // the setSail() function will set the currenPort = 0)
    });
});

describe('ship should dock to a new port', () => {
    it('should create a ship object, checks the port object', () => {
        let testShip = new Ship('TEST');
        let testPort = new Port('Girne Limani')
        testShip.dock(testPort);
        expect(testShip.currentPort).toBe(testPort);
    });

    it('should create a ship object, checks the name of the port', () => {
        let testShip = new Ship('TEST');
        let testPort = new Port('Girne Limani')
        testShip.dock(testPort);
        expect(testShip.currentPort.name).toBe('Girne Limani');
    });

});