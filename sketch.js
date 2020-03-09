var box,database;
var position;

function setup(){
    database = firebase.database();
    createCanvas(400,400);
    box = createSprite(200,200,10,10);
    box.shapeColor = "red";

    var boxpos = database.ref('ball/position');
    boxpos.on("value",readP,showERROR);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        Wposition(-3,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        Wposition(3,0);
    }
    else if(keyDown(UP_ARROW)){
        Wposition(0,-3);
    }
    else if(keyDown(DOWN_ARROW)){
        Wposition(0,+3);
    }
    drawSprites();
}

function Wposition(x,y){
database.ref('ball/position').set({
'x':position.x+x, 
'y':position.y+y   
})    
}
function readP(data){
position = data.val();
box.x = position.x;
box.y = position.y;
}
function showERROR(){
    console.log("dammit");


}
