const express = require('express');
const router = express.Router();
const path = require('path');
//richmenu-ac22a3934237e2693625df6efca4177d
/* GET users listing. */
router.get('/send-id/tall', function (req, res, next) {
    res.json({ id: process.env.LINE_LIFF_ID_tall });

});
router.get('/send-id/full', function (req, res, next) {
    res.json({ id: process.env.LINE_LIFF_ID_full });

});
router.get('/send-id/compact', function (req, res, next) {
    res.json({ id: process.env.LINE_LIFF_ID_compact });

});


router.get('/liff_tall', function (req, res, next) {
    //1654950618-lnkvPLzj
    console.log(`[INFO] ${req.method} ${req.url}`)
    const filename = path.join(`${__dirname}/liff/liff.html`);
    res.render('liff_tall');

});

router.get('/liff_full', function (req, res, next) {
    console.log(`[INFO] ${req.method} ${req.url}`)

    const filename = path.join(`${__dirname}/liff/liff.html`);
    res.render('liff_full');

});

router.get('/liff_compact', function (req, res, next) {
    console.log(`[INFO] ${req.method} ${req.url}`)

    const filename = path.join(`${__dirname}/liff/liff.html`);
    res.render('liff_compact');

});


module.exports = router;
