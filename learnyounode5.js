var fs = require('fs');

fs.readdir(process.argv[2], folderReader);

function folderReader(error, dirContents) {
    if (error)
        return console.error(error);
    else
        for (var i = 0; i < dirContents.length; i++) {
            //if (dirContents[i].slice(-3) == 'jpg')
            return console.log(dirContents[i]);
        };
};