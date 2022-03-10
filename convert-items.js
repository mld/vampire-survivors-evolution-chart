const fs = require('fs');
const conversion = require('./conversion');

const OUT_PATH = './extracted-icons';

console.log("Converting icons.");
for (let icon in conversion) {
    let src = OUT_PATH + '/' + conversion[icon]["src"] + ".png";
    let dst = './img/' + conversion[icon]["dst"] + ".png";
    fs.copyFile(src, dst, function (err) {
        if (err) throw err;
        console.log("Copied " + src + ' to ' + dst);
    });
}
