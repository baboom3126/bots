const {flexMsgForWord} = require('../message/flexMsg')
const wordParsing = require("../lib/wordParsing");

async function messageHandler(context) {

    console.log('[INFO] handler/messageHandler.js');

    let theWord = context.event.text;
    let rawWord = await wordParsing(theWord)
    if (rawWord != null) {
        let combinedFlexMsg = await flexMsgForWord(theWord, rawWord, 3, 3);
        await context.sendFlex(theWord, combinedFlexMsg);
        await context.sendAudio({
            originalContentUrl: 'https://dictionary.cambridge.org/'+rawWord.us_mp3,
            duration: 3000,
        });
    } else {
        await context.sendText('找不到字：'+context.event.text);

    }
}

module.exports = messageHandler;