var i = 0;

//images
var GameOb_Backtrees;

var Img_Backtrees;
var Img_BK_lighting;
var Img_BK_MidTress;
var Img_BK_FrontTress;

var Frames_Lyra_Skark = []; // = [{Path:""}];
var LyraFrames;

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

function setup() {

	//prototypes and functions

	//make the GameObj functions
	
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


  //Environment code 
  var myCanvas = createCanvas(600, 400);
  myCanvas.parent('myContainer');
  background(10,10,10);
  
  //Items being animated//
  
  for(var i=0; i<7; i++)
  {
   var pathIndex = i + 1;
   Frames_Lyra_Skark[i] = loadImage("javascripts/Lyra_Shark_fr" + pathIndex.toString() + ".png");
  }
  
  LyraFrames = 0;
  
  
  //background

  Img_Backtrees = loadImage("javascripts/parallax-forest-back-trees.png");
 
  GameOb_Backtrees = new GameAutom(0,0,width ,height,10,0);
  
  Img_BK_lighting = loadImage("javascripts/parallax-forest-lights.png");
  
  Img_BK_MidTress = loadImage("javascripts/parallax-forest-middle-trees.png");
  
  Img_BK_FrontTress =  loadImage("javascripts/parallax-forest-front-trees.png")
  
}

function draw() {
  // put drawing code here
  //background(10,10,10);
  
  update();
  noStroke();
  
  
  
  image(Img_Backtrees,0,0,width,height);
  
  image(Img_BK_lighting,0,0,width,height);
  //image(Img_BK_lighting, i+width ,0,width,height);
  
  image(Img_BK_MidTress,i,0,width,height);
  image(Img_BK_MidTress,i+width,0,width,height);
  
  image(Img_BK_FrontTress,i,0,width,height);
  image(Img_BK_FrontTress,i+width,0,width,height);
  //fill(0,200,0);
  //rect(GameOb_Backtrees.curVectorPos.x + i, 0, GameOb_Backtrees.w, GameOb_Backtrees.h);
  //fill(0,300,0);
  //rect((GameOb_Backtrees.curVectorPos.x - GameOb_Backtrees.w) + i, 0, GameOb_Backtrees.w, GameOb_Backtrees.h);
  image(Frames_Lyra_Skark[LyraFrames],50,height/9,width/2,height);    
}

function update(){

if(millis()%500 != 0){
    console.log(i <= 0 - width);
    i--;
    
        if(LyraFrames = Frames_Lyra_Skark.length - 1)
        {
            LyraFrames = 0;
        }
        else
        {
            LyraFrames++;    	
        }
	if(i <= 0 - width){
	 i=0;
	}

  }

}

