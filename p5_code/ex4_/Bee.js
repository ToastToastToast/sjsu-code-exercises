class rcBee{
    

    //two scales are used to allow the change of the bee's direction. If the first scale number is negative, it will mirror itself
    constructor(beeXPos, beeYPos, beeSize1,beeSize2, beeSpeed){
     this.beeXPos = beeXPos;
     this.beeYPos = beeYPos;
     this.beeSize1 = beeSize1;
     this.beeSize2 = beeSize2;
     this.beeSpeed = beeSpeed;
    }
 
    //display the bee
   display(){
     push();
     fill(255, 217, 0);
     noStroke();
     translate(this.beeXPos,this.beeYPos);
     scale(this.beeSize1, this.beeSize2);
    
     
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
 
    //move the bee on the X axis and determine its speed
    moveX(){
     this.beeXPos = this.beeXPos + this.beeSpeed;
     
    }

    //x coord for the if condition. "greater" in type to say if bee's X position is greater than target x coordinate
    //scale and speed will be set to negative to flip it and turn the direction the bee faces. 
    turnAround(x,type){
        if(type == "greater"){
            if(this.beeXPos > x){
                this.beeSpeed = -this.beeSpeed;
                this.beeSize1 = -this.beeSize1;
                
            }
        }
        else{
            if(this.beeXPos < x){
                this.beeSpeed = -this.beeSpeed;
                this.beeSize1 = -this.beeSize1;
            }
        }
    }

    //shrinks the bee size 
    shrink(){
        this.beeSize1 = this.beeSize1 + this.beeSpeed/1000;
        this.beeSize2 = this.beeSize2 - this.beeSpeed/1000;
    }

    //grows the bee size
    grow(){
        this.beeSize1 = this.beeSize1 - this.beeSpeed/1000;
        this.beeSize2 = this.beeSize2 - this.beeSpeed/1000;
    }
 
    //move the bee on the Y axis
    moveY(y){
        this.beeYPos = this.beeYPos + y;
        
    }
 
    //set the bee's speed to a different number
    setSpeed(speedNumber){
     this.beeSpeed = speedNumber;
    }

    //return the speed
    getSpeed(){
        return this.beeSpeed;
    }

    //return the X coordinate
    getXPos(){
        return this.beeXPos;
    }

    //return the Y coordinate
    getYPos(){
        return this.beeYPos;
    }
 
 
 }