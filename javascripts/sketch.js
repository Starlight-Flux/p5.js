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
  if(millis()%500 != 0)
  {
    if(i % width)
	{
		i = 0;
	}
	else
	{
		i++;
		
	}
    
  }
  ellipse(0 + i, height/2, 50, 50);
}
