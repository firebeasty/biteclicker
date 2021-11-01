let nailLength = 50;
let nailWidth = 35;

let handBase;

let nailRot = 0;

function preload() {
  handBase = loadImage('images/hand_base.png');
  handMask = loadImage('images/hand_mask.png')
}

function setup() {
  createCanvas(720, 720);
  angleMode(DEGREES);
}

function draw() {
  background(120,220,255);
  stroke(0);
  strokeWeight(4);
  strokeJoin(ROUND);

    image(handBase,(width-720)/2,height-720);

  push();

    translate(mouseX,mouseY);
  rotate(nailRot);
    fill(220,230,255);
    rect(-nailWidth/2,-nailLength,nailWidth,nailLength);
    fill(255);
    rect(-nailWidth/2,-nailLength-15,nailWidth,15,7.5,7.5,0,0);
  pop();
  print(mouseX,mouseY, nailRot);

      image(handMask,(width-720)/2,height-720);



  if(nailLength < height/2-120) {
    nailLength+=0.2;
  }

}

function mouseClicked() {
  nailLength -= 60;
  if(nailLength < 55 ) {
    nailLength = 55;
  }
  navigator.vibrate(150);
}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    nailRot -= 0.5;
  } else if (keyCode === RIGHT_ARROW) {
    nailRot += 0.5;
  }
}
