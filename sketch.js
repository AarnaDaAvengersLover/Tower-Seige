const Render=Matter.Render
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var polygon;

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(800,400);
  background(0);
 
  engine = Engine.create();
  world = engine.world;


  stand = new Ground(387,265,180,20);

  block9 = new Box(330,235,30,40);
  block8 = new Box(360,235,30,40);
  block7 = new Box(390,235,30,40);
  block6 = new Box(420,235,30,40);
  block5 = new Box(450,235,30,40);

  block4 = new Box(360,195,30,40);
  block3 = new Box(390,195,30,40);
  block2 = new Box(420,195,30,40);

  block1 = new Box(390,155,30,40);

  polygon = Bodies.circle(50,200,20, {isStatic: false,density:1.5});
  
  imageMode(CENTER);
  World.add(world,polygon);

  slingshot=new Sling(polygon,{x:100,y:200});

  var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } }); Render.run(render);
}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  drawSprites();

  stand.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  slingshot.display();
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);

}

function mouseDragged(){
  Matter.Body.setPosition(polygon,{x: mouseX, y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(polygon,{x:50,y:200});
    slingshot.attach(polygon);

  }
}