var fs = require('fs')

/*
var reading = fs.readFileSync('learnyounode2.js');

var splits = reading.toString().split('\n');

console.log((splits.length - 1));

console.log(splits);

// check to see what the last element of the list is
console.log(splits[splits.length - 1]);
*/

function fileInfo(file_name) {
    var reading = fs.readFileSync(file_name);
    var splits = reading.toString().split('\n');
    if (splits[splits.length - 1] == '')
        return splits.length - 1;
    else
        return splits.length;
};

console.log(fileInfo('learnyounode2.js'));
