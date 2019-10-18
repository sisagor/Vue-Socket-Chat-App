var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', (req, res) => {
    res.sendFile( __dirname + '/index.html');
});

io.on('connection', function(socket){

    socket.on('chat-msg', (msg) =>  {
        socket.broadcast.emit('chat-msg', (msg));
    });
    socket.on('typing', (data) => {
        socket.broadcast.emit('typing');
    });
    socket.on('stopTyping', (data) => {
        socket.broadcast.emit('stopTyping');
    });





});
console.log("Working");
http.listen(3000, () => {
    console.log('Connection done');
});

