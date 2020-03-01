var express = require('express');
var app = express() ;
var http = require('http').Server(app) ;
var io = require('socket.io')(http) ;
var path = require('path') ;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res){
	res.sendfile('index.html') ;
});

io.on('connection',function(socket){
	console.log("A new user got connected!") ;  

  socket.on('disconnect',function(){
		console.log("User got disconnected!") ;
  });
  
  socket.on('chat message', function(msg){ //what event name: 'chat message' receiver data to do something....
    io.emit('chat message', msg); // sent message to everyone connect to pool
  });

  // socket.on('change username'. function())
});
Number(process.env.PORT || 3000);


http.listen(Number(process.env.PORT || 3000),function(){
	console.log("Listening to connections on *: ", Number(process.env.PORT || 3000)) ;
});