class Ship {
    constructor(Itinerary) {
        this.itinerary = Itinerary,
        this.currentPort = Itinerary.ports[0],
        this.previousPort = null
    }

    setSail() {
        const itinerary = this.itinerary 
        if (this.currentPort === itinerary.ports[itinerary.ports.length - 1]) {
            throw new Error('End of itinerary reached');
        } else {
            this.previousPort = this.currentPort,
            this.currentPort = null       
        }        
    }

    dock () {
        const itinerary = this.itinerary;
        const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
      
        this.currentPort = itinerary.ports[previousPortIndex + 1];
    }
}

//class notation 
module.exports = {
    Ship,
}