const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var box,box1,box2,box3,box4,box5,box6,box7;
var shape;
var small,small1;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)

    hammer = new Hammer(10,100);

    box = new Box(200,300,20,20);
 
    box1 = new Box(300,345,20,20);

    box2 = new Box(400,340,20,20);

    box3 = new Box(500,335,20,20);

    box4 = new Box(206,330,20,20);
 
    box5 = new Box(330,325,20,20);

    box6 = new Box(410,320,20,20);

    box7 = new Box(560,310,20,20);

    shape = new Shape(400,400,40,40);

    small = new Small(250,340,50,50);
small1= new Small(350,340,30,20);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    box.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    shape.display();
    small.display();
small1.display();
}