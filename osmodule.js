// visit to : https://nodejs.org/api/os.html#os

const os = require('node:os');

console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.platform());
console.log(os.release());
console.log(os.type());