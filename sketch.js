var backImage,backgr;
var player, player_running;
var ground,ground_img;
var obstacle_img
var bananagroup, bananaimage;
var score=0;
function preload(){
  backImage=loadImage("jungle.jpg")
  player_running=loadAnimation("Monkey_01.png","Monkey_02.png",
                           "Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07 .png","Monkey_08.png","Monkey_09.png","Monkey_10.png"
)
 bananaimage=loadImage("banana.png")
obstacle_img=loadImage("stone.png")
}


function setup() {
  createCanvas(400,400);
   backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  ground = createSprite(400,350,800,10);
  ground.velocityX=-4
  ground.x=ground.width/2
   ground.visible=false;
  
  
player=createSprite(100,310,50,50)
player.scale=0.1;
  player.addAnimation("player1",player_running)
  bananagroup=new Group();
  

  
  fruitgroup=new Group()
  enemygroup=new Group()
  score=0;

}

function draw() {
  background("white");

  if(ground.x<0) {
    ground.x=ground.width/2;
  }  
    if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
   if(bananagroup.isTouching(player)){
      bananagroup.destroyEach();
    score = score + 2;
    }
  
  if(player.isTouching(enemygroup)){
    player.scale=0.08
  }
  
  
  
  banana();
  stoe();
  
  
  player.velocityY=player.velocityY+0.8
  player.collide(ground)
  
  switch(score){
    case 10:player.scale=0.12;
      break;
      case 20:player.scale=0.14;
      break;
      case 30:player.scale=0.16;
      break;
      case 40:player.scale=0.18;
      break;
      default:break;
 }
 
  if(keyDown("space") ) {
      player.velocityY = -12;
    }
  
drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: ", 500,50);
}
 function banana(){
  if(frameCount%80===0){
    var banana=createSprite(400,365,10,40)
      
      banana.velocityX=-7
    banana.y=random(120,200)
    banana.addImage(bananaimage);
   // banana.addImage()
    banana.velocityX=-5
    banana.lifetime=70;
    banana.scale=0.1
    bananagroup.add(banana) 
   player.depth=banana.depth+1
    bananagroup.add(banana)
  }
}
var enemygroup, obstacle_img;




function stoe(){
if(frameCount % 300 === 0) {
    var obstacle = createSprite(800,350,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacle_img);
    
    //assign scale and lifetime to the obstacle     
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
    
    //add each obstacle to the group
    enemygroup.add(obstacle);
  }
}
