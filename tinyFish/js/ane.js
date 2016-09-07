/**
 * Created by zdx on 2016/9/6.
 */
var aneObj = function () {
    this.rootx=[];
    this.headx = [];
    this.heady = [];
    this.num = 50;
    this.alpha = 0;
    this.amp = [];
    //this.len = [];


}
//aneObj.prototype.num = 50;
aneObj.prototype.init = function () {
    for(var i=0;i<this.num;i++){
        this.rootx[i] = i * 16 + Math.random()*20;
        this.headx[i] = this.rootx[i];
        this.heady[i] = canHeight - 250 + Math.random()*50;
        this.amp[i] = Math.random()*50 + 30; //振幅
        //this.len[i] = 200 + Math.random()*50;
    }
}
aneObj.prototype.draw = function () {
    this.alpha += deltaTime * 0.0008;  //
    var headWave = Math.sin(this.alpha);  //正弦
    cxt2.save();
    cxt2.globalAlpha = "0.6";
    cxt2.strokeStyle = "#3b154e";
    cxt2.lineWidth = 20;
    cxt2.lineCap = "round";
    for(var i=0;i<this.num;i++){
        cxt2.beginPath();
        cxt2.moveTo(this.rootx[i], canHeight);
        this.headx[i] = this.rootx[i] + headWave * this.amp[i];

        cxt2.quadraticCurveTo(this.rootx[i], canHeight - 100, this.headx[i], this.heady[i])
        cxt2.stroke();
        cxt2.closePath();
    }
    cxt2.restore();
}