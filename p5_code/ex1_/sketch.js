function setup() {
  createCanvas(800, 800);
  background(0, 50, 100);
  noStroke();

  fill(255, 102, 102,140);
  beginShape();
  vertex(10,30);
  vertex(60,100);
  vertex(30,150);
  vertex(40,250);
  vertex(120,200);
  vertex(900,430);
  vertex(940,260);
  vertex(220,30);
  vertex(100,20);
  endShape();


}

function draw() {

  if(mouseIsPressed === true){
    fill(255, 204, 255,130);
    triangle(mouseX+10,mouseY+10,mouseX+10,mouseY-10,mouseX-10,mouseY+10);
    console.log('yay triangles');

    
  strokeWeight(1);
  stroke(200,70,70);
  fill(0,200,70);
  line(200,200,300,300);
  line(300,300,400,400);
  line(400,400,500,500);
  line(500,500,600,600);
  }
  else{
    strokeWeight(0); strokeWeight(0);
  }
  



  fill(255, 246, 64,40);
 
  //ex 1.1.2
  let r = random(30);
  let m = mouseX;
  if (m < width/2)  {
    ellipse(m, height/2, r * 5, r * 2);
  } else {
    rect(m, height/2, r * 2, r * 5);
  }

  fill(255,255,255,255);
  
  //ex 1.1.4
  let y1 = mouseY;
    //the black and white squares...
  if (mouseX < 800)  {
   
    for (let i = 0; i < mouseX; i += 20) {
      r1 = random(255);
      fill(r1);
      rect( i+5, 5, 10, 10 );
      
     }

  }
  if (mouseX > 50 && y1 > 50)  {

    let mx = mouseX;
    for (let i = 0; i < mouseX; i += 20) {
      r2 = random(50,255);
      fill(r2,30);
      rect( mx, i+5, 10, 10 );
      
     }

    if (mouseY < 250) {

      fill(255,0,0,90);
      triangle(mouseX,y1,mouseX-50,y1+30,mouseX+50,y1+50);

    }  else {
      
      for (let i = 0; i < mouseX; i += 20) {
        r3 = random(100);
        fill(200,100,0,r3);
        rect( i+5, y1, 10, 10 );
        
       }

      fill(255,120,0,50);
      ellipse(mouseX+100,y1,30,30);

    }


  }

  //ex 1.1.1

  for (let i=0; i < height; i+=20) {
    fill(51, 153, 255);
    rect(0, i, width, 3);
    fill(255);
    rect(i, 0, 3, height);
    
  }

  //ex 1.1.3
  for (let i = 0; i < 800; i += 40) {
    for (let j = 0; j < 800; j += 40) {
      rand = random(255);
      fill(rand);
      rect( i+5, j+5, 3, 3 );
      
    }
  }
  
}

