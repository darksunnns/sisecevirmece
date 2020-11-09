
var anahtar=false;
var data = [];
var isimler = ["bekliyor", "bekliyor", "bekliyor", "bekliyor"];
var isim;
isim=prompt("isminizi girin");

var first=document.querySelector(".firstpage");
var gamepage=document.querySelector(".gamepage");
var button = document.querySelector(".joinbutton");
var firstpage = 
button.addEventListener('click', () =>{
    console.log("ii");
  first.style.display="none";
  gamepage.style.display="block";
  
})

var socket = io();



window.onkeydown=function(olay){

 
  if(olay.keyCode==32  )
  {
  console.log("basıldı");
  anahtar=true;
  
  }
  if(anahtar){

    socket.emit("aci", { gelenaci:true});
anahtar=false;

  }


}


socket.emit("new player", { isim:isim});

var c,
  cc,
  ucak,
  player,
  yazi1,
  yazi2,
  yazi3,
  yazi4,
  arkaplan,
  i=0;
  
 // toplamaci=0;

class game {
  constructor() {
    c = document.getElementById("canvas");
    c.width = 500;
    c.height = 500;
    cc = c.getContext("2d");
  }

  init() {

    socket.on("message", (veri) => {
      // console.log(veri.newaci);
       //a=veri;
     //  console.log(veri);
      
     console.log(veri.bd);
     
    i=veri.bd ;
       
       });
       socket.on("id", (veri) => {
        // console.log(veri.newaci);
         //a=veri;
       //  console.log(veri);
        
       console.log("sunucudan gelen :"+veri.id);
       console.log("clientid :"+socket.id);
       if(socket.id==veri.id)
       {
         console.log("eslesti");
       }
        
         
         });


    socket.on("Merhaba", (veri) => {
      
      yazi1 = new yazinesne(
        c.width / 2,
        c.height / 2 - c.width / 5,
        veri.ad[0],
        "red",
        c.width / 10 + "px Arial",
        "center",
        c.width / 5
      );
      yazi2 = new yazinesne(
        c.width / 2,
        c.height / 2 + c.width / 5,
        veri.ad[1],
        "blue",
        c.width / 10 + "px Arial",
        "center",
        c.width / 5
      );
      yazi3 = new yazinesne(
        c.width / 2 - c.width / 5,
        c.height / 2,
        veri.ad[2],
        "black",
        c.width / 10 + "px Arial",
        "right",
        c.width / 5
      );
      yazi4 = new yazinesne(
        c.width / 2 + c.width / 5,
        c.height / 2,
        veri.ad[3],
        "red",
        c.width / 10 + "px Arial",
        "left",
        c.width / 5
      );
   
     

      setInterval(() => this.animate(), 60);
    });

    //açıyı al
    

   
   
    player = new nesne(
      c.width / 2 - c.width / 10,
      c.height / 2 - c.width / 10,
      c.width / 5,
      c.width / 5,
      "player",
      "/resimler/player.png"
    );
    arkaplan = new nesne(
      0,
      0,
      c.width,
      c.height,
      "arkaplan",
      "/resimler/arkaplan.jpg"
    );
    
   

  }

  draw() {
    //cc.fillRect(0,0,300,500);
    // arkaplan= new nesne(0,0,300,100,"player","/resimler/player.png");

    cc.save();
    //cc.fillRect(c.width/2,c.height/2,50,100);
    yazi1.draw();
    yazi2.draw();
    yazi3.draw();
    yazi4.draw();
    player.draw();
  }

  update() {}

  clear() {
    cc.clearRect(0, 0, c.width, c.height);
  }

  animate() {
    this.clear();
    arkaplan.update();
    this.draw();

    




    i--;
    if (i <= 0) {
      i = 0;
      player.angle=0;
     
     // console.log("kalan"+toplamaci % 360); 
     
    }
 
    player.hiz=i;
  
    
    // socket.emit("aci", { gelenaci:i});
   // player.hiz = a;
   // toplamaci += i; 
   // console.log(toplamaci);
    
  //  console.log(Math.round(player.angle));
  }
}

ucak = new game();
ucak.init();