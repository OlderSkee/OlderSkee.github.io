/**
 * Created by zdx on 2016/9/6.
 */
function momFruitsCollision(){
    if(!data.gameOver){
        for(var i=0;i<fruit.num;i++){

            if(fruit.alive[i]){

                var l =calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y)

                if(l<900){
                    fruit.dead(i);
                    data.fruitNum++ ;

                    mom.momBodyCount++;

                    wave.born(fruit.x[i],fruit.y[i]);
                    if(mom.momBodyCount>7) {
                        mom.momBodyCount = 7;
                    }


                    if(fruit.fruitType[i] == "blue"){

                        data.double = 2;
                        data.blueNum++;

                    }else if(fruit.fruitType[i] == "orange"){

                        data.double = 1;
                        data.orangeNum++;

                    }else if(fruit.fruitType[i] == "colour"){
                        data.double = 1;
                        data.orangeNum++;

                        for(var i=0;i<fruit.num;i++)
                             if(fruit.fruitType[i]=="green"){
                                 fruit.alive[i] = false;
                             }

                    }else{
                        data.double = -1;
                        data.gameOver = true;
                        again();
                    }

                }
            }
        }

    }

}

function momBabyCollision() {

    if (data.fruitNum > 0 && !data.gameOver) {
        var l = calLength2(mom.x, mom.y, baby.x, baby.y)
        if (l < 900) {
            baby.babyBodyCount = 0;
            mom.momBodyCount = 0;
            data.addScore();
            halo.born(baby.x,baby.y)
        }

    }
}