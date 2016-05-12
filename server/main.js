var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var messages = [
  {
    id: 1,
    text: "Hola soy un mensaje",
    author: "Javier Ocampo"
  }
]

app.use(express.static('public'));

app.get('/hello', function(req, res) {
  res.status(200).send("Hola Mundo");
});

io.on('connection', function(socket) {
  console.log('Alguien se ha conectado con Sockets');
  socket.emit('messages', messages);

  socket.on('new-message', function(data) {
    messages.push(data);
    io.emit('messages', messages);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(8080, function() {
  console.log('server corriendo en http://localhost:8080');
});
