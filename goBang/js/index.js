/**
 * Created by zdx on 2016/9/8.
 */
reStart();
function reStart() {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height)
    var me = true;
    var over = false;
//赢法数组
    var wins = [];
//赢法的统计数组
    var myWin = [];
    var computerWin = [];

    var allStep = [];

    for (var i = 0; i < 15; i++) {
        allStep[i] = [];
        for (var j = 0; j < 15; j++) {
            allStep[i][j] = 0;
        }
    }

    for (var i = 0; i < 15; i++) {
        wins[i] = [];
        for (var j = 0; j < 15; j++) {
            wins[i][j] = [];
        }
    }

    var count = 0;
    for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 11; j++) {
            //wins[0][0][0] = true
            //wins[0][1][0] = true
            //wins[0][2][0] = true
            //wins[0][3][0] = true
            //wins[0][4][0] = true
            for (var k = 0; k < 5; k++) {
                wins[i][j + k][count] = true;
            }
            count++;
        }
    }
    for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 11; j++) {
            for (var k = 0; k < 5; k++) {
                wins[j + k][i][count] = true;
            }
            count++;
        }
    }

    for (var i = 0; i < 11; i++) {
        for (var j = 0; j < 11; j++) {
            for (var k = 0; k < 5; k++) {
                wins[i + k][j + k][count] = true;
            }
            count++;
        }
    }

    for (var i = 0; i < 11; i++) {
        for (var j = 14; j > 3; j--) {
            for (var k = 0; k < 5; k++) {
                wins[i + k][j - k][count] = true;
            }
            count++;
        }
    }
    console.log("Made by OlderSkee")


    for (var i = 0; i < count; i++) {
        myWin[i] = 0;
        computerWin[i] = 0;
    }

    for (var i = 0; i < 15; i++) {
        context.beginPath();

        context.strokeStyle = "#CCC"
        context.lineWidth = 1;

        context.moveTo(15 + i * 30, 15)
        context.lineTo(15 + i * 30, 435)

        context.moveTo(15, 15 + i * 30)
        context.lineTo(435, 15 + i * 30)

        context.stroke();
        context.closePath();

    }


    canvas.addEventListener("click", goStep);


    function goStep(e) {
        if (over) {
            return;
        }
        if (!me) {
            return;
        }
        var x = e.clientX - canvas.getBoundingClientRect().left;
        var y = e.clientY - canvas.getBoundingClientRect().top;

        i = Math.floor(x / 30);
        j = Math.floor(y / 30);

        if (allStep[i][j] == 0) {
            drawStep(i, j, me)
            allStep[i][j] = 1;

            for (var k = 0; k < count; k++) {
                if (wins[i][j][k]) {
                    myWin[k]++;
                    computerWin[k] = 6;

                    if (myWin[k] == 5) {
                        alert("你赢了");
                        over = true;
                    }
                }
            }
            if (!over) {
                me = !me;
                computerAI();
            }

        }
    }

    function computerAI() {
        var myScore = [];
        var computerScore = [];
        var max = 0;
        var u = 0;
        var v = 0;
        for (var i = 0; i < 15; i++) {
            myScore[i] = [];
            computerScore[i] = [];
            for (var j = 0; j < 15; j++) {
                myScore[i][j] = 0;
                computerScore[i][j] = 0;
            }
        }

        for (var i = 0; i < 15; i++) {
            for (var j = 0; j < 15; j++) {
                if (allStep[i][j] == 0) {
                    for (var k = 0; k < count; k++) {
                        if (wins[i][j][k]) {

                            if (myWin[k] == 1) {
                                myScore[i][j] += 200;
                            } else if (myWin[k] == 2) {
                                myScore[i][j] += 400;
                            } else if (myWin[k] == 3) {
                                myScore[i][j] += 2000;
                            } else if (myWin[k] == 4) {
                                myScore[i][j] += 10000;
                            }
                            if (computerWin[k] == 1) {
                                computerScore[i][j] += 220;
                            } else if (computerWin[k] == 2) {
                                computerScore[i][j] += 420;
                            } else if (computerWin[k] == 3) {
                                computerScore[i][j] += 2000;
                            } else if (computerWin[k] == 4) {
                                computerScore[i][j] += 50000;
                            }
                        }
                    }
                    if (myScore[i][j] > max) {
                        max = myScore[i][j];
                        u = i;
                        v = j;
                    } else if (myScore[i][j] == max) {
                        if (computerScore[i][j] > computerScore[u][v]) {
                            u = i;
                            v = j;
                        }
                    }

                    if (computerScore[i][j] > max) {
                        max = computerScore[i][j];
                        u = i;
                        v = j;
                    } else if (myScore[i][j] == max) {
                        if (myScore[i][j] > myScore[u][v]) {
                            u = i;
                            v = j;
                        }
                    }
                }
            }
        }
        drawStep(u, v, false)
        allStep[u][v] = 2;
        for (var k = 0; k < count; k++) {
            if (wins[u][v][k]) {
                computerWin[k]++;
                myWin[k] = 6;

                if (computerWin[k] == 5) {
                    alert("你输了");
                    over = true;
                }
            }
        }
        if (!over) {
            me = !me;
        }

    }

    function drawStep(i, j, me) {
        context.beginPath();

        context.arc(15 + i * 30, 15 + j * 30, 14, 0, 2 * Math.PI)
        var oBlack = context.createRadialGradient(15 + i * 30, 15 + j * 30, 12, 15 + i * 30, 15 + j * 30, 1);
        oBlack.addColorStop(0, "#000")
        oBlack.addColorStop(1, "#ccc");

        var oWhite = context.createRadialGradient(15 + i * 30, 15 + j * 30, 12, 15 + i * 30, 15 + j * 30, 1);
        oWhite.addColorStop(0, "#ccc")
        oWhite.addColorStop(1, "#fff")

        if (me) {
            context.fillStyle = oBlack;
        } else {
            context.fillStyle = oWhite;
        }
        context.fill();

        context.closePath();
    }


    var last = document.getElementById("last");

    last.addEventListener("click",computerFirst)

    function computerFirst() {

        for (var i = 0; i < 15; i++) {
            for (var j = 0; j < 15; j++) {
                if (allStep[i][j] != 0) {
                    last.removeEventListener("click", computerFirst);
                    return;
                }
            }
        }
        drawStep(7,7,false);
        allStep[7][7] = 2;

    };

}

var btn = document.getElementById("btn");

btn.onclick = function(){

    reStart();

};
