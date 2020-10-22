const {dbRead,dbWrite,dbPush} = require('../lib/firebase');

async function followHandler(context) {

  /////save user profile to firebase
  let profile = await context.getUserProfile();
  let isUserIdExist = await dbRead(`/userlist/${profile.userId}`);

  if(!isUserIdExist){
    await dbWrite(`userlist/${profile.userId}`,profile);
  }

  await context.sendText('follow');
}

module.exports = followHandler;
