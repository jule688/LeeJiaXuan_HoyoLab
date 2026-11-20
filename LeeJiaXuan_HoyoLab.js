const characters = [
    {
        name: "Qiqi",
        flower: "Violetgrass",
        voiceLines: {
            English: [
                "I am Qiqi. I am a zombie. And I... forgot what comes next.",
                "I want to build a snowman. Will you help?",
                "Sometimes I see finches near the pharmacy. A nice little group of finches."
            ],
            Japanese: [
                "Nana, kyonshii da. ...N? Ato nan da kke.",
                "Suzushii, kimochi ii.",
                "Nana no koto...? Gomen, yoku omoidasenai..."
            ],
            Chinese: [
                "我是七七，是个僵尸…啊，还要说什么来着。",
                "想去凉快点的地方。",
                "最近我努力做了很多记忆力锻炼，所以不用担心我会忘记你了。",
                "你问我吗…？对不起，我不记得了…"
            ],

        }
    },
    {
        name: "Baizhu",
        flower: "Violetgrass",
        voiceLines: {
            English: [
                "Hello. I am Baizhu, a practitioner of medicine at Bubu Pharmacy.",
                "Life, death... and the world around us all follow a set of laws... Hehe, but if you never test the limits, how can anyone know where the boundaries of these laws are?"
            ],
            Japanese: [
                "Ee, watashi ga Fuboku-ro no isha, Byakujutsu desu. ",
                "Mada netakunai? Demo, mou akubi wo shite iru de wa arimasen ka. Fufu."
            ],
            Chinese: [
                "嗯，我是不卜庐的大夫白术。",
                " 早上好。我习惯餐前一杯茶，要给你倒一杯吗？"
            ],

        }
    },
    {
        name: "Xiao",
        flower: "Qingxin",
        voiceLines: {
            English: [
                "Call out my name. Adeptus Xiao. I will be here when you call.",
                "Once the snow is thick enough, we can eat it."
            ],
            Japanese: [
                "Sangan Goken Sennin, Shou, shoukan ni ouji sanjou.",
                "Hiruge ka... Boujo Ryokan ni modoru zo."
            ],
            Chinese: [
                "三眼五显仙人，魈，听召前来守护。",
                "时候不早了。出发吧。"
            ],

        }
    },
    {
        name: "Ganyu",
        flower: "Qingxin",
        voiceLines: {
            English: [
                "If you lie on the grass, you can feel the heartbeat of the world.",
                "May Rex Lapis watch over you. May your dreams be peaceful and sweet."
            ],
            Japanese: [
                "Odayaka-na fun'iki... Totemo suki desu.",
                "Un, kuuki ga kirei desu ne."
            ],
            Chinese: [
                "安逸的氛围…喜欢。",
                "愿帝君保佑你，愿你的每个梦都踏实而香甜"
            ],

        }
    },
    {
        name: "Furina",
        flower: "Lakelight Lily",
        voiceLines: {
            English: [
                "Ah, you must be stunned and at a loss for words... Understandable, it is I after all... Fontaine's most beloved star, Furina. ",
                "Boring... Isn't there anything else more interesting to do?"
            ],
            Japanese: [
                "Sou, kono boku koso ga, Fonteenu de shiranu mono wa inai daisutaa, Furiina da. ",
                "Fuwaa... Boku mo nemutaku natte kita kara, mata ashita. Jikandoori ni okoshite okure yo..."
            ],
            Chinese: [
                "没错，站在你面前的就是枫丹人人皆知的大明星——芙宁娜哦。",
                "午安！我的蛋糕在哪里？什么什么，你说早上刚吃过？那已经隔了好——久啦！"
            ],

        }
    },
    {
        name: "Nefer",
        flower: "Moonfall Silver",
        voiceLines: {
            English: [
                "Pleasure to meet you. I'm Nefer, head of the Curatorium of Secrets. ",
                "Don't trust your eyes uncritically. People only see what they want to — so don't be your own fool."
            ],
            Japanese: [
                "こんにちは。あたしはネフェル、秘聞の館のオーナーだ。",
                "おはよう。あんたって働き者だね。ヤフォダにも見習ってもらいたいよ。"
            ],
            Chinese: [
                "幸会，我是秘闻馆的老板，奈芙尔。",
                " 呼啊…没什么人来啊，先去午睡一会吧。"
            ],
        }
    },
];

const ascensionMaterials = [
    { level: 20, flowers: 3 },
    { level: 40, flowers: 10 },
    { level: 50, flowers: 20 },
    { level: 60, flowers: 30 },
    { level: 70, flowers: 45 },
    { level: 80, flowers: 60 }
];

let posts = [
    {
        id: 1,
        author: "LumiFrost",
        game: "Genshin Impact",
        title: "Best team for Neuvillette",
        content: "Here is my recommended team!",
        likes: 25,
        comments: [{
            username: "PaimonCelestia",
            comment: "This is very helpful, thanks!"
        }]
    },
    {
        id: 2,
        author: "IcaVoracity",
        game: "Honkai Star Rail",
        title: "Best beginner characters",
        content: "These characters are great for beginners.",
        likes: 40,
        comments: []
    },
    {
        id: 3,
        author: "TeriTeri",
        game: "Honkai Impact 3rd",
        title: "Who is your favourite Valkyrie?",
        content: "I've been playing Honkai Impact 3rd for a while now, and my favourite Valkyrie has to be Lunar Vow! She is so cool. Who is your favourite?",
        likes: 100,
        comments: [{
            username: "LumiFrost",
            comment: "I don't play the game that much but I love Seele."
        }]
    }
];


module.exports = {

   calculateMaterials(characterName, currentLevel, targetLevel, flowersOwned){
    const character = characters.find(
        c => c.name.toLowerCase() == characterName.toLowerCase()
    );
    if(!character){
        return "Character not found.";
    }

    if(currentLevel < 1 || currentLevel > 90 || targetLevel < 1 || targetLevel > 90 || currentLevel >= targetLevel || flowersOwned < 0){
        return "Invalid input.";
    }

    function getTotalFlowers(level){
        return ascensionMaterials
            .filter(material => level >= material.level)
            .reduce((total, material) => total + material.flowers, 0);
    }

    const currentFlowers = getTotalFlowers(currentLevel);
    const targetFlowers = getTotalFlowers(targetLevel);
    const flowersNeeded = targetFlowers - currentFlowers;
    const flowersToCollect = Math.max(0, flowersNeeded - flowersOwned);

    return {
        character: character.name,
        flower: character.flower,
        flowersNeeded: flowersNeeded,
        flowersOwned: flowersOwned,
        flowersToCollect: flowersToCollect
    };
   },

   createPost(author, game, title, content){
    const newPost =  {
        id: posts.length + 1,
        author: author,
        game: game,
        title: title,
        content: content,
        likes: 0,
        comments: []
    };
    posts.push(newPost);
    return newPost;
   },

   filterPost(game){
    return posts.filter(
        post => post.game.toLowerCase() == game.toLowerCase() 
    );
   },

   likePost(id){
    const post = posts.find(post => post.id == id);

    if(!post){
        return "Post not found";
    }

    post.likes++;
    return post;
   },

   commentPost(id, username, comment){
    const post = posts.find(post => post.id == id);

    if(!post){
        return "Post not found";
    }

    post.comments.push({
        username: username,
        comment: comment
    });
    return post;
   },

   getCharacterVoiceline(characterName, language){
    const character = characters.find(
        c => c.name.toLowerCase() == characterName.toLowerCase()
    );
    if(!character){
        return "Character not found.";
    }
    if(!character.voiceLines[language]){
        return "Language not found.";
    }

    const voiceLines = character.voiceLines[language];

    const randomIndex = Math.floor(Math.random() * voiceLines.length);

    return {
        character: characterName,
        language: language,
        voiceLine: voiceLines[randomIndex]
    };
   }
}

console.log(module.exports.calculateMaterials("Qiqi", 20, 90, 50));

console.log(module.exports.createPost("TuanTuan77", "Genshin Impact", "Spiral Abyss 7.2 clear", "Forced Flins and Skirk teams to get 36 stars, faced some difficulty against the Prism Slime though."));

console.dir(module.exports.filterPost("Genshin Impact"), { depth: null });

console.log(module.exports.likePost(4));

console.log(module.exports.commentPost(4,"IcaVoracity","Wow! Impressive! Did you know Jean can beat the Prism Slime?"));
console.dir(module.exports.filterPost("Genshin Impact"), { depth: null });

console.log(module.exports.getCharacterVoiceline("Qiqi", "English"));

