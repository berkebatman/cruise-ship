
function Port (name) {
    this.name = name;
}

function Ship (portName) {
   this.currentPort = portName;
}

Ship.prototype.setSail = function () { 
    this.currentPort = 0 // falsy value
}

Ship.prototype.dock = function (port) { 
    this.currentPort = port;
}
let girneLimani = new Port('Girne Limani')
        let testShip = new Ship(girneLimani);
        console.log(testShip.currentPort.name)


module.exports = {
    Ship, 
    Port,
}