const fs = require('fs');
const lib = require('./lib');
const Mustache = require('mustache');

fs.readFile('./templates/index.html.mustache', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const template = data.toString();

    const output = Mustache.render(template, lib);

    fs.writeFile('./index.html', output, err => {
        if (err) {
            console.error(err);
        }
    });
});


