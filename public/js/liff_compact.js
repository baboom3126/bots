$(document).ready(function() {

    initializeLiff('1654950618-q3PVzdEw');

});


let initializeLiff = function (myLiffId) {
    liff.init({
        liffId: myLiffId,
    }).then(() => {
        setButtonHandler();
    }).catch(err => {
        alert(`error: ${JSON.stringify(err)}`);
    });
}

let setButtonHandler = function () {

    $('#button').click(function(event){
        window.alert('clicked: sendMessages');
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
            window.alert('Error sending message: ' + err);
        });
    })

}

