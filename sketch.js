const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particle;
var divisions = [];
var particles = [particle];
var plinkos = [];
var line;

var divisionHeight = 300;

var gameState = "PLAY";

var count = 0;
var score = 0;

function setup() {
    createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width/2,height,width,20);
  
  
     for (var k = 0; k <=width; k = k + 80) {
       divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
     }
  
  
      for (var j = 75; j <=width; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,75));
      }
  
      for (var j = 50; j <=width-10; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,175));
      }
  
       for (var j = 75; j <=width; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,275));
      }
  
       for (var j = 50; j <=width-10; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,375));
      }
  
      
  
      
  }

 

function draw() {
    background(0);
    Engine.update(engine);
  
    ground.display();
   
 
  
}

function spawnParticles()
{


   if (World.frameCount%60===0)
   {
   particle.createSprite = (random(50,750), 10, 10);
   }
   
   

}


