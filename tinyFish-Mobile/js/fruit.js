/**
 * Created by zdx on 2016/9/6.
 */
var fruitObj = function () {
    this.alive=[];
    this.x = [];
    this.y = [];
    this.l = [];
    this.spd = [];
    this.orange = new Image();
    this.blue = new Image();
    this.green = new Image();
    this.colour = new Image();
    this.num = 30;
    this.fruitType = [];
    this.aneNo = [];
}
fruitObj.prototype.init = function () {
    for(var i=0;i<this.num;i++) {
        this.alive[i] = false;
        this.x[i] = 0;
        this.y[i] = 0;
        this.aneNo[i] = 0;
        this.spd[i] = Math.random()*0.02 + 0.005
        this.fruitType[i] = "";
        //this.born(i);
    }
    this.orange.src = "./src/fruit.png";
    this.blue.src = "./src/blue.png";
    this.green.src = "./src/green.png";
    this.colour.src = "./src/colour.png";

}
fruitObj.prototype.draw = function () {
    for(var i=0; i<this.num;i++) {

            if(this.alive[i]){

                    if(this.fruitType[i] == "blue"){
                        var pic = this.blue;
                    }else if(this.fruitType[i] == "orange"){
                        var pic = this.orange;
                    }else if(this.fruitType[i] == "green"){
                        var pic = this.green;
                    }else{
                        var pic = this.colour;
                    }

                if(this.l[i]<=15){
                    this.l[i] += this.spd[i]*deltaTime;
                    this.x[i] = ane.headx[this.aneNo[i]];
                    this.y[i] = ane.heady[this.aneNo[i]];

                }else{
                    if(data.score<3000){
                        this.y[i] -= this.spd[i]*5*deltaTime;
                    }else if(data.score>3000 && data.score<6000){
                        this.y[i] -= this.spd[i]*7*deltaTime;
                    }else{
                        this.y[i] -= this.spd[i]*10*deltaTime;
                    }
                }
                cxt2.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
                //图片            起始x                  起始y                    图片大小
                if(this.y[i] < 0){
                    this.alive[i] = false;
                }

        }
    }

}
fruitObj.prototype.born = function (i) {
    //var aneID = Math.floor(Math.random() * ane.num);
    //this.x[i] = ane.headx[aneID];
    //this.y[i] = ane.heady[aneID];
    this.aneNo[i] = Math.floor(Math.random() * ane.num); //出生的海葵的id
    this.l[i] = 0;
    this.alive[i] = true;

    var ran = Math.random();
    if(data.score<3000){
        if(ran<0.2){
            this.fruitType[i] = "blue";
        }else if(ran<=0.7&&ran>=0.2){
            this.fruitType[i] = "orange";
        }else if(ran<=0.85&&ran>0.7){
            this.fruitType[i] = "green";
        }else{
            this.fruitType[i] = "colour";
        }
    }else if(data.score>3000 && data.score<6000){
        if(ran<0.2){
            this.fruitType[i] = "blue";
        }else if(ran<=0.55&&ran>=0.2){
            this.fruitType[i] = "orange";
        }else if(ran<=0.9&&ran>0.55){
            this.fruitType[i] = "green";
        }else{
            this.fruitType[i] = "colour";
        }
    }else{
        if(ran<0.1){
            this.fruitType[i] = "blue";
        }else if(ran<=0.50&&ran>=0.2){
            this.fruitType[i] = "orange";
        }else if(ran<=0.95&&ran>0.5){
            this.fruitType[i] = "green";
        }else{
            this.fruitType[i] = "colour";
        }
    }

}

fruitObj.prototype.dead = function (i) {

    //if(this.y[i] < canHeight- ane.len[i] - this.l[i]/2){
        this.alive[i] = false;
    //}
}

function fruitMonitor(){
    var allnum = 0;
    for (var i = 0; i < fruit.num; i++) {

        if (fruit.alive[i]){
            allnum++;
        }
    }
    if(allnum<15){
        sendFruit();
        return;
    }

}
function sendFruit(){
    for(var i=0;i<fruit.num;i++){
        if(!fruit.alive[i]){
            fruit.born(i)
            return;
        }
    }
}