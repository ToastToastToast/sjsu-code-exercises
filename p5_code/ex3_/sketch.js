const Y_AXIS = 1;
let c1,c2;

//bee movement
let beeX,beeY, beeAngle, beeR, beeScaleA, beeScaleB, beeSpeedX, beeSpeedY

function setup() {
  createCanvas(1200,700);
  
c1 = color(234, 184, 87);
c2 = color(107, 55, 0);

angleMode(DEGREES);

//bee starting
beeX = 350;
beeY = 130;
beeScaleA = -0.2
beeScaleB = 0.2;
beeSpeedX = 0.5;
beeSpeedY = 0.2;
beeAngle = 1;
beeR = 1;
}

function draw() {
  background(197, 255, 141);

//drawing the forest
forest();
//coordinates();


}




function forest(){
  
  fill(168, 93, 5);
  //rect(0,height-150,width,200);//ground 

  setGradient(0,height-300,width,height/2,c1,c2,Y_AXIS);
  

  //background
  workerBee();
  
  beeHive(390,130,1); //x,y,scale
  tree(300,250,.8,110);//x,y,scale,colorHue

  bush(170,370,1.2,-30,-20);//x,y,scale,colorHue,Rotation
  bush(150,400,1.2,0);

  bush(340,380,1.1,-30,2);
  bush(340,420,1.50,0);
  
  bush(450,390,1.2,-30,0);
  bush(450,420,1.5,0);

  bush(270,370,1.2,-30,-20);
  bush(260,410,1.2,0);
  
  bush(760,420,2.5,-40,0);
  
  tree(200,360,.3,70);
  tree(300,380,.2,40);
  tree(800,370,.4,30);
  tree(400,370,.3,30);
  tree(700,360,.3,60);
  tree(600,370,.3,30);
  tree(900,380,.2,70);
  tree(930,370,.5,20);
  
  hut(580,460,.9);//x,y,scale

  treeBuilding(700,350,.5);
  treeBuilding(500,400,.4);

  //path
path();
  //huts
  hut(850,590,1.6);
  hut(370,580,1);
  hut(200,600,1.4);
  
  //frame trees
  treeBuilding(0,340,1.5);
  treeBuilding(1080,340,1.2)
  
  //ants
  ant(100,600,1,1);
  ant(840,540,-1.1,1.1);
  ant(530,490,0.8);
  ant(580,440,-0.4,0.4);
}


function tree(xpos,ypos,tScale,distanceColor){
  push();
  noStroke();
  translate(xpos,ypos);
  rectMode(CENTER);
  fill(202 + distanceColor, 135, 28);
  scale(tScale);
  
  rect(0,0,200,400);
  fill(0, 215 + distanceColor, 15 + distanceColor);
  ellipse(150,-250,250,130);
  ellipse(250,-260,250,130);
  ellipse(0,-200,250,130);
  ellipse(-150,-250,250,130);
  ellipse(-250,-260,250,130);
  ellipse(-180,-330,250,130);
  ellipse(170,-320,250,130);
  ellipse(120,-380,250,130);
  ellipse(-120,-390,240,120);
  ellipse(0,-320,240,120);
  ellipse(0,-420,240,120);
  pop();

}

function treeBuilding(xpos,ypos,tScale){
  push();
  noStroke();
  translate(xpos,ypos);
  rectMode(CENTER);
  fill(202, 135, 28);
  stroke(144, 87, 0);
  strokeWeight(3);
  scale(tScale);
  rect(0,0,200,400);
  noStroke();

  fill(0, 218, 15);
  ellipse(150,-250,250,130);
  ellipse(250,-260,250,130);
  ellipse(0,-200,250,130);
  ellipse(-150,-250,250,130);
  ellipse(-250,-260,250,130);
  ellipse(-180,-330,250,130);
  ellipse(170,-320,250,130);
  ellipse(120,-380,250,130);
  ellipse(-120,-390,240,120);
  ellipse(0,-320,240,120);
  ellipse(0,-420,240,120);

  //1
  rcWindow(0,0, 1);
  
  //2
  rcWindow(0,100, 1);
  //3
  rcWindow(-80,0, 1);
  //4
  rcWindow(-80,100, 1);
  pop();

}

//CUSTOM FUNCTION
function rcWindow(xpos, ypos, wScale){
  push();
  rectMode(CENTER);
  translate(xpos,ypos);
  scale(wScale);

  fill(255, 203, 89,alpha);
  rect(40,-40,40,60);
  
  fill(173, 74, 0,alpha);
  rect(40,-40,40,4);
  rect(40,-40,4,60);
  rect(60,-40,8,70);
  rect(20,-40,8,70);
  rect(40,-70,60,10);
  rect(40,-10,60,10);
  
  pop();
}



function path(){
  noStroke();
  fill(160);
  rect(450,490,300,60);
  stone(450,540,1.3,200);
  stone(490,540,1.3,200);
  stone(530,540,1.3,200);
  stone(570,540,1.3,200);
  stone(610,540,1.3,200);
  stone(650,540,1.3,200);
  stone(690,540,1.3,200);
  stone(730,540,1.3,200);

  stone(450,495,1.1,200);
  stone(490,495,1.1,200);
  stone(530,495,1.1,200);
  stone(570,495,1.1,200);
  stone(610,495,1.1,200);
  stone(650,495,1.1,200);
  stone(690,495,1.1,200);
  stone(730,495,1.1,200);
}

function hut(xpos,ypos,hScale){
  push();
  fill(227, 204, 124);
  strokeWeight(2);
  stroke(213, 167, 83);
  translate(xpos,ypos);
  scale(hScale);

  //building part
  beginShape();
  vertex(-80,-25);
  bezierVertex(-60,-20,-30,-10,0,-10);
  bezierVertex(30,-10,60,-10,80,-20);
  vertex(80,-40);
  vertex(80,-120);
  vertex(-80,-120);
  vertex(-80,-25);
  endShape();
  
  //roof
  fill(115, 64, 0);
  quad(-15,-150, 15,-155, 15,-175, -15,-175);

  fill(183, 102, 0);
  beginShape();
  vertex(-90,-100);
  bezierVertex(-70,-170, -30,-110, -20,-150);
  vertex(20,-155);
  bezierVertex(45,-120,65,-160,100,-100);
  vertex(-90,-100);
  endShape();

  noStroke();

  //window
  rcWindow(5,-35,0.7);

  //door
  quad(-30,-13, -30,-50, -10,-50, -10,-10);
  fill(236, 210, 156)
  ellipse(-25,-30,6,6);
  pop();
}

function stone(xpos,ypos,rScale,gray){
  push();
  fill(gray);
  stroke(gray-70);
  strokeWeight(3);
  translate(xpos,ypos);
  scale(rScale);

  ellipse(0,0,30,20);
  pop();
}

function bush(xpos,ypos,bScale,distanceColor,r){
  push();
  noStroke();
  fill(0, 200+distanceColor, 2);
  translate(xpos,ypos);
  scale(bScale);
  rotate(r);

  ellipse(0,-5,20,20);
  ellipse(-10,-10,20,20);
  ellipse(10,-10,20,20);
  ellipse(-20,-20,20,20);
  ellipse(20,-15,20,20);
  ellipse(15,-25,20,20);
  ellipse(-15,-30,20,20);
  ellipse(0,-30,20,20);
  ellipse(-10,-30,20,20);
  ellipse(0,-20,20,20);

  pop();
}

function beeHive(xpos,ypos, bScale){
  push();
  fill(247, 214, 5);
  translate(xpos,ypos);
  stroke(213, 140, 0);
  strokeWeight(1);
  scale(bScale);

  ellipse(0,-20,10,10);
  ellipse(0,20,10,10);
  ellipse(0,-16,15,10);
  ellipse(0,16,15,10);
  ellipse(0,6,30,20);
  ellipse(0,-6,30,20);
  ellipse(0,0,40,20);
  fill(213,140,0);
  ellipse(0,0,10,10);

  pop();
  

}

function workerBee(){

  //if bee reaches either side
  if(beeX > width){
    beeScaleA = 0.2
    beeScaleB = 0.2;
    beeSpeedX = -0.5;
    
  }
  if(beeX < 370){
    beeScaleA = -0.2
    beeScaleB = 0.2;
    beeSpeedX = 0.5;
    
  }

  //bee flight angle pathing
  if(beeAngle > 30){
    beeSpeedY = -beeSpeedY;
    beeR = -0.2;
  }
  if(beeAngle < -30){
    beeSpeedY = -beeSpeedY;
    beeR =  0.2;
  }


  beeX = beeX + beeSpeedX;
  beeY = beeY + beeSpeedY;
  beeAngle = beeAngle + beeR;
  

  bee(beeX,beeY,beeScaleA, beeScaleB,beeAngle);
  
}



function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  strokeWeight(1);
  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}


 
  //COORDINATE READER for development purposes
function coordinates(){
  
  fill(250,0,0);
  stroke(0);
  strokeWeight(0.5);
  textSize(20);
  text("("+(mouseX)+","+(mouseY)+")", mouseX, mouseY);
  }


//TWO CHARACTERS

function bee(xpos, ypos, bScaleA, bScaleB,r){
  push();
  fill(255, 217, 0);
  translate(xpos,ypos);
  scale(bScaleA, bScaleB);
  rotate(r);
  
   ellipse(0,0,80,60);
  fill(0);
  ellipse(-20,-10,10,10);
  //attena
  quad(-24,-23,-28,-22,-47,-43,-44,-47);
  ellipse(-45,-45,10,10);
  quad(-33,-12, -37,-15, -54,-23, -56,-18)
  ellipse(-58,-22,10,10);
  //legs
  quad(-25,23,-22,25,-25,36,-30,34);
  quad(-15,29,-17,38,-15,40,-10,30);
  quad(32,21,38,29,35,33,26,22);
  quad(16,27,21,26,25,35,21,36);
  
  //stripes
  quad(5,-30, 10,-28, 10,28, 5,30);
  quad(20,-25, 25,-22, 25,22, 20,25);
  quad(32,-17, 35,-13, 35,13, 32,17);
  
  fill(200,150);
  //wings
  beginShape();
  vertex(5,-29);
  bezierVertex(12,-82,37,-54,13,-27);
  vertex(5,-29);
  endShape();
  
   beginShape();
  vertex(15,-25);
  bezierVertex(32,-82,57,-54,25,-24);
  vertex(15,-25);
  endShape();
  
pop();
}

function ant(x,y,s1,s2){
  push();
  translate(x,y);
  scale(s1,s2);
  body();
  eyes();
  antena();
  mouth();
  pop();
}

//ant functions
function mouth(){
  noFill();
  stroke(0);
  strokeWeight(2);
  curve(64,-38,12,-11,1,-13,50,-24);
  
}

function antena(){
  noFill();
  stroke(0);
  strokeWeight(2);
  curve(-16,13,5,-33,30,-54,92,-75);
  curve(-21,13,-2,-30,20,-60,92,-75);
}

function eyes(){
  fill(0);
  ellipse(7,-25,7,7);
}

function body(){
  fill(140); stroke(0); strokeWeight(2);

  //body
  ellipse(0,20,30,30);
  //arm 
  line(0,3,25,25);
  ellipse(0,0,30,30);
  ellipse(0,-20,35,35);
  //arm
 line(0,-3,5,25);

 //legs
 line(-7,30,-10,40);
 line(7,30,10,40);

}

