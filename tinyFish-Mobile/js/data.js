/**
 * Created by zdx on 2016/9/7.
 */
var dataObj = function () {
    this.fruitNum;
    this.double;
    this.score;
    this.gameOver = false;
    this.alpha = 0;
    this.orangeNum;
    this.blueNum;
    this.colourNum;

}

dataObj.prototype.init = function () {

    this.fruitNum = 0;
    this.double =1;
    this.score = 0;

    this.orangeNum = 0;
    this.blueNum = 0;
    this.colourNum = 0;



}
dataObj.prototype.draw = function () {
    var h = can1.height;
    var w = can1.width;
    cxt1.textAlign ="center"
    cxt1.save();

    cxt1.shadowBlur = 5;
    cxt1.shadowColor = "white";
    cxt1.fillStyle = "white";


    cxt1.font = ""+canWidth*0.02+"px Verdana";
    cxt1.fillText("Score "+this.score, w * 0.5 , h - 20);

    cxt1.font = ""+canWidth*0.02+"px Verdana";
    cxt1.fillText(this.orangeNum, w * 0.5-20, h - 55);
    cxt1.fillText(this.blueNum, w * 0.5+50, h - 55);


    if(this.gameOver){
        this.alpha += deltaTime * 0.0005;
        if(this.alpha>1){
            this.alpha = 1;
        }
        cxt1.fillStyle = "rgba(255,255,255,"+ this.alpha +")";
        cxt1.font = ""+canWidth*0.05+"px Verdana";
        cxt1.fillText("GAME OVER", w * 0.5 , h * 0.5);
    }
    cxt1.restore();

    cxt1.drawImage(fruit.orange, w * 0.5 - 60, h - 70)
    cxt1.drawImage(fruit.blue, w * 0.5 + 10, h - 70)

}
dataObj.prototype.addScore = function () {
    this.score += this.fruitNum * 100 * this.double;
    this.fruitNum = 0;
    this.double = 1;

}