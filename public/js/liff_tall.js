const baseUrl = window.location.origin;

$(document).ready(function () {

    initializeLiff('1654950618-lnkvPLzj');
    if (!navigator.geolocation) {
        alert('app does not support geolocation service');
    }

});


let initializeLiff = function (myLiffId) {
    liff.init({
        liffId: myLiffId,
    }).then(() => {
        setButtonHandler();
        getGeolocation();
        scanQrcode();
        login();
        logout();
        isLogged();
        shareTargetPicker();
    }).catch(err => {
        alert(`error: ${JSON.stringify(err)}`);
    });
}

let setButtonHandler = function () {

    $('#button').click(function (event) {
        let input_text = $('#text1').val();
        liff.sendMessages([
            {
                type: 'text',
                text: input_text,
            },
        ]).then(() => {
            alert('message sent');
            liff.closeWindow();
        }).catch(err => {
            alert('Error sending message: ' + err);
        });
    })

}

let getGeolocation = function () {


    $('#btn_geo').click(function (event) {
        swal.showLoading();
        navigator.geolocation.getCurrentPosition(position => {
            $('#input_lat').val(position.coords.latitude)
            $('#input_lon').val(position.coords.longitude)
            swal.close()

        })
    })
}

let scanQrcode = function () {
    $("#btn_qrcode").click(function (event) {
        if (liff.scanCode) {
            liff.scanCode().then(result => {
                if (result.value == "null") {
                    alert("Failed scanning")
                } else {
                    alert(result.value)
                }
            });
        }
    })
}

let login = function () {
    $("#btn_login").click(function (event) {

        if (liff.isLoggedIn() == true) {
            alert("you have logged in ");
        } else {
            liff.login();
        }
    })
}

let logout = function () {
    $("#btn_logout").click(function (event) {
        liff.logout();
    })
}

let isLogged = function () {
    $("#btn_islogged").click(function (event) {
        alert(liff.isLoggedIn().toString());
    })
}

let shareTargetPicker = function () {
    $("#btn_shareTargetPicker").click(function (event) {

        if (liff.isLoggedIn() == true) {
            if (liff.isApiAvailable('shareTargetPicker')) {
                liff.shareTargetPicker([
                    {
                        'type': 'text',
                        'text': 'Hello, World!'
                    }
                ])
                    .then(function (res) {
                        if (res) {
                            // succeeded in sending a message through TargetPicker
                            console.log(`[${res.status}] Message sent!`)
                        } else {
                            const [majorVer, minorVer] = (liff.getLineVersion() || "").split('.');
                            if (parseInt(majorVer) == 10 && parseInt(minorVer) < 11) {
                                // LINE 10.3.0 - 10.10.0
                                // Old LINE will access here regardless of user's action
                                console.log('TargetPicker was opened at least. Whether succeeded to send message is unclear')
                            } else {
                                // LINE 10.11.0 -
                                // sending message canceled
                                console.log('TargetPicker was closed!')
                            }
                        }
                    }).catch(function (error) {
                    // something went wrong before sending a message
                    console.log('something wrong happen')
                })
            }

        } else {
            alert("Please login first.")
        }

    })
}

