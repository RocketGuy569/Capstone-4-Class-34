
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var mango;
var pineapple;
var melon;
var apple;
var archer;
var arrows;

function preload() {
  backgroundImg = loadImage("background.png");
}

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(backgroundImg);

  Engine.update(engine);
  
  

}

