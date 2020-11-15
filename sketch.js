
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var crumpledBall, dustine1,dustine2,dustine3,engine,world,ground;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	crumpledBall = new Paper(50,635);

	dustline1 = new DustLine(600,640,200,20);
	dustline2 = new DustLine(500,600,20,100);
	dustline3 = new DustLine(700,600,20,100);
	
    var options = {isStatic:true,density:1.5}

	ground = Bodies.rectangle(400,660,1200,20,options);
	World.add(world,ground);

	Engine.run(engine);
  
}


function draw() {

  background(0);
  
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1200,20);
  
  dustline1.display();
  crumpledBall.display();
  dustline2.display();
  dustline3.display();

 
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(crumpledBall.body,crumpledBall.body.position,{x:600,y:620});	
	}
}

