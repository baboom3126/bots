const {flexMsgForWord} = require('../message/flexMsg')
const wordParsing = require("../lib/wordParsing");
const statusHandler = require("./statusHandler");
const {dbRead, dbWrite, dbPush} = require('../lib/firebase');

async function messageHandler(context) {

    let theMsg = context.event.text;
    let profile = await context.getUserProfile();

    if (theMsg == "我要吃早餐") {
        await dbWrite(`/breakfast/${context.event.source.userId}/status`, "1")
    }

    if (theMsg == "清空我的") {
        let data = {}
        await dbWrite(`/breakfast/list/${profile.displayName}`, data)
        await dbWrite(`/breakfast/${context.event.source.userId}`, data)

        await context.sendText("已清空")
    }
    if (theMsg == "清空全部") {
        let data = {}
        await dbWrite(`breakfast`, data)
        await context.sendText("已清空全部")
    }
    if (theMsg == "all") {
        let list = await dbRead('/breakfast/list');
        if (list) {
            let replayText = "";
            for (let i of Object.keys(list)) {
                replayText += (i + ' ' + list[i] + '\n');
            }
            await context.sendText(replayText);
        }
    }
    if(theMsg == "help"){
        await context.sendText("[我要吃早餐]\n[清空我的]\n[清空全部]\n[all]");
    }

    let currentStatus = await dbRead(`/breakfast/${context.event.source.userId}/status`);


    await statusHandler(currentStatus, context);

}

module.exports = messageHandler;