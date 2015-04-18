var fs = require('fs');
var path = require('path');


fs.readdir('.', function(error, files) {
    if (error)
        return console.error(error);
    files.forEach(function(file) {
        console.log(path.extname(file));
    })
})

