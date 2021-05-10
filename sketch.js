let r=255;
let c=255;
var  loc=[30,5,3,2,1.3,1];
let index1 = 1;
let index2=0;
let x=-1000
let y=-1000
var person=[];
let no=person[index2];
let sz1=300;
let sz2=420;

function setup() {
  createCanvas(windowWidth, windowHeight);
imageMode(CENTER);
  rectMode(CENTER);
  per1=loadImage('sad.png');
  per2=loadImage('sad2.png');
  per3=loadImage('sad3.png');
  per4=loadImage('sad4.png');
  person=[per1,per2,per3,per4];
  standing=loadImage('basic.png');
  why=loadImage('why.png');
  s=standing
c1=255;
  c2=255;
  c3=255;
}

function draw() {
  background(r);
  fill(255);
 noStroke();
 
    ellipse(windowWidth/index1+20, windowHeight-100,340,50);
  quad(windowWidth/index1-10, 0, windowWidth/index1+50, 0, windowWidth/index1+190, windowHeight-100, windowWidth/index1-150, windowHeight-100);

   image(person[index2],x, y,300,400);
  
  for(var i=0; i<3000; i=i+120){
  
   image(s,i, windowHeight-500,sz1,sz2);
  }
}

function mousePressed(){
  r=0
s=why;
  sz1=300;
  sz2=400;
 index1 = random(loc);
   if (index1 == loc.length) {
    index1 = 2;
  }
  index2 = int(random(0, person.length));
if (index2 == person.length) {
    index2 = 0;
  }
    x=windowWidth/index1+20;
  y=windowHeight-200;
    c1=random(85,255);
   c2=random(85,255);
   c3=random(85,255);
}
function mouseReleased(){
  r=255;
  x=-1000
 y=-1000
  s=standing;
  sz1=300;
sz2=420;
  c1=255;
  c2=255;
  c3=255;
} 