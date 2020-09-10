
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new ground(400,100,600,100);
	bob1 = new Bob(400);
	rope1 = new rope(bob1.body, roof.body, -Bob.Diameter*2, 0);

	bob2 = new Bob(500);
	rope2 = new rope(bob2.body, roof.body, -Bob.Diameter*3, 0);

	bob3 = new Bob(600);
	rope3 = new rope(bob3.body, roof.body, -Bob.Diameter*4, 0);

	bob4 = new Bob(300);
	rope4 = new rope(bob4.body, roof.body, -Bob.Diameter*1, 0);

	bob5 = new Bob(200);
	rope5 = new rope(bob5.body, roof.body, -Bob.Diameter*5, 0);

	Engine.run(engine); 
}


function draw() {
  	rectMode(CENTER);
  	background(220);
  	Engine.update(engine);
  
  	roof.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
}