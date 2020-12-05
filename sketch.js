const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var packageS;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine=Engine.create();
	world=engine.world;
	box1=new Box(400,660,200,20);
	box2=new Box(300,620,20,100);
	box3=new Box(500,620,20,100);

	packageS=createSprite(400,70,10,10);
	packageS.addImage(packageIMG);
	packageS.scale=0.2;

	var helicopter=createSprite(400,70,10,10);
	helicopter.addImage(helicopterIMG);
	helicopter.scale=0.5;

	// groundSprite=createSprite(400, 680, 800,30);
	// groundSprite.shapeColor=color(150);

	var package_option={
		restitution:0.5,
		isStatic:true	
	}

	packageBody = Bodies.circle(400 , 70 , 5 ,package_option);
	World.add(world, packageBody);

	var ground_options={
		isStatic:true
	  }

	  ground = Bodies.rectangle(400, 680, 800, 30 , ground_options);
	  World.add(world, ground);

	
}


function draw() {
  
  background(0);
 Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 30);

  packageS.x=packageBody.position.x;
  packageS.y=packageBody.position.y;
//   ellipseMode(RADIUS);
//   ellipse(packageBody.position.x,packageBody.position.y,5);
  keyPressed();

  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
    
  }
}



