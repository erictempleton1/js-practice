var fs = require('fs');

fs.readdir(process.argv[2], process.argv[3], folderReader);

function folderReader(error, dirContents) {
    if (error)
        return console.error(error);
    else
        for (var i = 0; i < dirContents.length; i++) {
            if (dirContents.slice(-process.argv[3].length) == process.argv[3])
              return console.log(dirContents);
        };
};