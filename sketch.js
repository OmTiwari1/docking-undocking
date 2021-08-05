var bg, bgImg;
var sleep, brush, gym, eat, bath, move;
var astronaut;

function preload(){
  
  bgImg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png", "images/gym2.png");
  gym1 = loadAnimation("images/gym11.png", "images/gym12.png");
  eat = loadAnimation("images/eat1.png", "images/eat2.png");
  bath = loadAnimation("images/bath1.png", "images/bath2.png");
  move = loadAnimation("images/move.png", "images/move1.png");
  
}

function setup() {
  createCanvas(600, 400);
  
  bg = createSprite(300,210,400,20);
  bg.scale = 0.12;
  bg.addImage(bgImg);
  
  astronaut = createSprite(300, 230, 40, 20);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.addAnimation("brushing", brush);
  astronaut.addAnimation("gymming", gym);
  astronaut.addAnimation("gymming", gym1);
  astronaut.addAnimation("eating", eat);
  astronaut.addAnimation("bathing", bath);
  astronaut.addAnimation("moving", move);
  astronaut.scale = 0.09;
  
}

function draw() {
 
  if(keyDown("UP_ARROW")){
    astronaut.changeAnimation("brushing", brush);
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.changeAnimation("gymming", gym);
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    }
    
  if(keyDown("g")){
    astronaut.changeAnimation("gymming", gym1);
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    }
 
  if(keyDown("h")){
    astronaut.changeAnimation("moving", move);
    }
  
  if(keyDown("LEFT_ARROW")){
    astronaut.changeAnimation("eating");
    astronaut.x = 100;
    astronaut.y = 350;
    }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.changeAnimation("bathing");
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    }
  
  
 
  if(keyDown("m")){
    astronaut.velocityX = 1;
    astronaut.velocityY = -1;
  }
  
  drawSprites();
  
  
   edges = createEdgeSprites();
   astronaut .collide(edges);
}