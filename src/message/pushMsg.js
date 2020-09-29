const {getClient} = require('bottender');
const client = getClient('line');

async function pushText(to,text) {
    await client.pushText(to, text);
}

async function push(to ,messages){
    await client.push(to,messages)
}

module.exports.pushText = pushText
module.exports.push = push