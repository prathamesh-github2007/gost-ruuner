var gost,gostImage;
var tower,towerImage;
var door,doorImage
var climber,climberImage;
var spooky;
var  doorGroup, climberGroup, blockGroup;
var gameState="play"

function preload(){
  gostImage=loadImage("ghost-standing.png")
  towerImage=loadImage("tower.png")
  doorImage=loadImage("door.png")
  climberImage=loadImage("climber.png")
  spooky=loadSound("spooky.wav")
}

function setup(){
 createCanvas(600,600);
  tower=createSprite(300,300,10,30)  
  tower.addImage("towers",towerImage);
  
  gost=createSprite(300,300,10,30)  
  gost.addImage("gost",gostImage);
  gost.scale=0.3
  doorGroup=createGroup()
  climberGroup=createGroup()
  blockGroup=createGroup()
}
function draw(){
  background("black");
  if(gameState==="play"){
     if(keyDown("space")){
   gost.velocityY=-4
    
    
   }
  if(gost.isTouching(climberGroup)){
   gost.collide(climber)
  }
  
 
    
  gost.velocityY=gost.velocityY+1 
  tower.velocityY=4    
  if(tower.y>400){
  tower.y=300      
    
    
  }
  if(keyDown("right")){
   gost.velocityX=3; 
    
  }
    if(keyDown("left")){ 
       gost.velocityX=-3; 
    
  }
  doors()
   if(gost.isTouching(blockGroup)||gost.y>600){
    gameState="end"
     gost.destroy()
     tower.destroy()
    
  }
    
  }
  else if(gameState==="end"){
    
     textSize(30)
    text("GAMEOVER",300,300 )
    
    
  }


drawSprites()  
}
function doors(){
  if(frameCount%200===0){
  door=createSprite(200,50,10,10);
  door.x=Math.round(random(100,400))
  door.addImage("doo",doorImage)
  door.velocityY=2
  climber=createSprite(200,120,10,10);
  climber.addImage("coo",climberImage)
  climber.velocityY=2
  climber.x=door.x
  door.lifetime=600
  climber.lifetime=600
  var block=createSprite(200,120,50,10);
    block.velocityY=2
  block.x=door.x 
  block.debug=true 
  doorGroup.add(door)
  climberGroup.add(climber)  
  blockGroup.add(block)  
  }
}

