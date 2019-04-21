const background = new Image(),
forground = new Image(),
char = new Image(),
pipeUp = new Image(),
pipeDown = new Image();

var fly=new Audio();
var lose=new Audio();

var charID = localStorage.getItem("characterId");

console.log(charID);
background.src="images/bg2.jpg";
forground.src="images/fg.jpg"
pipeUp.src="images/pipeup.png";
pipeDown.src="images/pipedown.png";
char.src="images/char"+charID+"/frame_1.png";
fly.src="audios/Game-Menu_Looping.mp3";
lose.src="audios/GameOVer.mp3";

var dirYUp = 0;
var dirYDown = 0;
var gap = 550;
var new_score = 0;
var GAME_OVER =false;
var charac = new characters(50,300);
var playerName = (localStorage.getItem("storageName"));
pName.innerHTML = "<strong>"+playerName+"</strong>";



