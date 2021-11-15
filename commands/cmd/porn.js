import fetch from 'node-fetch';
const r = /http(.+?)\"/
function getRandomURL(G = false) {
  let URL = (G ? "https://www.pornhub.com/gay/random" : "https://www.pornhub.com/random")
  var out;
  fetch(URL, { method: "Get" }) // this is the WORST method of doing this (probably) but it works and im happy
  .then(res => res.text())
  .then((text) => {
      var lol;
      
      const de = text.indexOf("https://de.pornhub.com/")
      for (let i = de; i < text.length; i++) {
        console.log(text[i])
          lol += text[i]
      }
      console.log(lol)
      out = r.exec(lol)[0]; out = out.slice(0, -1); out = out.replace("de.", "")
      console.log(out)
      console.log(G)
      return out
  });


}

module.exports = {
  commands: ['porn', 'pron'],
  expectedArgs: '<gay, yes, true>',
  minArgs: 0,
  maxArgs: 1,
  callback: (message, arguments, text) => {
    let GA;
    let link;
    let UA = arguments[0]; if (UA == "gay" || UA == "yes" || UA == "true") { GA = true } else { GA = false }

    link = getRandomURL(GA)
    /*while(true){
      if (link == "https://pornhub.com/" || "https://pornhub.com/ ") {
        link = getRandomURL(GA)
      } else{ break; }
    } */
    message.channel.send(link)
  },
}