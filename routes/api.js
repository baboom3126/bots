const express = require('express');
const router = express.Router();
const {dbRead,dbWrite,dbPush} = require('../src/lib/firebase');

router.get('/getAllUser', async function (req, res, next) {
    let result = await dbRead('/userlist')
    res.json(result);
});

router.get('/getUser', function (req, res, next) {
    let userId = req.query.userId;
    if (userId) {
        res.json({userId: userId});
    }else{
        res.send("parameter {userId} is required")
    }
})

router.get('/getMsg',async function(req,res,next){
    let userId = req.query.userId;
    if(userId){
        res.json(await dbRead(`/messages/${userId}`))
    }
})

module.exports = router;
