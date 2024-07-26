const os = require('os');

console.log("Total Memory:", os.totalmem());
console.log("Free Momory:", os.freemem());
console.log("OS Platform:", os.platform());
console.log("Number of CPU cores:", os.cpus().length);
