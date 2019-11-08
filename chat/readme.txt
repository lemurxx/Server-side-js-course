Create a simple chat app. (chat.PNG)
The frontend code is complete (public/client.js). The the ws client connects to port 3006.

When the page loads the user has to enter his name to join the chat. (join.PNG)
The frontend sends the join meassage in the following format:
{
    type: 'join',
    name: 'Yoda'
}

Chat messages are sent in the following format: 
{
    type: 'message',
    message: 'Hello again!'
}

When a user joins or a new message is added, the server has to send a of list messages to the client : 
{
    joined: true //true if the client connected to the socket can display the messages
    messages: [
        {
            sender: 'Yoda',
            message: 'Hello again'
        }, {
            sender: '3TPO',
            message: 'Good night!'
        }
        ...
    ]
}

Notes: 
1. to send an object through a websocket you have to serialize the object - JSON.stringify(myObject),
on the receiving end you can deserialize the object with JSON.parse(myObjectString)

2. the websocket server of the ws module stores its clients (sockets) in the clients property (server.clients) which is an array of socket objects

3. the ws socket objects have a readyState property - which can be checked before writing to it: socket.readyState === ws.OPEN

4. ws module docs: https://github.com/websockets/ws