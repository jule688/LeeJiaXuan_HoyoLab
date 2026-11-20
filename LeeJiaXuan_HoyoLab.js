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



module.exports = {

   calculateMaterials(characterName, currentLevel, targetLevel, flowersOwned){
    const character = characters.find(
        c => c.name.toLowerCase() === characterName.toLowerCase()
    );
    if(!character){
        return "Character not found.";
    }

    if(currentLevel < 1 || currentLevel > 90 || targetLevel < 1 || targetLevel > 90){
        return "Invalid input.";
    }

    function getTotalFlowers(level){
        return ascensionMaterials
            .filter(material => level >= material.level)
            .reduce((total, material) => total + material.flowers);
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

   
}