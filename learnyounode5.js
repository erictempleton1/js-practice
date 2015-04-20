var fs = require('fs');
var path = require('path');


fs.readdir(process.argv[2], function(error, files) {
    if (error)
        return console.error(error);
    else
        files.forEach(function(file) {
            if (path.extname(file) == '.' + process.argv[3])
                console.log(file);
        });
});

