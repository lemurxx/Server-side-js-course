Create a simple chat app. (chat.PNG)
The frontend code is complete (public/client.js). The the ws client connects to 3006 port.

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

When a user joins or a new message is added the server has to send the list messages to the client : 
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