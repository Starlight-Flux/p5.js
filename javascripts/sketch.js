var i = 0;

function setup() {
  // put setup code here
  var myCanvas = createCanvas(600, 400);
  myCanvas.parent('myContainer');
}

function draw() {
  // put drawing code here
  if(milis()%500)
  {
    i++;
  }
  ellipse(0 + i, height/2, 50, 50);
}
