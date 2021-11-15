// HOLY FUCKING SHIT FINALLY
// this took me way too fucking long oh my god
// i should probably learn more js, but i think the basics of it are fine for now
const fetch = require('node-fetch');

module.exports = {
    commands: ['food', 'dinner'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php", { method: "Get" }) // i fucking despise you
            .then(res => res.json())
            .then((json) => {
                const M = json["meals"][0]
                const sM = M["strMeal"]
                const sP = M["strMealThumb"]

                message.channel.send(`Looks like you're having ${sM} for dinner!\n${sP}`)

            });
    }

}