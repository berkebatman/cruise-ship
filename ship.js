
function Port (name) {
    this.name = name;
}

function Ship (portName) {
   this.currentPort = portName;
}

Ship.prototype.setSail = function () { 
    this.currentPort = 0 // falsy value
}

Ship.prototype.dock = function (Port) { 
    this.currentPort = Port.name; 
}

// you will have a port and a ship should be able to dock to it

let girneLimani = new Port('Girne Limani')
let titanic = new Ship('Norway');
 titanic.setSail();
 console.log(titanic)
 titanic.dock(girneLimani)
 console.log(titanic)

module.exports = {
    Ship, 
    Port,
}