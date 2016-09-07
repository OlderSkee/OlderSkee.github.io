/**
 * Created by zdx on 2016/9/7.
 */
var waveObj = function () {
    this.x = [];
    this.y = [];
    this.alive = [];
    this.r = [];
    this.num = 10;
}
waveObj.prototype.init = function () {
    for(var i=0;i<this.num;i++){
        this.alive[i] = false;
        this.r[i]=0;
    }
}
waveObj.prototype.draw = function () {
    cxt1.save();
    cxt1.lineWidth = 2;
    cxt1.shadowBlur = 10;
    cxt1.shadowColor ="white";
    for(var i=0;i<this.num;i++){
        if(this.alive[i]) {

            this.r[i] += deltaTime * 0.05;
            if(this.r[i]>100){
                this.alive[i] = false;
                continue;
            }
            var alpha = 1 - this.r[i] / 100;
            cxt1.strokeStyle = "rgba(255,255,255,"+alpha+")";

            cxt1.beginPath();
            cxt1.arc(this.x[i], this.y[i], this.r[i], 0, 2*Math.PI);
            cxt1.stroke();
            cxt1.closePath();
        }
    }
    cxt1.restore();

}
waveObj.prototype.born = function (x,y) {
    for(var i=0;i<this.num;i++){
        if(!this.alive[i]){

            this.alive[i] = true;
            this.r[i] = 10;
            this.x[i] = x;
            this.y[i] = y;
            return;
        }
    }
}