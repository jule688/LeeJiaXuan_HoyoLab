const characters = [
    {
        name: "Qiqi",
        flower: "Violetgrass"
    },
    {
        name: "Baizhu",
        flower: "Violetgrass"
    },
    {
        name: "Xiao",
        flower: "Qingxin"
    },
    {
        name: "Ganyu",
        flower: "Qingxin"
    },
    {
        name: "Furina",
        flower: "Lakelight Lily"
    },
    {
        name: "Nefer",
        flower: "Moonfall Silver"
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

    if(currentLevel < 1 || currentLevel > 90 || targetLevel < 1 || targetLevel > 90 || flowersOwned < 0){
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
}

console.log(module.exports.calculateMaterials("Qiqi", 20, 90, 50));