
function Ship (startPort) {
   this.startingPort = startPort;
}

Ship.prototype.setSail = function () { 
    this.startingPort = 0// falsy value
}


// let titanic = new Ship('Norway');
// titanic.setSail();
// console.log(titanic);

module.exports = {
    Ship,
}