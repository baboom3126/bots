const { router, line } = require('bottender/router');
const messageHandler = require('./handler/messageHandler');
const postbackHandler = require('./handler/postbackHandler');
const followHandler = require('./handler/followHandler');
const unfollowHandler = require('./handler/unfollowHandler');
const joinHandler = require('./handler/joinHandler');
const accountLinkHandler = require('./handler/accountLinkHandler');
const {dbRead,dbWrite,dbPush} = require('./lib/firebase');
const wordParsing = require('./lib/wordParsing');

function App() {
    return router([
        line.any(HandleLine)
    ]);
}

async function HandleLine(context) {

    console.log('[INFO] src/index.js');
    console.log('[INFO] '+JSON.stringify(context.event.rawEvent));

    let randomNum = (Math.floor(Math.random() * 1000)).toString()
    let timestamp = new Date().getTime()

    await dbWrite(`user/${context.event.source.userId}/${randomNum+'s'+timestamp}`, context.event.rawEvent)

    return router([
        line.message(messageHandler),
        line.follow(followHandler),
        line.unfollow(unfollowHandler),
        line.join(joinHandler),
        // line.leave(HandleLeave),
        // line.memberJoined(HandleMemberJoined),
        // line.memberLeft(HandleMemberLeft),
        line.postback(postbackHandler),
        // line.beacon.enter(HandleBeaconEnter),
        // line.beacon.banner(HandleBeaconBanner),
        // line.beacon.stay(HandleBeaconStay),
        line.accountLink(accountLinkHandler),
        // line.things.link(HandleThingsLink),
        // line.things.unlink(HandleThingsUnlink),
        // line.things.scenarioResult(HandleThingsScenarioResult),
    ])
}


/* Note: You need to implement those functions */
// async function HandleMessage(context) {}
// async function HandleFollow(context) {}
// async function HandleUnfollow(context) {}
// async function HandleJoin(context) {}
// async function HandleLeave(context) {}
// async function HandleMemberJoined(context) {}
// async function HandleMemberLeft(context) {}
// async function HandlePostback(context) {}
// async function HandleBeaconEnter(context) {}
// async function HandleBeaconBanner(context) {}
// async function HandleBeaconStay(context) {}
// async function HandleAccountLink(context) {}
// async function HandleThingsLink(context) {}
// async function HandleThingsUnlink(context) {}
// async function HandleThingsScenarioResult(context) {}

module.exports = App