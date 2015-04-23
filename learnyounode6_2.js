var filterFn = require('./learnyounode6_1.js');
var dir = process.argv[2];
var filterStr = process.argv[3];

filterFn(dir, filterStr, function(error, list) {
    if (error)
        return console.error('an error occured:', error)

    list.forEach(function, file) {
        console.log(file)
    });
});