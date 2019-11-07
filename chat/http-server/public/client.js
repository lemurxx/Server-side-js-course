const ws = new WebSocket('ws://localhost:3006');
ws.binaryType = 'arraybuffer';

ws.onmessage = event => {
    let data;
    if (event.data instanceof ArrayBuffer) {
        let decoder = new TextDecoder("utf-8");
        data = decoder.decode(data);
    } else {
        data = event.data.toString();
    }
    console.log(data);
    refresh(JSON.parse(data));

}


ws.onopen = event => console.log('socket connected', event);
ws.onerror = error => console.error(error);

function send(message) {
    ws.send(JSON.stringify({
        type: 'message',
        message
    }));
}

function join(name) {
    ws.send(JSON.stringify({
        type: 'join',
        name
    }));
}

function refresh(data) {
    if (data.joined) {
        $('#un-joined').hide();
        $("#joined").fadeIn();
    }
    let list = data.messages.reduce((acc, msg) => acc + `<li><span class="sender">${msg.sender}</span><br>
                                     <span class="msg">${msg.message}</span></li>`, '');
    $('#messages').html(list);

}