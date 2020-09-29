

async function unfollowHandler(context){
    await context.sendText(context.event.text);
}

module.exports = unfollowHandler;