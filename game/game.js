//////////////////////////////////////////////////////////Declarations//////////////////////////////////////////////////////////////////////
const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');
const score = document.getElementById("score");
const gameover = document.getElementById("gameover");
const youwin = document.getElementById("youwin");
const restart = document.getElementById("restart");
const text = document.getElementById("text");
const pName = document.getElementById("pName");
const charDisp = document.getElementById("char")


var lvl=0;
var speed=0;

////////////////////////////////////////////////////////////////DrawGame//////////////////////////////////////////////////////////////////////


function draw(level){ 

    levelChosen(level)

    fly.play();
    
    context.drawImage(background,0,0,1000,649);
    for( var i=0; i<pipes.length;i++){
        
        
        charac.avoidMarginCollision();
        new pipe().drawPipes(pipes[i].x,pipes[i].y);

        if(charac.nextToPipe(pipes[i].x) && (charac.hitTopPipe(pipes[i].y) || charac.hitBottomPipe(pipes[i].y))){
            gameOver();
        }

        new pipe().createNewPipe(pipes[i].x , lvl);
        charac.calculateScore(pipes[i].x);
        pipes[i].x-=speed;
    }

        context.drawImage(forground,0,565)



        char.src="images/char"+charID+"/frame_"+Math.ceil(cIter/6)+".png";
        cIter=(cIter%60)+1;
        context.drawImage(char,charac.x,charac.y);
    

    charac.y+=dirYUp;
    charac.y+=dirYDown;
        if(!GAME_OVER){
            
        requestAnimationFrame(draw);
    }
}

function levelChosen(level){
    switch(level){
        case 1:
            lvl = 350;
            speed = 5;
            break;
        case 2:
            lvl = 450;
            speed = 5;
            break;
        case 3:
            lvl = 500;
            speed = 10;
            break;
        case 4:
            lvl = 600;
            speed = 10;
            break;
        default:
    }
}


var pipes=[new pipe()];
var cIter=1;
var levelPassed = localStorage.getItem("level");
var charID = localStorage.getItem("characterId");
if(charID == 2){
    charDisp.src="https://talenthouse-res.cloudinary.com/image/upload/c_limit,w_500,h_500/v1/articles/dkxeiedwwcawxu0sijo7";
}
console.log(charID);
draw(parseInt(levelPassed));