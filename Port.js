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
        this.ships = this.ships.filter(dockedShip => dockedShip !== ship);
    }
}

xxx


module.exports = { 
    Port,
}