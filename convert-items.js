const fs = require('fs');
const lib = require('./lib');

console.log("Converting icons.");
for (let icon in lib.icons) {
    let src = lib.extracted_icons + '/' + lib.icons[icon]["src"] + ".png";
    let dst = './img/' + lib.icons[icon]["dst"] + ".png";
    fs.stat(dst, function (err, stat) {
        if (err == null) {
            console.log('Skipping ' + src + ' because ' + dst + ' already exists.');
        } else if (err.code === 'ENOENT') {
            fs.copyFile(src, dst, function (err) {
                if (err) throw err;
                console.log("Copied " + src + ' to ' + dst);
            });
        } else {
            console.log('Unhandled error: ', err.code);
        }
    });
}