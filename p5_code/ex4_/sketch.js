const Y_AXIS = 1;
let c1,c2,beeCount;
let bees = [];
 

function setup() {
  createCanvas(1200,700);
  
c1 = color(148, 253, 195);
c2 = color(0, 211, 95);

angleMode(DEGREES);

beeCount = 15;

for(let i = 0; i < beeCount; i++){
  let r = random(0.7,1);
  bees[i] = new rcBee(random(260,810),random(290,380),-r,r,random(1,1.6));
}

}

function draw() {
background(197, 255, 141);

//drawing the forest
forestBeeView();
//coordinates();
  
}


//from EXERCISE 3 --------
function forest(){
  
  fill(168, 93, 5);
  //rect(0,height-150,width,200);//ground 

  setGradientBrown(0,height-300,width,height/2,c1,c2,Y_AXIS);
  
  

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

  //track
track();
  //huts
  hut(850,590,1.6);
  hut(370,580,1);
  hut(200,600,1.4);
  
  //frame trees
  treeBuilding(0,340,1.5);
  treeBuilding(1080,340,1.2)
  

}

//for EXERCISE 4 --------
function forestBeeView(){
  setGradient(0,300,width,height-300,c1,c2,Y_AXIS);//x,y,w,h,c1,c2,axis

  


  //patch of flowers
  for(let i = 0; i < 150; i += 30){
    for(let j = 0; j < 60; j += 20){
      let f = 0;
      flower(880+i,380+j,0.6,color(250, 159, 196)); //x,y,scale
    }
  }
  for(let i = 0; i < 150; i += 30){
    for(let j = 0; j < 60; j += 20){
      let f = 0;
      flower(880+i,450+j,0.8,color(255, 205, 32)); //x,y,scale
    }
  }
  for(let i = 0; i < 150; i += 30){
    for(let j = 0; j < 60; j += 20){
      let f = 0;
      flower(880+i,520+j,0.9,color(32, 250, 255)); //x,y,scale
    }
  }
  

  //background village
  bush(980,320,1.5,-20,0);
  bush(920,320,1.5,10,0);

  hut(900,310,0.3);
  hut(1000,305,0.25);

  tree(830,290,0.07,140);
  bush(845,310,0.5,200,0);
 
  tree(865,290,0.15,55);
  tree(1020,290,0.09,100);
  treeBuilding(960,290,0.17);
  bush(890,320,0.5,40,0);
  bush(915,328,0.8,50,0);
  bush(945,325,0.6,40,0);
  tree(1080,280,0.1,150);
  tree(1050,290,0.07,140);
  bush(1045,310,0.4,200,0);
  bush(1000,320,0.7,130,0);
  bush(970,330,0.8,30,0);
 
  //drawing the bee colony
  for(let i = 0; i < bees.length; i++){

    bees[i].moveX();
    bees[i].display();
  
    bees[i].turnAround(950,'greater'); //if "greater" is typed, the bee turns around if x is greater than number
    bees[i].turnAround(150);//else check for less than given number
  
    //shrinking the bee and going down
    if (bees[i].getSpeed() > 0){
      bees[i].shrink();
      bees[i].moveY(0.3);
      }
    else{
      bees[i].grow();
      bees[i].moveY(-0.3);
      }
  
    }

  beeHive(140,240,9 ); //x,y,scale
  tree(-120,600,2.4,110);//x,y,scale,colorHue
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

function track(){
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

function flower(xpos,ypos,fScale,color){
  push();
  translate(xpos,ypos);
  scale(fScale);
  strokeWeight(1);
  stroke(224, 54, 121);
  fill(color);

  ellipse(10,0,10,10);
  ellipse(5,-5,10,10);
  ellipse(0,-10,10,10);
  ellipse(-5,-5,10,10);
  ellipse(-10,0,10,10);
  ellipse(-5,5,10,10);
  ellipse(0,10,10,10);
  ellipse(5,5,10,10);

  fill(255, 224, 0);
  ellipse(0,0,10,10);
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


function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

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
  
  fill(255,0,0);
  noStroke();
  text("("+mouseX+","+mouseY+")", mouseX, mouseY);
  }


