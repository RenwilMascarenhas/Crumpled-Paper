
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObject,groundObject, paperObject, trashcanObject;
var engine, world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	Engine.run(engine);

	dustbinObject = new Dustbin(700,320,70,70);
    groundObject = new Ground(920,320,70,70);
    paperObject = new Paper(810, 350);
    trashcanObject = new Trash(810,260,300, PI/2)
}

function draw() {
  rectMode(CENTER);
  background(230);
 
  groundObject.display();
  dustbinObj.display();

  background(backgroundImg);
  Engine.update(engine);
  console.log(dustbin.body.position.x);
  console.log(dustbin.body.position.y);
  console.log(dustbin.body.angle);
  dustbin.display();
  paper.display();
  ground.display();
  trashcan.display();
}
