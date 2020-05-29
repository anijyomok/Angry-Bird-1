const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box2 = new Box(700,320,70,70);
    box1 = new Box(920,320,70,70);
    Pig1 = new Pig(810,350);
    Log1 = new Log(810,260,300,PI/2);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    Pig2 = new Pig(810,220);
    Log2 = new Log(810,180,300,PI/2);
    Log3 = new Log(760,120,150,PI/7);
    Log4 = new Log(870,120,150,-PI/7);
    box5 = new Box(810,160,70,70);
    ground = new Ground (600,390,1200,10);
    bird = new Bird(200,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
   Pig1.display();
   Log1.display();
   box3.display();
   box4.display();
   Pig2.display();
   Log2.display();
   box5.display();
   Log3.display();
   Log4.display();
   ground.display();
   bird.display();
}