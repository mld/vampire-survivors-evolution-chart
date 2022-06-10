const last_updated = "2022-06-10";
const game_version = "0.7.2";
const extracted_icons = './extracted-icons';
const extract_resources = ['items', 'UI'];

const evolutions = [
    {evolution: "BloodyTear", weapon: "Whip", item: "HollowHeart"},
    {evolution: "HeavenSword", weapon: "Cross", item: "Clover"},
    {evolution: "DeathSpiral", weapon: "Axe", item: "Candelabrador"},
    {evolution: "ThousandEdge", weapon: "Knife", item: "Bracer"},
    {evolution: "Hellfire", weapon: "FireWand", item: "Spinach"},
    {evolution: "HolyWand", weapon: "MagicWand", item: "EmptyTome"},
    {evolution: "SoulEater", weapon: "Garlic", item: "Pummarola"},
    {evolution: "Vandalier", weapon: "Peachone", item: "EbonyWings"},
    {evolution: "UnholyVespers", weapon: "KingBible", item: "SpellBinder"},
    {evolution: "LaBorra", weapon: "SantaWater", item: "Attractorb"},
    {evolution: "ThunderLoop", weapon: "LightningRing", item: "Duplicator"},
    {evolution: "Mannajja", weapon: "SongOfMana", item: "SkullOManiac"},
    {evolution: "GorgeousMoon", weapon: "Pentagram", item: "Crown"},
    {evolution: "Phieraggi", weapon: "PhieraDerTuphello", weapon2: "EightTheSparrow", item: "Tiragisu"},
    {evolution: "NOFUTURE", weapon: "Runetracer", item: "Armor"},
    {evolution: "ValkyrieTurner", weapon: "ShadowPinion", item: "Wings"},
    {evolution: "ViciousHunger", weapon: "GattiAmori", item: "StoneMask"},
    {evolution: "InfiniteCorridor", weapon: "ClockLancet", weapon2: "GoldRing", item: "SilverRing"},
    {evolution: "CrimsonShroud", weapon: "Laurel", weapon2: "MetaglioLeft", item: "MetaglioRight"},
    {evolution: "Fuwalafuwaloo", weapon: "VentoSacro", item: "BloodyTear"},
];

const icons = [
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

    {src: "items/Pentagram", dst: "Pentagram"},
    {src: "items/Crown", dst: "Crown"},
    {src: "items/Pentagram2", dst: "GorgeousMoon"},

    {src: "items/Guns", dst: "PhieraDerTuphello"},
    {src: "items/Guns2", dst: "EightTheSparrow"},
    {src: "items/Tiramisu", dst: "Tiragisu"},
    {src: "items/Guns3", dst: "Phieraggi"},

    {src: "items/Diamond2", dst: "Runetracer"},
    {src: "items/ArmorIron", dst: "Armor"},
    {src: "items/Carnage", dst: "NOFUTURE"},

    {src: "items/trapano", dst: "ShadowPinion"},
    {src: "items/Wing", dst: "Wings"},
    {src: "items/trapano2", dst: "ValkyrieTurner"},

    {src: "items/Cat", dst: "GattiAmori"},
    {src: "items/Mask", dst: "StoneMask"},
    {src: "items/cateye", dst: "ViciousHunger"},

    {src: "items/Lancet", dst: "ClockLancet"},
    {src: "items/goldring", dst: "GoldRing"},
    {src: "items/silverring", dst: "SilverRing"},
    {src: "items/portal", dst: "InfiniteCorridor"},

    {src: "items/bsleft", dst: "MetaglioLeft"},
    {src: "items/bsright", dst: "MetaglioRight"},
    {src: "items/Laurel", dst: "Laurel"},
    {src: "items/cape", dst: "CrimsonShroud"},

    {src: "items/Whip3", dst: "VentoSacro"},
    {src: "items/Whip4", dst: "Fuwalafuwaloo"},
];

module.exports = {last_updated, game_version, icons, evolutions, extracted_icons, extract_resources};
