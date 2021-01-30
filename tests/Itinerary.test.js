const { Itinerary } = require("../Itinerary");
const { Port } = require("../Port");

describe('Itinerary', () => {
    it('should create a new Itinerary object', () => {
    let girneLimani = new Port('Girne Limani');
    let tasucuMersin = new Port('Mersin Tasucu')
    let akdenizTuru = new Itinerary([girneLimani, tasucuMersin]);
    expect(akdenizTuru).toBeInstanceOf(Object);

})

    it('should check if Itinerary has ports', () => {
    let girneLimani = new Port('Girne Limani');
    let tasucuMersin = new Port('Mersin Tasucu')
    let akdenizTuru = new Itinerary([girneLimani, tasucuMersin])
    expect(akdenizTuru.ports).toEqual([girneLimani, tasucuMersin]);
    
})
});
