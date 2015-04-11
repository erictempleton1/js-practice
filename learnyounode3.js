var fs = require('fs');

function fileInfo(file_name) {
    var reading = fs.readFileSync(file_name);
    var splits = reading.toString().split('\n');
    if (splits[splits.length - 1] == '')
        return splits.length - 1;
    else
        return splits.length;
};

console.log(fileInfo('learnyounode2.js'));
