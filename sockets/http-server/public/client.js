const ws = new WebSocket('ws://localhost:3003');

ws.binaryType = 'arraybuffer';

ws.onmessage = event => {
    if (event.data instanceof ArrayBuffer) {
        let decoder = new TextDecoder("utf-8");
        console.log(decoder.decode(event.data));
    } else {
        console.log(event.data.toString());
    }
}


ws.onopen = event => console.log('socket connected', event);
ws.onerror = error => sconsole.error(error);



function send(message) {
    ws.send(message);
}