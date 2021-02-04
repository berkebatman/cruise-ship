const { Ship } = require("./Ship");
const { Itinerary } = require("./Itinerary");

class Port {
    constructor(name){
        this.name = name,
        this.ships = []
    }

    addShip(ship) {
        this.ships.push(ship);
    }
    
    removeShip(ship) {
       const indexOfShip1 = this.ships.indexOf(ship);
       
        this.ships = this.ships.slice(1)
        
    }
}


module.exports = { 
    Port,
}