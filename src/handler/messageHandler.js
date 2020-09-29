const {flexMsgForWord} = require('../message/flexMsg')
const wordParsing = require("../lib/wordParsing");

async function messageHandler(context) {

    console.log('[INFO] handler/messageHandler.js');

    let theWord = context.event.text;

    console.log('[INFO] wordParsing \"'+theWord+'\"');
    let rawWord = await wordParsing(theWord)

    if (rawWord != null) {

        console.log('[INFO] flexMsgForWord \"'+theWord+'\"');
        let combinedFlexMsg = await flexMsgForWord(theWord, rawWord, 3, 3);

        console.log('[INFO] sendFlex');
        await context.sendFlex(theWord, combinedFlexMsg);

        console.log('[INFO] sendAudio');
        await context.sendAudio({
            originalContentUrl: 'https://dictionary.cambridge.org/'+rawWord.us_mp3,
            duration: 3000,
        });
    } else {

        console.log('[INFO] wordParsing Failed, send failed message');
        await context.sendText('找不到字：'+context.event.text);

    }
}

module.exports = messageHandler;