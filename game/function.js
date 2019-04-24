function characters(x,y){
    this.x= x;
    this.y = y;

     this.hitMargins = function(){
        if(this.y >= canvas.height-forground.height*2 || this.y < 0){
            return true;
        }else{
            return false;
        }
    };

    this.nextToPipe = function(pipe_x_coor){
        if(this.x >=pipe_x_coor+pipeUp.width-char.width*2 && this.x<=pipe_x_coor+pipeUp.width){
            return true;
        }else{
            return false;
        }
    };
    this.hitTopPipe = function(pipe_y_coor){
        if(this.y<pipe_y_coor+pipeDown.height){
            return true;
        }else{
            return false;
        }
    };
    this.hitBottomPipe = function(pipe_y_coor){
        if( this.y+char.height>pipe_y_coor+gap){
            return true;
        }else{
            return false;
        }
    }
    this.avoidMarginCollision=function(){
        if(this.hitMargins()){
            dirYDown=0;
            dirYUp=0;
            if(this.y <= 0){
                dirYDown++;
            }else{
                dirYUp--;
            }
        }
    }
    this.calculateScore = function(pipe_x_coor){
    
        if(this.x ==pipe_x_coor+pipeUp.width*2){
            new_score++;
            score.innerHTML = "<strong>SCORE: "+new_score+"</strong>";
        }
    }
    
}


var randYCoor = function(){return Math.ceil(-350*Math.random())};

function pipe(){
    this.x = canvas.width;
    this.y = randYCoor();

    this.createNewPipe = function(xCoor, lvl){
        if(xCoor == lvl){
            pipes.push(new pipe());
        } 
    }
    this.drawPipes = function(xCoor,yCoor){
        context.drawImage(pipeDown,xCoor,yCoor);
        context.drawImage(pipeUp,xCoor,yCoor+gap);
    }
}

////////////////////////////////////////////////////////////////////
restart.addEventListener("click", function(){
    location.reload(); // reload the page
});

document.body.addEventListener("keydown",function(e){
    if(e.keyCode==32){
        dirYDown=0;
        dirYUp=0;
    }else if(e.keyCode==38){
        dirYDown=0;
        dirYUp-=2;
    }else if(e.keyCode==40){
        dirYUp=0;
        dirYDown+=2;
    }
        
});

///////////////////////////////////////////////////////////////////////////

function showYouWin(){

    var highscore = localStorage.getItem("Bscore");
    if(highscore==null){
        highscore=0;
    }
    if(highscore !== null && new_score > highscore){
            localStorage.setItem("Bscore", new_score); 
            highscore=new_score;
            restart.innerHTML = "New High Score!<br> Your Score : "+new_score+"<br> Play Again?!";     
    }
    text.innerHTML = "<strong>Best Score : "+highscore+"</strong><br><strong>Your Score : "+new_score+"</strong>";
    gameover.style.display = "block";
    youwon.style.display = "block";
}

function gameOver(){
    fly.pause();
    lose.play();
    showYouWin();
    GAME_OVER = true;
    return;
}
///////////////////////////////////////////////////////////////
