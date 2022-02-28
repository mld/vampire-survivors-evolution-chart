const sharp = require("sharp");
const fs = require('fs');

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
const OUT_PATH = './extracted-icons';
const resources = [
    "items",
    "UI"
];
const conversion = [
    {src: "UI/frameB", dst: "bg"},

    {src: "items/Whip", dst: "Whip"},
    {src: "items/HeartBlack", dst: "HollowHeart"},
    {src: "items/Whip2", dst: "BloodyTear"},

    {src: "items/Cross", dst: "Cross"},
    {src: "items/Clover", dst: "Clover"},
    {src: "items/HeavenSword", dst: "HeavenSword"},

    {src: "items/Axe", dst: "Axe"},
    {src: "items/Candelabra", dst: "Candelabrador"},
    {src: "items/Scythe", dst: "DeathSpiral"},

    {src: "items/Knife", dst: "Knife"},
    {src: "items/Gauntlet", dst: "Bracer"},
    {src: "items/Knife2", dst: "ThousandEdge"},

    {src: "items/WandFire", dst: "FireWand"},
    {src: "items/Leaf", dst: "Spinach"},
    {src: "items/Hellfire", dst: "Hellfire"},

    {src: "items/WandHoly", dst: "MagicWand"},
    {src: "items/Book2", dst: "EmptyTome"},
    {src: "items/WandHoly2", dst: "HolyWand"},

    {src: "items/Garlic", dst: "Garlic"},
    {src: "items/HeartRuby", dst: "Pummarola"},
    {src: "items/OrbOrange", dst: "SoulEater"},

    {src: "items/Silf1", dst: "Peachone"},
    {src: "items/Silf2", dst: "EbonyWings"},
    {src: "items/Silf3", dst: "Vandalier"},

    {src: "items/HolyBook", dst: "KingBible"},
    {src: "items/EmblemEye", dst: "SpellBinder"},
    {src: "items/UnholyBook", dst: "UnholyVespers"},

    {src: "items/HolyWater", dst: "SantaWater"},
    {src: "items/OrbGlow", dst: "Attractorb"},
    {src: "items/Water2", dst: "LaBorra"},

    {src: "items/LighningRing", dst: "LightningRing"},
    {src: "items/Ring", dst: "Duplicator"},
    {src: "items/Thunderloop", dst: "ThunderLoop"},

    {src: "items/Song", dst: "SongOfMana"},
    {src: "items/Curse", dst: "SkullOManiac"},
    {src: "items/Song2", dst: "Mannajja"},
];

console.log('Base path: ' + BASE_PATH);

if (!fs.existsSync(BASE_PATH)) {
    console.log(BASE_PATH + " doesn't exist!");
    process.exit(1);
}

console.log("Extracting icons.");
for (let set in resources) {
    const json = BASE_PATH + '/' + resources[set] + ".json";
    const png = BASE_PATH + '/' + resources[set] + ".png";
    const out = OUT_PATH + '/' + resources[set];

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

console.log("Converting icons.");
for (let icon in conversion) {
    let src = OUT_PATH + '/' + conversion[icon]["src"] + ".png";
    let dst = './img/' + conversion[icon]["dst"] + ".png";
    fs.copyFile(src, dst, function (err) {
        if (err) throw err;
        console.log("Copied " + src + ' to ' + dst);
    });
}
