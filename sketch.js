const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var middlerect,rectr1,rectr2,pillarr,rectl1,rectl2,pillarl;

function setup() {
  var canvas =  createCanvas(800,400);

  middlerect = new Rectngle(200,47,34,300);
  rectr1 = new Rectngle(247,50,40,220);
  rectl1 = new Rectngle(173,50,40,220);
  rectr2 = new Rectngle(287,230,40,400);
  rectl2 = new Rectngle(133,230,40,400);
  pillarr = new Rectngle(317,330,20,600);
  pillarl = new Rectngle(103,330,20,600);

}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  middlerect.display();  
  rectr1.display();  
  rectl1.display();  
  rectr2.display();  
  rectl2.display();  
  pillarr.display();
  pillarl.display();  

  
  drawSprites();
}