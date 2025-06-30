console.log("Hello World!");
//Here there is no window object hence using global

// console.log(global);

//Type node space file name to run the file

const os = require('os');
const path = require('path');
const math = require('./math');
// or as an Alternative 
const {add, sub, mul, div} = require('./math');

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
//Actually used in Real Time Projects
console.log(path.parse(__filename));

// Got Imported from another module
console.log(math.add(3,3));
console.log(math.mul(3,3));
console.log(math.sub(3,3));
console.log(math.div(3,3));

// Got Imported from another module
console.log(add(3,3));
console.log(mul(3,3));
console.log(sub(3,3));
console.log(div(3,3));