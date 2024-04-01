function setup() {
  createCanvas(600, 600);
}

function draw() {
  strocke ('blue');
  fill('red');
  ifif(mouseIsPrssed){
    rect(mouseX, mouseY, 20, 35);
  }
