var i = 0;

//images
var GameOb_Backtrees;

var Img_Backtrees;
var Img_BK_lighting;
var Img_BK_MidTress;
var Img_BK_FrontTress;

var Frames_Lyra_Skark = []; // = [{Path:""}];
var LyraFrames = 0;


var timerNew;
var timerOld;
var timerD;
//var timer;
var x = 0;
var t; 

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
  var myCanvas = createCanvas(windowWidth/10*9, windowHeight/10*9);
  myCanvas.parent('myContainer');
  background(10,10,10);
  
  
  ////timer code

  dt = 0;

  timerD = 0;
  timerNew = 0;
  timerOld = 0;
  
  
  
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



  sineWave = (function (theta,amplitude,dx) {
      /*this.theta = 0.0;      // Start angle at 0
      this.amplitude = 75.0; // Height of wave  // How many pixels before the wave repeats
      this.dx = 0.02;               // Value for incrementing x*/
      this.theta = 0.0;      // Start angle at 0
      this.amplitude = 500.0; // Height of wave  // How many pixels before the wave repeats
      this.dx = 0.05;               // Value for incrementing x*

      return function () {
          this.theta += this.dx;
          return sin(this.theta) * this.amplitude;
      }


  })();


  timedExe = (function (resetVal, funcRun) {

      var timer = { to: 0, tn: 0, td: 0, stopwatch: 0, resetValue: 0 };
      
      return function (resetVal,funcRun) {
          // JavaScript "closure" means I have access to foo in here,
          // because it is defined in the function in which I was defined.
          timer.tn = millis();
          timer.td = timer.tn - timer.to;
          timer.to = timer.tn;
          timer.stopwatch += timer.td;

          if (timer.stopwatch > resetVal) {
              timer.stopwatch = 0;
              console.log("reset count");
              funcRun();
          }

          return timer.stopwatch;
      };
  })();

  t = createTween("x", 1024, 100).play();
}

function draw() {
  


  console.log(timedExe(50, nextLyraFrame));

  //setInterval(moveBackground, 500);
  
  //setInterval(nextLyraFrame, 5000);

  noStroke();
  
  
  
  image(Img_Backtrees,dt,0,width,height);
  
  //image(Img_BK_lighting,0,0,width,height);
  //image(Img_BK_lighting, i+width ,0,width,height);
  
  image(Img_BK_MidTress,i,0,width,height);
  image(Img_BK_MidTress,i+width,0,width,height);
  
  image(Img_BK_FrontTress,i,0,width,height);
  image(Img_BK_FrontTress,i+width,0,width,height);
  image(Frames_Lyra_Skark[LyraFrames],(windowWidth/2 - 50)+ sineWave(0,0.02,75.0),height/10*5,width/4,height/2);

  rect(x, height / 2, 50, 50);

    
}

function nextLyraFrame(){ 
        
        LyraFrames+= 1;
        if(LyraFrames >= Frames_Lyra_Skark.length - 1)
        {
            LyraFrames = 0;
        }
  
}

function moveBackground(){

//if(millis()%500 != 0){
    //console.log(i <= 0 - width);
    i--;
    
        
	if(i <= 0 - width){
	 i=0;
	}

  //}
  
  /*if(millis()%1000 != 0){
  LyraFrames+= 1;
    
        if(LyraFrames >= Frames_Lyra_Skark.length - 1)
        {
            LyraFrames = 0;
        }
        
  }*/
  

}

