var ship;
var shipImg1;
var seaImg1;
var sea;

function preload(){
seaImg1 = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}
function setup(){
  createCanvas(400,400);
  sea = createSprite(0,0,400,400);
  sea.addImage("sea",seaImg1);
  sea.velocityX = -8;
  ship = createSprite(110,200,100,100);
  ship.addAnimation("swim",shipImg1);
  ship.scale = 0.3
}


function draw() {
  background("blue");
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
  drawSprites();
}