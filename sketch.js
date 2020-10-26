var bullet,wall,speed,weight,thickness


function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(10,200,10,50)
  wall=createSprite(400,200,thickness,height/2)
  wall.shapeColor= color(80,80,80);
  thickness=random(22,83)
  bullet.velocityX = speed;
}

function draw() {
  background(0,0,0);  
  drawSprites();
  if(hasCollided(bullet,wall))
  {bullet.velocityX=0
  var damage=0.5* weight * speed * speed/(thickness*thickness*thickness);
  if(damage>10){
    wall.shapecolor=color(255,0,0);
  }
  if(damage<10){
    wall.shapecolor=color(0,255,0);
  }

}
function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false
}



}


















