var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var marcador = {
	local:0,
	visitante:0	
};

app.use("/p", express.static('public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/main.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
    io.emit('update_scoreboard', marcador);
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.on('notlocal_goal', function(){
        marcador.visitante+=1;
        io.emit('update_scoreboard', marcador);
    });
    socket.on('local_goal', function(){
        marcador.local+=1;
        io.emit('update_scoreboard', marcador);
    });

    socket.on('notlocal_goal_m', function(){
        marcador.visitante-=1;
        io.emit('update_scoreboard', marcador);
    });
    socket.on('local_goal_m', function(){
        marcador.local-=1;
        io.emit('update_scoreboard', marcador);
    });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});


