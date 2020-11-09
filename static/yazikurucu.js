function yazinesne(x, y, type, color, font, aling, maxwidth) {
  this.type = type; // tipi
  this.x = x; //x kordinatı
  this.y = y; //y kordinatı
  this.color = color; // renk
  this.font = font;
  this.aling = aling; // yazi tipi ve boyutu
  this.maxwidth = maxwidth;

  //nesnenin çizim fonk
  this.draw = function () {
    cc.font = this.font;
    cc.fillStyle = this.color;
    cc.textAlign = this.aling;
    cc.textBaseline = "middle";
    cc.fillText(this.type, this.x, this.y, this.maxwidth);
  };
  // tipe göre güncelleme ve hız ayarları
  /*
       switch (this.type) {
           case "player":
               this.vx=0; //yatay hızı
               this.vy=0; // dusey hızı
               this.update=function () {
                   this.x+=this.vx;
                   this.y+=this.vy;
                   this.draw();
               }
               break;
       }
       */
}
