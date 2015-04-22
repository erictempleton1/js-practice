var fs = require('fs');
var path = require('path');

module.exports = function(dir, filterStr, callback) {

    fs.readdir(process.argv[2], function(error, files) {
    if (error)
        return callback(error);
    
    list = list.filter(function (file) {
        return path.extname(file) == '.' + filterStr
        });

    callback(null, list)
});
}