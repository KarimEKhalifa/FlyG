console.log("Hello")
//////////////////////////////////////////////////////////Declarations//////////////////////////////////////////////////////////////////////
var canvas = document.getElementById("canvas");
var score = document.getElementById("score");
var context = canvas.getContext('2d');

var background = new Image();
var forground = new Image();
var char = new Image();
var pipeUp = new Image();
var pipeDown = new Image();

background.src="images/bg2.jpg";
forground.src="images/fg.jpg"
char.src="images/supps.png";
pipeUp.src="images/pipeup.png";
pipeDown.src="images/pipedown.png";

//////////////////////////////////////////////////////////Initialization//////////////////////////////////////////////////////////////////////
var Sup_x = 50;
var Sup_y = 300;
var dirYUp = 0;
var dirYDown = 0;
var gap = 550;
var new_score = 0;
var randYCoor = function(){return Math.ceil(-350*Math.random())};


var pipes=[];
pipe1={
    x:canvas.width,
    y:randYCoor(),
};
pipes.push(pipe1);

///////////////////////////////////////////////////////Event Listeners//////////////////////////////////////////////////////////////////
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


//////////////////////////////////////////////////////collision functions///////////////////////////////////////////////////////////////
function hitMargins(){
    if(Sup_y >= canvas.height-forground.height*2 || Sup_y < 0){
        return true;
    }else{
        return false;
    }
}

function nextToPipe(pipe_x_coor){
    if(Sup_x>=pipe_x_coor+pipeUp.width-char.width*2 && Sup_x<=pipe_x_coor+pipeUp.width){
        return true;
    }else{
        return false;
    }
}

function hitTopPipe(pipe_y_coor){
    if(Sup_y<pipe_y_coor+pipeDown.height){
        return true;
    }else{
        return false;
    }
}

function hitBottomPipe(pipe_y_coor){
    if( Sup_y+char.height>pipe_y_coor+gap){
        return true;
    }else{
        return false;
    }
}

//////////////////////////////////////////////////////////////Game//////////////////////////////////////////////////////////////////////
function calculateScore(pipe_x_coor){
    if(Sup_x==pipe_x_coor+pipeUp.width){
        new_score++;
        score.innerHTML = "<strong>SCORE: "+new_score+"</strong>";
    }
}
function draw(){

    context.drawImage(background,0,0,1300,649);


    for( var i=0; i<pipes.length;i++){
        
        context.drawImage(pipeDown,pipes[i].x,pipes[i].y);
        context.drawImage(pipeUp,pipes[i].x,pipes[i].y+gap);
        pipes[i].x-=5;
        
        if(hitMargins()){
            dirYDown=0;
            dirYUp=0;
            if(Sup_y <= 0){
                dirYDown++;
            }else{
                dirYUp--;
            }
        }
        if(nextToPipe(pipes[i].x)&& (hitTopPipe(pipes[i].y) || hitBottomPipe(pipes[i].y))){
           location.reload();
        }

        pipe ={
            x:canvas.width,
            y:randYCoor(),
        }
        if(pipes[i].x == 950){
            pipes.push(pipe);
        } 

       calculateScore(pipes[i].x);
    }



    context.drawImage(forground,0,575)
    context.drawImage(char,Sup_x,Sup_y);


     Sup_y+=dirYUp;
     Sup_y+=dirYDown;
    requestAnimationFrame(draw);
}
draw();