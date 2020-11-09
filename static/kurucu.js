function nesne(x, y, w, h, type, src) {
  this.type = type; // tipi
  this.x = x; //x kordinatı
  this.y = y; //y kordinatı
  this.angle = 0; // açı
  this.hiz = 0; //hızlanıp yavaşlatmak için
  this.w = w; // genişlik
  this.h = h; // yüksekliği
  this.src = src; //resim yolunu belirt
   
  //js ile resim olsturma
  this.image = new Image();
  this.image.src = this.src;
  //nesnenin çizim fonk
  this.draw = function () {
this.angle += (this.hiz * Math.PI) / 180;
 // this.angle = (270 * Math.PI) / 180;
    
    cc.translate(this.x + c.width / 10, this.y + c.width / 10);
    cc.rotate(this.angle);
    cc.drawImage(this.image, -c.width / 10, -c.width / 10, this.w, this.h);
    cc.translate(-this.x, -this.y);

    cc.restore();
  };

  switch (this.type) {
    case "arkaplan":
      this.vx = 0; //yatay hızı
      this.vy = 0; // dusey hızı
      this.update = function () {
        this.x += this.vx;
        this.y += this.vy;
        cc.drawImage(this.image, this.x, this.y, this.w, this.h);
      };
      break;
  }
}
