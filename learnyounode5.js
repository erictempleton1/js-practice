var fs = require('fs');

//fs.readdir(process.argv[2], process.argv[3], folderReader);

fs.readdir('.', folderReader);

function folderReader(error, dirContents) {
    if (error)
        return console.error(error);
    else
        dirContents.forEach(folderReader);
};

