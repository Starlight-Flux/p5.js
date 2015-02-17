var i = 0;

function GameObj(x,y,w,h){
    this.curVectorPos = createVector(x,y);
    this.w = w;
    this.h = h;
   
    this.firstW = w;
    this.firstH = h;
    this.firstVectorPos = createVector(x,y);
   
    this.oldW = w;
    this.oldH = h;
    this.oldVectorPos = createVector(x,y);
};

//Make the GameAutom function//
function GameAutom(x,y,w,h,speedX,speedY){
    GameObj.call(this,x,y,w,h);
   
    this.firstVectorSpeed = createVector(speedX,speedY);
    this.oldVectorSpeed = createVector(speedX,speedY);
    this.curVectorSpeed = createVector(speedX,speedY);
   
}

//images
var BKimage1;


function setup() {

GameObj.prototype.add = function(ix,iy){
      this.oldVectorPos.set(this.curVectorPos);
      this.curVectorPos.add(ix,iy);
};

GameObj.prototype.set = function(x,y){
      this.oldVectorPos.set(this.curVectorPos);
      this.curVectorPos.set(x,y);
     
};

//Make the GameAutom prototype
GameAutom.prototype = Object.create(GameObj.prototype);

//Set the GameAutom prototype constructor to the GameAutom function
GameAutom.prototype.constructor = GameAutom;

GameAutom.prototype.reset = function(){
    this.oldVectorPos.set(this.curVectorPos);
    this.oldW = this.w;
    this.oldH = this.h;
   
    this.curVectorPos.set(this.firstVectorPos.x,this.firstVectorPos.y);
    this.w = this.firstW;
    this.h = this.firstH;
}

GameAutom.prototype.move = function(){
    this.oldVectorPos.set(this.curVectorPos);
    this.curVectorPos.add(this.curVectorSpeed);
   
}

GameAutom.prototype.changeSpeed = function(speedX,speedY){
    this.oldVectorSpeed.set(this.curVectorSpeed);
    this.curVectorSpeed.set(speedX,speedY);
}




  // put setup code here
  var myCanvas = createCanvas(600, 400);
  myCanvas.parent('myContainer');
  background(10,10,10);
  
  BKimage1 = new GameAutom(0,0,width/2,height,10,0);
}

function draw() {
  // put drawing code here
  background(10,10,10);
  
  update();
  
  
  fill(0,200,0);
  rect(BKimage1.curVectorPos.x + i, 0, BKimage1.w, BKimage1.h);
  console.log(BKimage.w);
      
}

function update(){

if(millis()%500 != 0){
    console.log(i % width);
    i++;
	
	if(i % width === 0){
	 i=0;
	}

  }

}

