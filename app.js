const Hoyolab = require("./LeeJiaXuan_HoyoLab");

console.log(Hoyolab.calculateMaterials("test", 20, 50, -10));
console.log(Hoyolab.calculateMaterials("Qiqi", 80, 20, 50));
console.log(Hoyolab.calculateMaterials("Qiqi", 20, 50, -10));

console.log(Hoyolab.calculateMaterials("Qiqi", 20, 90, 50));

console.log(Hoyolab.createPost("TuanTuan77", "Genshin Impact", "Spiral Abyss 7.2 clear", "Forced Flins and Skirk teams to get 36 stars, faced some difficulty against the Prism Slime though."));

console.dir(Hoyolab.filterPost("Genshin Impact"), { depth: null });

console.log(Hoyolab.likePost(4));

console.log(Hoyolab.commentPost(4,"IcaVoracity","Wow! Impressive! Did you know Jean can beat the Prism Slime?"));

console.log(Hoyolab.getCharacterVoiceline("Qiqi", "English"));