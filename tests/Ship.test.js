const {Ship} = require("../Ship");

describe('ship constructor', () => {
    it('should create a ship object', () => {
        let testShip = new Ship('TEST');
        expect(testShip).toBeInstanceOf(Object);
    });

    it('the new ship created should have a starting port', () => {
        let testShip = new Ship('Girne');
        expect(testShip.startingPort).toBe('Girne');
    });
});

describe('sail setter', () => {
    it('should create a ship object', () => {
        let testShip = new Ship('TEST');
        testShip.setSail();
        expect(testShip.startingPort).toBeFalsy();
    });
});