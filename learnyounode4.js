var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', readAsynco);

function readAsynco(error, jsContents) {
    if (error)
        return console.error(error);
    else
        var splits = jsContents.split('\n');
        return console.log(splits.length - 1);
};
