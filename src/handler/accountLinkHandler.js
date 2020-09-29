async function accountLinkHandler(context){
    await context.sendText(context.event.text);
}

module.exports = accountLinkHandler;