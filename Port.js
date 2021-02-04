class Port {
    constructor(name){
        this.name = name,
        this.ships = []
    }

    addShip(ship) {
        this.ships.push(ship);
    }
    
    removeShip(ship) {
        const ships = this.ships;
        const indexOfShip = ships.indexOf(ship);
        
        
        this.ships = this.ships.slice(indexOfShip)
        
    }
}

module.exports = { 
    Port,
}