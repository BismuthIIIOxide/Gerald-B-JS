const axios = require('axios')

module.exports = {
    commands: 'test',
    expectedArgs: '<type>',
    minArgs: 1,
    maxArgs: 1,
    callback: (message, arguments, text) => {
        axios.get('https://nekobot.xyz/api/image', {
            params: {
                type: arguments[0]
            }
        })
            .then(function (response) {
                // handle success
                message.channel.send(response['data']['message'])
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

}