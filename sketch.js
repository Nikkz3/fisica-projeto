const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var block1, block2, block3, plane;

function setup() {
  var canvas = createCanvas(550, 600);
  engine = Engine.create();
  world = engine.world;

  // Define plane options
  var plane_options = {
    isStatic: true
  };

  // Create plane and add to the world
  plane = Bodies.rectangle(275, 580, 550, 20, plane_options);
  World.add(world, plane);

  // Define block options
  var block1_options = {
    restitution: 0.5,
    friction: 0.02,
    frictionAir: 0
  };

  var block2_options = {
    restitution: 0.7,
    friction: 0.01,
    frictionAir: 0.1
  };

  var block3_options = {
    restitution: 0.01,
    friction: 1,
    frictionAir: 0.5
  };

  // Create blocks and add to the world
  block1 = Bodies.circle(220, 10, 10, block1_options);
  World.add(world, block1);

  block2 = Bodies.rectangle(110, 50, 50, 50, block2_options);
  World.add(world, block2);

  block3 = Bodies.rectangle(350, 50, 100, 50, block3_options);
  World.add(world, block3);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background(200);
  Engine.update(engine);

  // Draw the plane
  fill(255);
  rect(plane.position.x, plane.position.y, 550, 20);

  // Draw the blocks
  fill(255);
  ellipse(block1.position.x, block1.position.y, 10);
  rect(block2.position.x, block2.position.y, 50, 50);
  rect(block3.position.x, block3.position.y, 100, 50);
}
