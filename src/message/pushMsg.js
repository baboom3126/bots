const {getClient} = require('bottender');
const client = getClient('line');

async function pushText(to,text) {

    console.log('[INFO] push one message to '+to+' , message '+text)
    await client.pushText(to, text);
}

async function push(to ,messages){

    console.log('[INFO] push messages to '+to+' , message '+messages)
    await client.push(to,messages)
}

module.exports.pushText = pushText
module.exports.push = push