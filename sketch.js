function preload(){
  bg = loadImage('sea.png')
  shipAnimation = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200,200)
  sea.scale=0.3;
  sea.addImage(bg)
  sea.velocityX = -3;
  sea.x = sea.width/2;
  

  ship = createSprite(100,200)
  ship.addAnimation("ship", shipAnimation)
  ship.scale=0.2;
 
}

function draw() {
  background("red");

  if(sea.x<0){
    sea.x = sea.width/2;
  }

  drawSprites();
}