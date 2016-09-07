/**
 * Created by zdx on 2016/9/7.
 */
var haloObj = function () {
    this.x = [];
    this.y = [];
    this.r = [];
    this.alive = [];
    this.num = 5;
}
haloObj.prototype.init = function () {
    for(var i=0;i<this.num;i++){
        this.x[i] = 0;
        this.y[i] = 0;
        this.alive[i] = false;
        this.r[i] = 0;
    }
}
haloObj.prototype.draw = function () {
    cxt1.save();
    cxt1.lineWidth = 2;
    cxt1.shadowBlur = 10;
    cxt1.shadowColor = "rgb(255,165,0)";
    for(var i=0;i<this.num;i++){
        if(this.alive[i]){
            this.r[i] += deltaTime *0.05;
            if(this.r[i]>80){
                this.alive[i] = false;
                continue;
            }
            var alpha = 1 - this.r[i] / 80;

            cxt1.beginPath();
            cxt1.arc(this.x[i],this.y[i],this.r[i],0,2*Math.PI);
            cxt1.strokeStyle = "rgba(255,165,0,"+alpha+")"
            cxt1.stroke();
            cxt1.closePath();

        }
    }
    cxt1.restore();

}
haloObj.prototype.born = function (x,y) {
    for(var i=0;i<this.num;i++){
        if(!this.alive[i]){
            this.x[i] = x;
            this.y[i] = y;
            this.r[i] = 10;
            this.alive[i] = true;
            return;

        }
    }

}