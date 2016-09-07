/**
 * Created by zdx on 2016/9/7.
 */
var dustObj = function () {
    this.dustPic = [];

    this.x = [];
    this.y = [];
    this.amp = [];
    this.NO = [];
    this.num = 20;
    this.alpha = 0;

}
dustObj.prototype.init = function () {

    for(var i=0 ;i<7;i++){
        this.dustPic[i] = new Image();
        this.dustPic[i].src = "./src/dust" + i + ".png";

    }
    for(var i=0;i<this.num;i++){
        this.x[i] = Math.random()*canWidth;
        this.y[i] = Math.random()*canHeight;
        this.amp[i] = Math.random()*20 + 30;
        this.NO[i] = Math.floor(Math.random()*7);
    }
    this.alpha = 0;
}
dustObj.prototype.draw = function () {
    this.alpha += deltaTime*0.0008;
    var dustWave = Math.sin(this.alpha);

    for(var i=0;i<this.num;i++){
        cxt1.drawImage(this.dustPic[this.NO[i]],this.x[i]+ dustWave*this.amp[i],this.y[i])

    }
}