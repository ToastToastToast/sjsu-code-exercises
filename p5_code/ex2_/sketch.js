//GLOBAL VARIABLES
let time = "day";
let dayCycle = 0;
let img;

//sun variables
let sunX = 100; 
let sunY = 70;
let sunColorR = 253;
let sunColorB = 205;
let sunColorG = 85;

//bk color
let bkR = 64;
let bkG = 217;
let bkB = 255;

//red bk
let redbkA = 0;

//cloud
let cloudX = 0;

//wolfToggle and danger
let wolfPeak = false;
let wolfAlpha = 0;
let dangerModeAlphaToggle = 0;
let dangerMode = false;

//grid var
let cx, cy;
let gridSize;
let rock;

//tint image
let tintColor;

function preload(){
   imgStone = loadImage('statue.png');
   imgTree = loadImage('tree.png');
}

function setup() {
  createCanvas(800,600);
  angleMode(DEGREES);
  rock = loadImage("rock.png");
  gridSize=20;
  cx = 378;
  cy = 240;
  tintColor = color(0);
}

function draw() {
background(bkR, bkG, bkB);

//red background dangermode

fill(255,0,0,redbkA);
rect(0,0,width,height);

//sun
fill(sunColorR, sunColorB, sunColorG);

ellipse(sunX,sunY,40,40);


//IMAGE ASSET
if(time == "day"){
  tintColor = color(255,255,255);
}
else{
  tintColor = color(121, 124, 140);
}
tint(tintColor);
image(imgStone,220,200,350,350);

image(imgTree,-100,0,550,550);

noTint();
image(rock,cx,cy,gridSize,gridSize);


//KEY PRESSING and && and SWITCH STATEMENT
if(keyIsPressed === true){
  keyChoice();

}

//key choices 
function keyChoice(){
  switch(key){
    case 't':
      sunMove();
      break;
    case 'k':
      dangerMode();
      break;
    case 'p':
      peaceful();
      break;
    case 'a':
      console.log("a left");  // left
      cx+= -gridSize;
      
      break;
    case 'w':
      console.log("w up");  // up
      cy+= -gridSize; 
      
      break;
    case 'd':
      console.log("d  right");  //right
      cx+= gridSize;
      
      break;
    case 's':
      console.log("s back");  // back
      cy+= gridSize;
      
      break;

  }
  
}

//moving the sun
function sunMove(){
  if(dayCycle % 2 == 0 && time === "day"){
    
    //sun falls
    if( sunX < 800 && sunX >= 100){
        sunX = sunX + random(3,6);
        sunY = sunY + random(4,7);
        sunColorB -= 1; 

        bkR -= 0.5;
        bkG -= 2;
        bkB -= 2;
        
        
      }
     
      //sun climbs
      if(sunX < 100){
        sunX = sunX + random(5,6);
        sunY = sunY - random(16,18);
        sunColorR += 1.8;
        sunColorB += 2;
        sunColorG += 3;
     
        bkR += 1.8;
        bkG += 5.5;
        bkB += 7;
        
        
      }

         //day change
         if(sunX > 700){
          dayCycle = dayCycle + 1;
          sunX = -100;
          sunY = 700;
          time = "night";
        }
    }
  
  if(dayCycle % 2 != 0 && time === "night"){
    //moon rise
    if(sunX < 100){
        sunX = sunX + random(5,6);
        sunY = sunY - random(16,18);
          sunColorR = 255;
          sunColorG = 255;
          sunColorB = 255;
     
          bkR = 0;
          bkG = 0;
          bkB = 0;
      }

       //moon falls
       if(sunX > 100 && sunX < 800){
        sunX = sunX + random(3,6);
        sunY = sunY + random(4,7);
    }

       //day change
       if(sunX > 700){
        dayCycle = dayCycle + 1;
        sunX = -100;
        sunY = 700;
        time = "day";
        sunColorR = 195;
        sunColorB = 137; 
        sunColorG = 0;
      
      }
    }


}



//dangerMode
function dangerMode(){
  print('My sword is hungry');
  dangerMode = true;
  dangerModeAlphaToggle = 255;
  redbkA = 255;
    
}

//peaceful mode
function peaceful(){
  dangerMode = false;
  dangerModeAlphaToggle = 0;
  redbkA = 0;
  wolfHide();
}

rectMode(CORNER);

//MOUSE PRESS 

//wolf ears
fill(230,230,230);
stroke(0);
strokeWeight(1);
triangle(720,498,730,470,740,498);
triangle(760,508,770,480,780,508);

  

if(mouseX > 710 && mouseX < 750){
  if(mouseY>460 && mouseY < 500){
    if(mouseIsPressed){
      if(wolfPeak == false){
        wolfPeak = true;
      }
    }
  }
}


if(wolfPeak){
  wolf();
}

//wolf draw function
function wolf(){
  print('woof');
  strokeWeight(0);
  stroke(0);
  wolfPeak = true;
  wolfAlpha = 255;
  fill(180,180,180,wolfAlpha);
  ellipse(735,475,75,70);
  triangle(706,473,707,490,672, 480);
  triangle(704,485,709,500,676,496);
  triangle(760, 460,761,487,800,485);
  triangle(761,470,760,500,790,500);

  triangle(710,453,726, 444, 700,409);
  triangle(745,445,765, 465,760,405);
  fill(255,255,255,wolfAlpha);
  ellipse(720,460,15,15);
  ellipse(740,460,15,15);
  fill(0,wolfAlpha);
  ellipse(717,460,9,9);
  ellipse(737,460,9,9);
  triangle(720,470,730,470,725,475);
  strokeWeight(5);
  line(725,453,705,440);
  line(735,453,750,440);

  noFill();
  curve(690,450,713,491,750,488,778,413);


  
}

// OR STATEMENT ||

function wolfHide(){
  wolfAlpha = 0;
  wolfPeak = false;
}

if(wolfPeak == true || dangerMode == true){
  redbkA = 255;
}

//hills

fill(161, 255, 113);
noStroke();
ellipse(260,503,270,100);
ellipse(20,560,270,100);
ellipse(370,560,670,200);
ellipse(700,560,300,140);

//rabbit
strokeWeight(1);
stroke(0);
fill(225,225,225);
ellipse(690,520,35,35);
ellipse(590,547,35,30);
ellipse(640,520,115,75);
ellipse(600,495,85,70);
ellipse(610,550,35,30);
ellipse(680,550,40,30);
fill(255,255,255); //white
ellipse(620,485,25,25);
ellipse(580,485,25,25);

push();
fill(0);//pupils
translate(620,485);
ellipse((mouseX-600)/100,(mouseY-500)/100,8,8);
translate(-40,0);
ellipse((mouseX-600)/100,(mouseY-500)/100,8,8);
pop();

push();
fill(225,225,225);
rotate(-20);
translate(380,610);
ellipse(0,0,20,60);
fill(255,205,245);
ellipse(0,0,10,30);
//switch ears
rotate(40);
fill(225,225,225);
ellipse(60,-20,20,60);
fill(255,205,245);
ellipse(60,-20,10,30);
pop();
fill(255,205,245);
triangle(590,500,610,500,600,510);



cloud();
//MOUSE MOVED ELEMENT
function cloud(){
  fill(255,255,255);
  strokeWeight(0);
  ellipse(cloudX+20,60,40,30);
  ellipse(cloudX+40,56,50,40);
  ellipse(cloudX+60,66,40,30);
}



//TEXT sign
fill(107,72,0);
rect(135,460,10,90);
fill(175,118,0);
rect(75,420,130,90);
fill(0);
textSize(18);
text('Shazzur Shrine', 80, 440);
textSize(10);
text('T : Time Change', 100,455);
text('P : Bring Peace', 100,470);
text('K : ???', 100,485);
text('WASD : Magic!!!', 100, 500);



//COORDINATE READER for development purposes
function coordinates(){
  
  fill(255,255,0);
  noStroke();
  text("("+mouseX+","+mouseY+")", mouseX, mouseY);
}


//dangerMode weapon
strokeWeight(0);
    rectMode(CENTER);
    fill(230,230,230, dangerModeAlphaToggle);
    rect(mouseX,mouseY,20,100);
    triangle(mouseX-10,mouseY-50, mouseX+10,mouseY-50, mouseX,mouseY-60);
    fill(146,109,0,dangerModeAlphaToggle);
    rect(mouseX,mouseY+50,50,6);
    rect(mouseX,mouseY+62,6,30);

rectMode(CORNERS);

}

//MOUSE MOVED
function mouseMoved(){
  cloudX = cloudX + 0.1;
  if(cloudX > width){
   cloudX = -60;
  }

}



