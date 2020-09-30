var startButton, title
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	startButton = createSprite(500,400,120,50);
	startButton.shapeColor = "purple";
	startButton.scale = 0.9;
	startButton.visible = true;

	

	



	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);

  
  
  drawSprites();
  //textSize(50);
  //fill("white");
  //text("start",450,420);
  //text.visible = true;
 
}
function keyPressed(){
	if(keyCode=== UP_ARROW){
		startButton.visible = false;
		//text.visible = false
	}
}



