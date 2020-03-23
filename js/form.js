class Form{
constructor(){

}

display(){
var title = createElement('h5')
title.html("OH GOD NO PLE---,its just a car game nothing else OK")
title.position(20,0);

var input = createInput("Name")

var button  = createButton('START')
input.position(130,160);
button.position(70,160);
button.mousePressed(function(){
input.hide();
button.hide();
var name = input.value();
playerCount += 1 ;
player.update(name);
player.updateCount(playerCount)
var greeting = createElement('h2');
greeting.html("STOP H--,on nothing ok,nothing"+name)
greeting.position(60,160)
})


}




}