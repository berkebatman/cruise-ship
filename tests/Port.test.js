const { Port } = require("../Port");

describe('Port', () => {
    it('should create a new Port object', () => {
        let testPort = new Port('Mallorca');
        expect(testPort).toBeInstanceOf(Object);
    });

    it('should create a new Port object', () => {
        let testPort = new Port('Mallorca');
        expect(testPort.name).toBe('Mallorca');
    });
});