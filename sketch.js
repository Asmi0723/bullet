var bullet, wall;
var speed, weight, thickness;

function setup() {

  createCanvas(1600,400);

  speed = random(223, 321);

  weight = random(30, 52);

  bullet  = createSprite(50, 200, 100, 10);
  bullet.shapeColor = ("white");

  thickness = random(22, 83);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);

  bullet.velocityX = speed;
  bullet.weight = weight;

}

function draw() {

  background(0);
  
  if (hasCollided(bullet, wall)){

    bullet.velocityX = 0;

    var damage  = 0.5 * speed * bullet.weight * speed / wall.width * wall.width * wall.width;

    if (damage > 10) {

    wall.shapeColor = color(255, 0, 0);

    }

    if (damage < 10){

      wall.shapeColor = color(0, 255, 0);

    }

  }

  drawSprites();

}