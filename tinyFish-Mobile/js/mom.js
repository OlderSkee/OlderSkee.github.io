/**
 * Created by zdx on 2016/9/6.
 */
var momObj = function () {
    this.x;
    this.y;
    this.angle;
    //this.bigEye = new Image();
    //this.bigBody = new Image();
    //this.bigTail = new Image();

    this.momTail = [];
    this.momTailTimer = 0;
    this.momTailCount = 0;


    this.momEye = [];
    this.momEyeTimer = 0;
    this.momEyeCount = 0;
    this.momEyeInterval = 1000;

    this.momBodyOra = [];
    this.momBodyBlue = [];
    this.momBodyCount = 0;



}

momObj.prototype.init = function () {
    this.x = canWidth * 0.5;
    this.y = canHeight * 0.5;
    this.angle = 0;
    //this.bigEye.src = "./src/bigEye0.png";
    //this.bigBody.src = "./src/bigSwim0.png";
    //this.bigTail.src = "./src/bigTail0.png";
    for (var i=0;i<8;i++){
        this.momTail[i] = new Image();
        this.momTail[i].src = "./src/bigTail" + i + ".png";
    }

    for (var i=0;i<2;i++){
        this.momEye[i] = new Image();
        this.momEye[i].src = "./src/bigEye" + i + ".png";
    }
    for(var i=0;i<8;i++){
        this.momBodyOra[i] = new Image();
        this.momBodyBlue[i] = new Image();
        this.momBodyOra[i].src = "./src/bigSwim" + i + ".png";
        this.momBodyBlue[i].src = "./src/bigSwimBlue" + i + ".png";

    }

}
momObj.prototype.draw = function () {

    this.x = Math.floor(lerpDistance(mx,this.x,0.975));
    this.y = Math.floor(lerpDistance(my,this.y,0.975));
    var deltaX = mx - this.x;
    var deltaY = my - this.y;
    var beta = Math.atan2(deltaY,deltaX)+Math.PI;
    this.angle = lerpAngle(beta,this.angle,0.5)

    this.momTailTimer += deltaTime;
    if(this.momTailTimer>50){
        this.momTailCount = (this.momTailCount + 1) % 8;
        this.momTailTimer %= 50;
    }

    this.momEyeTimer += deltaTime;
    if(this.momEyeTimer>this.momEyeInterval){
        this.momEyeCount = (this.momEyeCount+1) % 2;
        this.momEyeTimer %= this.momEyeInterval;

        if(this.momEyeCount == 0){
            this.momEyeInterval = Math.random()*1500 + 2000;
        }else{
            this.momEyeInterval = 200;
        }
    }


    cxt1.save();

    cxt1.translate(this.x,this.y)
    cxt1.rotate(this.angle)

    cxt1.beginPath();

    var momTailCount = this.momTailCount
    cxt1.drawImage(this.momTail[momTailCount],-this.momTail[momTailCount].width *0.5+30,-this.momTail[momTailCount].height*0.5)

    var momBodyCount = this.momBodyCount;
    if(data.double == 1){
        cxt1.drawImage(this.momBodyOra[momBodyCount],-this.momBodyOra[momBodyCount].width *0.5,-this.momBodyOra[momBodyCount].height*0.5)

    }else if(data.double == 2){
        cxt1.drawImage(this.momBodyBlue[momBodyCount],-this.momBodyBlue[momBodyCount].width *0.5,-this.momBodyBlue[momBodyCount].height*0.5)

    }else{
        cxt1.drawImage(this.momBodyBlue[0],-this.momBodyBlue[0].width *0.5,-this.momBodyBlue[0].height*0.5)
    }

    var momEyeCount = this.momEyeCount;
    cxt1.drawImage(this.momEye[momEyeCount],-this.momEye[momEyeCount].width *0.5,-this.momEye[momEyeCount].height*0.5)

    cxt1.closePath();

    cxt1.restore();
}