var roadimage;
var player,player_img
var npc, npc_img;
var npc_speed
var canvas
var lbounce,rbounce;
var f = 0;
function preload(){
roadimage = loadImage("motorcycle/track.jpg");
player_img = loadImage("motorcycle/ai3.gif");
npc_img = loadImage("motorcycle/ai2.gif");
}

function setup() {
  canvas = createCanvas(displayWidth-20,displayHeight-30);

 player = createSprite(800, 600, 50, 50);
 player.addImage(player_img);
 player.scale = 0.5;
 player.debug = true;
 
 npc = createSprite(500, 600, 50, 50);
 npc.addImage(npc_img);
 npc.scale = 0.7;
 npc.debug = true;

 rbounce = createSprite(1180, 600, 50, 200);
 lbounce = createSprite(200,600,50,200)

 npc_speed = Math.round(random(-2,-2));
}

function draw() {
  background(0); 
  image(roadimage,0,-displayHeight*4,displayWidth,displayHeight*5); 

  if(keyDown("W") || keyDown("UP_ARROW") ){
    player.position.y += -3;
    f+= 50;
  }
 /* if(keyWentUp("W") || keyWentUp("UP_ARROW") ){
    player.velocityY =0;
    f++
  }
  if(keyWentDown("A") || keyWentDown("LEFT_ARROW") ){
    player.velocityX = -3;
  }
  if(keyWentUp("A") || keyWentUp("LEFT_ARROW") ){
    player.velocityX =0;
  }
  if(keyWentDown("D") || keyWentDown("RIGHT_ARROW") ){
    player.velocityX = 3;
  }
  if(keyWentUp("D") || keyWentUp("RIGHT_ARROW") ){
    player.velocityX =0;
  }*/
  npc.velocityY = npc_speed;
console.log(player.y);
  rbounce.position.y = player.y;
  lbounce.position.y = player.y;

  if(player.isTouching(lbounce) || player.isTouching(rbounce)){
    player.velocityY = 0;
    player.velocityX = 0;
  }
  
  if(player.bounceOff(npc))
  camera.position.x = displayWidth/2;
  camera.position.y = player.y

  drawSprites();
}