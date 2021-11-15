const fetch = require('node-fetch');

module.exports = {
    commands: ['ygo','card','ygocard'],
    expectedArgs: '<card>',
    minArgs: 0,
    maxArgs: null,
    callback: (message, arguments, text) => {
        let URL = (text.length>0 ? `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${text}` : "https://db.ygoprodeck.com/api/v7/randomcard.php")

        fetch(URL, { method: "Get" }) // this is the WORST method of doing this (probably) but it works and im happy
        .then(res => res.text())
        .then((text) => {
          var lol
          const de = text.indexOf("https://de.pornhub.com/")
          for (let i = de; i < text.length; i++) {
            lol += text[i]
          }
          let out = r.exec(lol)[0]; out = out.slice(0, -1); out = out.replace("de.", "")
          message.author.send(`|| ${out} ||`)
        });
    },
}
  