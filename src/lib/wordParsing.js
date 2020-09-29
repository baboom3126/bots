const axios = require('axios')
const cheerio = require('cheerio')

const CAMBRIDGE_URL = 'https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/'

async function wordParsing(word) {

    console.log('[INFO] lib/wordParsing.js');

    try {
        const res = await axios.get(CAMBRIDGE_URL + word);
        const $ = cheerio.load(res.data)

        let chi_arr = []
        let eng_arr = []
        let eng_sen_arr = []
        let chi_sen_arr = []
        let summary_arr = []
        let speech_arr = []

        // $('.posgram').each(function (i, elem) {
        //     $(this).find('.pos').each(function (i, elem) {
        //         speech_arr.push($(this).text())
        //     })
        // })

        $('.dpos').each(function (i, elem) {
            speech_arr.push($(this).text())

        })

        $('.dpos').each(function (i, elem) {
            $(this).text()
        })


        $('.def-block').each(function (i, elem) {
            var def_body = $(this).find('.def-body')
            var chi = def_body.find('.dtrans-se').first().text().trim()
            // var chi = $(this).find('.def-body .dtrans-se').first().text()

            chi_arr.push(chi)
            var eng = $(this).find('.ddef_h .ddef_d').text().trim();
            eng_arr.push(eng)


            def_body.find('.dexamp').each(function (i, elem) {
                eng_sen_arr.push($(this).find('.deg').text().trim())
                chi_sen_arr.push($(this).find('.dtrans').text().trim())
            });


        })

        $('.dsense_h').each(function (i, elem) {
            let temp = [];
            $(this).find('span').each(function (i, elem) {
                temp.push($(this).text().trim());
            })
            summary_arr.push(temp)

            // summary_arr.push($(this).text().replace(/  \t\n/g," "));
        })


        //////////source .mp3 file//////////
        try {
            var source = $('source');
            var us_mp3 = source[2].attribs.src;
            if (us_mp3 == undefined) {

            }
        } catch (e) {
            us_mp3 = null;
        }
        var result = {};
        result.chi_arr = chi_arr
        result.eng_arr = eng_arr
        result.eng_sen_arr = eng_sen_arr
        result.chi_sen_arr = chi_sen_arr
        result.summary_arr = summary_arr
        result.us_mp3 = us_mp3
        result.speech_arr = speech_arr;

        // console.log('[info] '+JSON.stringify(result));

        if (chi_arr.length == 0 && eng_arr.length == 0 && eng_sen_arr.length == 0 && chi_sen_arr == 0) {
            return null;
        } else {
            return result;
        }
    } catch (err) {
        return new Error(err);
    }
}


module.exports = wordParsing