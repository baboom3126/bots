

async function followHandler(context) {
  await context.sendText('follow');
}

module.exports = followHandler;
