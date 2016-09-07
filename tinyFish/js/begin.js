/**
 * Created by zdx on 2016/9/7.
 */

document.body.onload = begin();

function begin(){
    var btn1 = document.getElementById("btn1");

    var cover =document.getElementById("beginBox")

        btn1.addEventListener("click",function () {

            cover.style.display = "none";
            gameStart =true;
            init()

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

    })

}