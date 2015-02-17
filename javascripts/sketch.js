var i = 0;

function setup() {
  // put setup code here
  var myCanvas = createCanvas(600, 400);
  myCanvas.parent('myContainer');
  background(10,10,10);
}

function draw() {
  // put drawing code here
  background(10,10,10);
  if(millis()%500 != 0){
    console.log(i % width);
    i++;
	
	if(i % width === 0){
	 i=0;
	}

  }
  color(0,100,0)
  rect(0 + i, 0,width/2,height);
}

function loop(){

}