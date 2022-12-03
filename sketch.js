// https://editor.p5js.org/hafiyyandi/sketches/H1ml1wZFm

var dAmt = 100;

function setup() {
  createCanvas(1440, 815);
  background(0);
  noStroke();

  fill('white');
  for (var i = 0; i < dAmt; i++){
    var al = random (30, 255);
    var r_col = random (10,255);
    var g_col = random (10, 255);
  	var y = random(0, height);
    var x = random(0, width);
    var r = random(3,10);
    fill(r_col, g_col, 0, al);
    ellipse(x, y, r, r);
  }

}

function draw() {

}
