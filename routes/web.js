const express = require('express');
const router = express.Router();
const {pushText, push} = require('../src/message/pushMsg')
/* GET users listing. */
router.get('/', function (req, res, next) {

    // ~(async function pushText() {
    //     await pushText('U649eccc9550a94b6a4b5af38439bcf09','test')
    // })()

    res.render('index');
});


router.post('/pushText', function (req, res, next) {

    let id = req.query.id;
    let msg = req.query.msg;

    pushText(id,msg).then(result=>{
        res.send('ok');
    }).catch(err=>{
        res.send(err).status(500)
    });

});


module.exports = router;
