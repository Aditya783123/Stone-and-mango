
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, boyImg;
var tree, treeImg;
var ground;
var stone, stoneImg;
var mango1, mango2, mango3, mango4, mango5, mango6;
function preload()
{
    boyImg = loadImage("boy.png");
    treeImg = loadImage("tree.png");
    stoneImg = loadImage("stone.png");
}

function setup() {
	createCanvas(900, 800);


	engine = Engine.create();
	world = engine.world;

    boy = createSprite(150, 610, 300, 600);
    boy.addImage(boyImg);
    boy.scale = 0.1;
    tree = createSprite(650, 440, 50, 50);
    tree.addImage(treeImg);
    tree.scale = 0.4;
    stone = createSprite(130, 590, 50, 50);
    stone.addImage(stoneImg);
    stone.scale = 0.05;
	//Create the Bodies Here.
    ground = new Ground(500, 675, 2000, 10);
    mango1 = new Mango(450, 400, 70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  mango1.display();
}



