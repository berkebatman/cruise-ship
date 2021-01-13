const {Ship, Port} = require("../Ship");

describe('ship constructor', () => {
    it('should create a ship object', () => {
        let testShip = new Ship('TEST');
        expect(testShip).toBeInstanceOf(Object);
    });

    it('the new ship created should have a starting port', () => {
        let testShip = new Ship('Girne');
        expect(testShip.currentPort).toBe('Girne');
    });
});

describe('sail setter', () => {
    it('should create a ship object', () => {
        let testShip = new Ship('TEST');
        testShip.setSail();
        expect(testShip.startingPort).toBeFalsy();
    });
});

describe('ship should dock to a new port', () => {
    it('should create a ship object', () => {
        let testShip = new Ship('TEST');
        let girneLimani = new Port('Girne');
        testShip.dock(girneLimani);
        expect(testShip.currentPort).toBe('Girne');
    });
});