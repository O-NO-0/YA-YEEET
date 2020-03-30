var allPlayers
var distance = 1000000000000000000-1000000000000000000;
var cars,car1,car2,car3,car4
var database

var gameState  = 0;
var playerCount ;
var form,player,game;
function setup(){
    database = firebase.database();
    createCanvas(displayWidth,displayHeight);
    game = new Game ();
    game.getState();
    game.start();

}

function draw(){
    
    background("white");
   if (playerCount === 4){
   game.update(1);    
   }
if (gameState === 1){
clear();
game.play();
}
}

