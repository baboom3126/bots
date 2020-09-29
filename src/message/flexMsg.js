async function flexMsgForWord(theWord,rawWord, sizeOfChi, sizeOfSen) {

    let contents_title = {
        "type": "text",
        "text": "WORD",
        "weight": "bold",
        "color": "#aaaaaa",
        "size": "sm"
    }
    let contents_word = {
        "type": "text",
        "text": theWord,
        "weight": "bold",
        "color": "#1DB446",
        "size": "xxl",
        "margin": "md"
    }
    let contents_speech = {
        "type": "text",
        "text": "'noun', 'verb'",
        "size": "xs",
        "color": "#aaaaaa",
        "wrap": true
    }
    let contents_separator = {
        "type": "separator",
        "margin": "xxl"
    }

    let contents_body_contents = []


    for (let i in rawWord.chi_arr) {
        if (i < sizeOfChi) {
            contents_body_contents.push({
                "type": "box",
                "layout": "horizontal",
                "contents": [
                    {
                        "type": "text",
                        "size": "sm",
                        "color": "#555555",
                        "flex": 0,
                        "text": (i+i)+'. '+rawWord.chi_arr[i],
                        "align": "start",
                        "wrap": true
                    }
                ]
            })
        }
    }

    contents_body_contents.push(contents_separator);

    for (let i in rawWord.eng_sen_arr) {
        if (i < sizeOfSen) {
            contents_body_contents.push({
                "type": "box",
                "layout": "horizontal",
                "margin": "xxl",
                "contents": [
                    {
                        "type": "text",
                        "text": rawWord.eng_sen_arr[i],
                        "size": "sm",
                        "color": "#555555",
                        "decoration": "none",
                        "wrap": true
                    }
                ]
            })
            contents_body_contents.push({
                "type": "box",
                "layout": "horizontal",
                "margin": "xxl",
                "contents": [
                    {
                        "type": "text",
                        "text": rawWord.chi_sen_arr[i],
                        "size": "sm",
                        "color": "#555555",
                        "decoration": "none",
                        "wrap": true
                    }
                ]
            })
        }
    }


    let contents_body = {

        "type": "box",
        "layout": "vertical",
        "margin": "xxl",
        "spacing": "sm",
        "contents": contents_body_contents
    }


    let contents_footer = {
        "type": "box",
        "layout": "horizontal",
        "margin": "md",
        "contents": [
            {
                "type": "text",
                "text": "Pronounce",
                "color": "#aaaaaa",
                "size": "xs",
                "align": "end",
                "action": {
                    "type": "uri",
                    "label": "action",
                    "uri": 'https://dictionary.cambridge.org/' + rawWord.us_mp3
                }
            }
        ]
    }


    let contents = []
    contents.push(contents_title);
    contents.push(contents_word);
    contents.push(contents_speech);
    contents.push(contents_separator);
    contents.push(contents_body);
    contents.push(contents_separator);
    contents.push(contents_footer);

    let res = {

        "type": "bubble",
        "body": {
            "type": "box",
            "layout": "vertical",
            "contents": contents
        },
        "styles": {
            "footer": {
                "separator": true
            }
        }
    }


    let res1 = {
        "type": "bubble",
        "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "text",
                    "text": "word",
                    "weight": "bold",
                    "color": "#1DB446",
                    "size": "sm"
                },
                {
                    "type": "text",
                    "text": "THE WORD",
                    "weight": "bold",
                    "size": "xxl",
                    "margin": "md"
                },
                {
                    "type": "text",
                    "text": "'noun', 'verb'",
                    "size": "xs",
                    "color": "#aaaaaa",
                    "wrap": true
                },
                {
                    "type": "separator",
                    "margin": "xxl"
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "xxl",
                    "spacing": "sm",
                    "contents": [
                        {
                            "type": "box",
                            "layout": "horizontal",
                            "contents": [
                                {
                                    "type": "text",
                                    "size": "sm",
                                    "color": "#555555",
                                    "flex": 0,
                                    "text": "'手'",
                                    "align": "start",
                                    "wrap": true
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "horizontal",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "'（鐘錶的）指針'",
                                    "size": "sm",
                                    "color": "#555555",
                                    "flex": 0,
                                    "wrap": true
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "horizontal",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "'一局牌；一手牌'",
                                    "size": "sm",
                                    "color": "#555555",
                                    "flex": 0,
                                    "wrap": true
                                }
                            ]
                        },
                        {
                            "type": "separator",
                            "margin": "xxl"
                        },
                        {
                            "type": "box",
                            "layout": "horizontal",
                            "margin": "xxl",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "'All their toys are made by hand.'",
                                    "size": "sm",
                                    "color": "#555555",
                                    "decoration": "none",
                                    "wrap": true
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "horizontal",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "'他們所有的玩具都是手工製作的。'",
                                    "size": "sm",
                                    "color": "#555555",
                                    "wrap": true
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "horizontal",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "'I delivered her invitation by hand (= not using the postal service).'",
                                    "size": "sm",
                                    "color": "#555555",
                                    "wrap": true
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "horizontal",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "'我親自把她的請帖送去。'",
                                    "size": "sm",
                                    "color": "#555555",
                                    "wrap": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "separator",
                    "margin": "xxl"
                },
                {
                    "type": "box",
                    "layout": "horizontal",
                    "margin": "md",
                    "contents": [
                        {
                            "type": "text",
                            "text": "pronounce",
                            "color": "#aaaaaa",
                            "size": "xs",
                            "align": "end",
                            "action": {
                                "type": "uri",
                                "label": "action",
                                "uri": "https://dictionary.cambridge.org/zht/media/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/us_pron/h/han/hand_/hand.mp3"
                            }
                        }
                    ]
                }
            ]
        },
        "styles": {
            "footer": {
                "separator": true
            }
        }
    }

    return res;
}

module.exports.flexMsgForWord = flexMsgForWord;