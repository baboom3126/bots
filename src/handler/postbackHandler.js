

async function postbackHandler(context){
    await context.sendText(context.event.text);
}

module.exports = postbackHandler;