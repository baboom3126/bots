const {dbRead, dbWrite, dbPush} = require('../lib/firebase');

async function statusHandler(status, context) {
    let profile = await context.getUserProfile();

    if (status == "1") {

        await dbWrite(`/breakfast/${context.event.source.userId}/status`, "2")
        await dbWrite(`/breakfast/${context.event.source.userId}/profile`, profile)

        await context.sendText(`${profile.displayName} 你要吃啥`)
    } else if (status == "2") {
        await dbWrite(`/breakfast/${context.event.source.userId}/status`, "3")
        let data = {}
        data[profile.displayName] = context.event.text
        await dbWrite(`/breakfast/list/`, data)
        await context.sendText(`${profile.displayName} ${context.event.text}`)

    }
}

module.exports = statusHandler;