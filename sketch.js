const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var world, engine;


var ground;
var tree;
var boy, boyImage;
var stone, rope0;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;


function preload(){
    boyImage = loadImage("Plucking mangoes/boy.png");
}
function setup(){
    createCanvas(1400,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2, 680);

    tree = new Tree(1000,350);

    boy = createSprite(300,580,50,50);
    boy.addImage(boyImage);
    boy.scale = 0.15;

    stone = new Stone(220,500,80);

    rope0 = new Rope(stone.body, {x:220, y:500});

    mango1 = new Mango(1000,250,20); 
    mango2 = new Mango(900,250,20);
    mango3 = new Mango(1100,255,20); 
    mango4 = new Mango(800,240,20);
    mango5 = new Mango(1200,200,20); 
    mango6 = new Mango(1250,250,20);
    mango7 = new Mango(1000,100,20); 
    mango8 = new Mango(900,120,20);
    mango9 = new Mango(1100,150,20); 
    mango10 = new Mango(1005,180,20);
}
function draw(){
    background(180);

    Engine.update(engine);

    ground.display();
    tree.display();
    stone.display();
    rope0.display();
 
    mango1.display(); 
    mango2.display();
    mango3.display(); 
    mango4.display();
    mango5.display(); 
    mango6.display();
    mango7.display(); 
    mango8.display();
    mango9.display(); 
    mango10.display();

detectcollision(stone, mango1)    
detectcollision(stone, mango2)
detectcollision(stone, mango3)
detectcollision(stone, mango4)
detectcollision(stone, mango5)
detectcollision(stone, mango6)
detectcollision(stone, mango7)
detectcollision(stone, mango8)
detectcollision(stone, mango9)
detectcollision(stone, mango10)


    drawSprites();
}
function mouseDragged(){
    Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}
function mouseReleased(){
    rope0.fly();

}
function keyPressed(){
    if (keyCode = 32){
        Body.setPosition(stone.body, {x:220,y:500});
        rope0.attach(stone.body);
    }
}
function detectcollision(stone, mango){
    mangoBodyPosition=mango.body.position;
    stoneBodyPosition=stone.body.position;

    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
    if (distance <= mango.r+stone.r){
        Body.setStatic(mango.body,false);
    }
}