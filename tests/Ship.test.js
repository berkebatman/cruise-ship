const { Ship } = require("../Ship");
const { Port } = require("../Port");
const { Itinerary } = require("../Itinerary");

// test port is 'Girne Limani'
// beforeEach
describe('tests', () => {
    let testShip;
    let girneLimani;
    let tasucuMersin;
    let akdenizTuru;

  beforeEach(() => {
    girneLimani = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: 'girnelmani',
        ships: []
      };
    
      tasucuMersin = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: 'tasucuMersin',
        ships: []
      };

    akdenizTuru = {
        ports: [girneLimani, tasucuMersin]
    }

    testShip = new Ship(akdenizTuru);
  });


describe('ship constructor', () => {

    it('should create a ship object', () => {
        expect(testShip).toBeInstanceOf(Object);
    });

    it('the new ship created should have current/previous ports', () => {
        expect(testShip.currentPort).toBe(akdenizTuru.ports[0]);
        expect(testShip.previousPort).toBe(null);
    });

    it('the new ship created should get added to the port', () => {
        expect(girneLimani.addShip).toHaveBeenCalledWith(testShip);
    });

});

describe('sail setter', () => {

    it('can set sail', () => {
        testShip.setSail();
        expect(testShip.previousPort).toBe(girneLimani); 
        expect(testShip.currentPort).toBeFalsy();
        expect(girneLimani.ships).not.toContain(testShip);
    });

});

describe('ship should dock at a different port', () => {

    it('should dock at the next port in the itinerary', () => {
        testShip.setSail();
        testShip.dock();  
        expect(testShip.currentPort).toEqual(tasucuMersin);
        expect(tasucuMersin.addShip).toHaveBeenCalledWith(testShip);
    });

});

describe('Ship should not sail more than no of itineraries, edge case test', () => {

    it('should thow an error when sailed from final destination', () => {
        testShip.setSail();
        testShip.dock();  
        expect(() => testShip.setSail()).toThrowError('End of itinerary reached');
    });

});

});