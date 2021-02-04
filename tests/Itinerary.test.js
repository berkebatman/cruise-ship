const { Itinerary } = require("../Itinerary");
const { Port } = require("../Port");
const { Ship } = require("../Ship");

describe('tests', () => {
    let testShip;
    let girneLimani;
    let tasucuMersin;
    let akdenizTuru;

  beforeEach(() => {
    girneLimani = jest.fn();
    tasucuMersin = jest.fn();
    akdenizTuru = new Itinerary([girneLimani, tasucuMersin]);
    testShip = jest.fn();
  });


describe('Itinerary', () => {
   
    it('should create a new Itinerary object', () => {
    expect(akdenizTuru).toBeInstanceOf(Object);

});

    it('should check if Itinerary has ports', () => {
    expect(akdenizTuru.ports).toEqual([girneLimani, tasucuMersin]);
});
});
});
