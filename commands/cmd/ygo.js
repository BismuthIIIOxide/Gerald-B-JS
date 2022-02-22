const axios = require('axios')

module.exports = {
    commands: ['ygo','card','ygocard'],
    expectedArgs: '<card>',
    minArgs: 0,
    maxArgs: null,
    callback: (message, arguments, text) => {
        if (text.length > 0 ){text.replace(/ /g, "-")}
        let URL = (text.length>0 ? `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${text}` : "https://db.ygoprodeck.com/api/v7/randomcard.php")

        axios.get(URL)
            .then(function (resp) {
                var card = resp['data']
                let image = card["card_images"][0]["image_url"] || card["card_images"]["image_url"]
                message.channel.send(`${card['name']} : ${card['type']}\n${card['desc']}`, {files:[image]})
            })
            .catch(function (err){
                console.log(err)
            })
            .then(function(){})
    },
}
  