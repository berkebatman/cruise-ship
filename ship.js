
// refactor this
// function Ship (itenerary) {
//    this.previousPort = null,
//    this.currentPort = itenerary
// }

// Ship.prototype.setSail = function () { 
//     this.previousPort = this.currentPort // falsy value
// }

// Ship.prototype.dock = function (port) { 
//     this.currentPort = port;
// }


class Ship {
    constructor(itenerary) {
        this.previousPort = null,
        this.currentPort = itenerary
    }

    setSail() {
        this.previousPort = this.currentPort    
    }

    dock(port) {
        this.currentPort = port
    }
}

// class notation 

module.exports = {
    Ship, 
}