const sharp = require("sharp");
const fs = require('fs');
const lib = require('./lib');

async function cropImage(source, destination, position) {
    try {
        await sharp(source)
            .extract({width: position.w, height: position.h, left: position.x, top: position.y})
            .toFile(destination);
    } catch (error) {
        console.log(error);
    }
}

// Get VS Assets path
const VS_ASSETS_IMG = (process.env.VS_ASSETS_IMG || '.').split(/\ /).join('\ ');
const BASE_PATH = (VS_ASSETS_IMG.endsWith('/') ? VS_ASSETS_IMG.slice(0, -1) : VS_ASSETS_IMG);

const resources = lib.extract_resources;

console.log('Base path: ' + BASE_PATH);

if (!fs.existsSync(BASE_PATH)) {
    console.log(BASE_PATH + " doesn't exist!");
    process.exit(1);
}

console.log("Extracting icons.");
for (let set in resources) {
    const json = BASE_PATH + '/' + resources[set] + ".json";
    const png = BASE_PATH + '/' + resources[set] + ".png";
    const out = lib.extracted_icons + '/' + resources[set];

    if (!fs.existsSync(json) || !fs.existsSync(png)) {
        console.log("UI.json or UI.png are missing from " + BASE_PATH);
        process.exit(1);
    }

    if (!fs.existsSync(out)) {
        console.log("mkdir " + out)
        fs.mkdirSync(out, {recursive: true});
    }

    let raw = fs.readFileSync(json).toString();
    const parsed = JSON.parse(raw);
    for (let icon in parsed["textures"][0]["frames"]) {
        let filename = parsed["textures"][0]["frames"][icon]["filename"];
        let position = parsed["textures"][0]["frames"][icon]["frame"];
        cropImage(png, out + '/' + filename, position);
        console.log(filename + ' extracted');
    }
}
