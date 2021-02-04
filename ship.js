  class Ship {
    constructor(Itinerary) {
        this.itinerary = Itinerary,
        this.currentPort = Itinerary.ports[0],
        this.previousPort = null,
        this.currentPort.addShip(this)
    }

    setSail() {

        const itinerary = this.itinerary 
        if (this.currentPort === itinerary.ports[itinerary.ports.length - 1]) {
            throw new Error('End of itinerary reached');
        } else {
            this.previousPort = this.currentPort,
            this.currentPort = null       
        }        

        const port = this.previousPort
        const indexOfShip = port.ships.indexOf(this.previousPort)
        console.log(indexOfShip)
        console.log(port)
        this.previousPort.ships = this.previousPort.ships.slice(1)
        console.log(port)
    }

    dock () {
        const itinerary = this.itinerary;
        const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
      
        this.currentPort = itinerary.ports[previousPortIndex + 1];

        this.currentPort.addShip(this)  
       
             
    }
};

//class notation 
module.exports = {
    Ship,
};