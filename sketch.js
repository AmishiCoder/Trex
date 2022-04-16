var trex, trex_running, trex_collided;
var ground_2, ground, invisibleGround, groundImage;
var cloud, cloudImage;
var obstacle, obstacleImage1, obstacleImage2, obstacleImage3, obstacleImage4, obstacleImage5, obstacleImage6
var score = 0;

function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage ("cloud.png");
  obstacleImage1 = loadImage ("obstacle1.png");
  obstacleImage2 = loadImage ("obstacle2.png");
  obstacleImage3 = loadImage ("obstacle3.png");
  obstacleImage4 = loadImage ("obstacle4.png");
  obstacleImage5 = loadImage ("obstacle5.png");
  obstacleImage6 = loadImage ("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  
  //create a trex sprite
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running",trex_running);
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
  
  //create ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width/2;

  //creating ground_2 sprite
  ground_2 = createSprite(200, 195, 400, 20);
  ground_2.visible = false;
}

function draw() {
  background(255);
  text ("Score:" + score, 500, 50);
  score += Math.round (frameCount/100);
  
  ground.velocityX = -2
  console.log(ground.x)
  
  if (ground.x<0){
    ground.x = ground.width/2;
  }
  
  //jumping the trex on space key press
  if(keyDown("space") && trex.y > 150) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
 
 //stop trex from falling down 
  trex.collide(ground_2);
  spawnclouds();
  spawnobstacles();
  drawSprites();
}
function spawnclouds() {
  if (frameCount % 60 == 0) {
   cloud = createSprite (630, random(0, 100));
   cloud.addImage (cloudImage);
   cloud.scale = random(0.5, 1);
   cloud.depth = trex.depth;
   trex.depth = trex.depth + 1;
   cloud.velocityX = -5;
   cloud.lifetime = 130;
  }
}
function spawnobstacles() {
  if (frameCount % 80 == 0) {
    obstacle = createSprite (650, 161);
    obstacle.velocityX = -7;
    var imageselect = Math.round (random(1, 6));
    switch (imageselect) {
      case 1: obstacle.addImage(obstacleImage1);
      break;
      case 2: obstacle.addImage(obstacleImage2);
      break;
      case 3: obstacle.addImage(obstacleImage3);
      break;
      case 4: obstacle.addImage(obstacleImage4);
      break;
      case 5: obstacle.addImage(obstacleImage5);
      break;
      case 6: obstacle.addImage(obstacleImage6);
      break;
    }
    obstacle.scale = 0.5;
    obstacle.lifetime = 250;
  }
}