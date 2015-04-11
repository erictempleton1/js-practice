var fs = require('fs')

var reading = fs.readFileSync(process.argv[2]);

var splits = reading.toString().split('\n');

console.log((splits.length - 1));
