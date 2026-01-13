function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  clear(); // keep canvas transparent so CSS background circle shows through

  // centered square size responsive to canvas
  const s = min(width, height) * 0.25;

  stroke(20, 80, 120);
  strokeWeight(3);
  fill(255, 230);
  rect(width / 2, height / 2, s, s);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
