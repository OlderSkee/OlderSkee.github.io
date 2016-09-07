/**
 * Created by zdx on 2016/9/6.
 */

var can1;
var can2;

var cxt1;
var cxt2;

var lastTime;
var deltaTime;


var canWidth;
var canHeight

var ane;
var fruit;

var mom;
var baby;

var mx;
var my;

var data;
var wave;
var halo;
var dust;

var gameStart = false;

document.body.onload = game;

function game(){
    init();
    lastTime = Date.now();
    deltaTime = 0;
    gameloop();
}
function init() {
    can1 = document.getElementById("canvas1"); //z = 1 外面的
    can2 = document.getElementById("canvas2"); // z = 0  里面的

    cxt1 = can1.getContext("2d");
    cxt2 = can2.getContext("2d");

    can1.setAttribute("width",client().width)
    can1.setAttribute("height",client().height)
    can2.setAttribute("width",client().width)
    can2.setAttribute("height",client().height)


    can1.addEventListener("click", onMouseMove, false)

    canWidth = can1.width;
    canHeight = can1.height;


    ane = new aneObj();
    ane.init();

    fruit = new fruitObj();
    fruit.init();

    mom = new momObj();
    mom.init();

    baby = new babyObj();
    baby.init();

    mx = canWidth * 0.5;
    my = canHeight * 0.5;

    data = new dataObj();
    data.init();

    wave = new waveObj();
    wave.init();

    halo = new haloObj();
    halo.init();

    dust = new dustObj();
    dust.init()


}
function gameloop(){

    window.requestAnimationFrame(gameloop);
    var nowTime = Date.now();
    deltaTime = nowTime - lastTime;
    lastTime = nowTime;
    if(deltaTime>30){
        deltaTime = 30;
    }
    //bgPic.onload = function () {

    drawBackground();


    //}
    ane.draw();
    fruitMonitor()
    fruit.draw();

    cxt1.clearRect(0,0,canWidth,canHeight)
    if(gameStart){
        mom.draw();
        baby.draw();
        momFruitsCollision();
        momBabyCollision();

    }


    data.draw();
    wave.draw();
    halo.draw();
    dust.draw();
}
function onMouseMove(e){
    if(!data.gameOver){
        mx = e.clientX - can1.getBoundingClientRect().left;
        my = e.clientY - can1.getBoundingClientRect().top;

    }
}