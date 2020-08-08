var movingRect, fixedRect, box1,box2

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  fixedRect = createSprite(200,200,100,100);
  box1 = createSprite(250,300,50,50);
  box1.velocityX = 4
  box1.shapeColor = "blue"
  box2 = createSprite(400,300,75,75);
  box2.velocityX = -4
  box2.shapeColor = "white"
}

function draw() {
  background(0);  
movingRect.y = World.mouseY
movingRect.x = World.mouseX

if(movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2
  && fixedRect.x-movingRect.x < movingRect.width/2 + fixedRect.width/2
  && movingRect.y-fixedRect.y < movingRect.height/2 + fixedRect.height/2
  && fixedRect.y-movingRect.y < movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor = "red"
    fixedRect.shapeColor = "red"
  
    
}else{
  movingRect.shapeColor = "green"
fixedRect.shapeColor = "green"
}
if(box1.x-box2.x < box1.width/2 + box1.width/2
  && box2.x-box1.x < box1.width/2 + box1.width/2){
box1.velocityX = -1*box1.velocityX
box2.velocityX = -1*box2.velocityX
}
if(box1.y-box2.y < box1.height/2 + box2.height/2
  && box2.y-box1.y < box1.height/2 + box2.height/2){
    box1.velocityY = -1*box1.velocityY
    box2.velocityY = -1*box2.velocityY
  }
  drawSprites();
}