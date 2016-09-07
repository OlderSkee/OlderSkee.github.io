/**
 * Created by zdx on 2016/9/7.
 */

document.body.onload = begin();

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

function begin(){
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");

    var cover =document.getElementById("beginBox")

    var beginPic = document.getElementById("beginPic");
    beginPic.setAttribute("width",client().width)
    beginPic.setAttribute("height",client().height)



    btn1.style.fontSize= client().width*0.03+"px"
    btn2.style.fontSize= client().width*0.03+"px"

    console.log(btn1.style.fontSize)

        btn1.addEventListener("click",function () {

            cover.style.display = "none";
            gameStart =true;
            init();
        console.log("Made By OlerSkee")
        })


}
function again(){
    baby.babyBodyCount = 0;
    gameStart = false;

    var btn2 = document.getElementById("btn2");

    var timer = setTimeout(function () {
        btn2.style.display = "block";
        clearTimeout(timer)
    },1000)

    btn2.addEventListener("click",function () {
        this.style.display = "none"

        gameStart =true;
        init()
        console.log("Made By OlerSkee")

    })

}

function client(){
    if(window.innerWidth != null) {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }else if(document.compatMode === "CSS1Compat") {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }
    return {
        width : document.body.clientWidth,
        heigth: document.body.clientHeight
    }
}


