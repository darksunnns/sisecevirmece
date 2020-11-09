var express = require("express");
var http = require("http");
var path = require("path");
var socketIO = require("socket.io");

var app = express();
var server = http.Server(app);
var io = socketIO(server);

var isimler = ["oyuncu", "oyuncu", "oyuncu", "oyuncu"];

var a=80;



app.set("port", 4000);
app.use("/static", express.static(__dirname + "/static"));
app.use("/resimler", express.static(__dirname + "/resimler"));
//app.use('/resimler', express.static(path.join(__dirname, 'resimler')))

app.get("/index.html", function (request, response) {
  response.sendFile(path.join(__dirname, "index.html"));
});

server.listen(5000, function () {
  console.log("Starting server on port 5000");
});

var players = {};

io.on("connection", function (socket) {
  var allConnectedClients = Object.keys(io.sockets.connected);
 // clients.push(socket.id);
//  console.log(clients);

 // console.log(Object.keys(io.engine.clients));
 console.log(allConnectedClients);
 //console.log(allConnectedClients[0]);

io.sockets.emit('id',{id:allConnectedClients[0]});



socket.on("aci", function (data) {
   
 
  io.sockets.emit('message',{bd:a});
console.log(a);  

});




  


  socket.on("new player", function (data) {
    players[socket.id] = {
      ad: data.isim,
      x: 300,
      y: 300,
    };
    //  console.log(socket);
    isimler.unshift(data.isim);

    io.eio.clients[socket.id].ad = data.isim;
   //console.log(io.eio.clients) ;

     //console.log(io.eio.clients);
    // console.log(mylist);
    
     /*
        for(var i=0;i<4;i++)
        {
        notnull[i]=isimler[i];
  
        }
    */
    //  io.sockets.emit('Merhaba',{ad:isimler});

    /*
          if(isimler.length<9){
            
            
             
              //io.sockets.to('some').emit('Merhaba',{ad:isimler});            
       
        console.log("ok");
       }
       
  */

    socket.join("some");
    io.sockets.to("some").emit("Merhaba", { ad: isimler });

    if (data.isim == "kaan") {
    }
    /*
        socket.join('some');
        io.to('some').emit('Merhaba',{ad:notnull});
      */

    //console.log(io.eio);
    //io.eio.clients[5].emit(hey,'hi');
  });
});


/*


setInterval(function() {
  i--;
  if (i <= 0) {
    i = 0;
   // console.log("kalan"+toplamaci % 360); 
   
  }
    io.sockets.emit('message',i);
  },1000/25);
*/