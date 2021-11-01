let nailLength = 50;
let nailWidth = 35;

let handBase;

function preload() {
  handBase = loadImage('images/hand_base.png');
  handMask = loadImage('images/hand_mask.png')
}

function setup() {
  createCanvas(720, 720);
}

function draw() {
  background(120,220,255);
  stroke(0);
  strokeWeight(4);
  strokeJoin(ROUND);
  
    image(handBase,(width-720)/2,height-720);  
  
  push();
  fill(220,230,255);
  rect(width/2-nailWidth/2,height*0.75-height/4-nailLength-85,nailWidth,nailLength);
  fill(255);
 //noStroke();
  rect(width/2-nailWidth/2,height*0.75-height/4-nailLength-85-15,nailWidth,15,7.5,7.5,0,0);


  // fill('blue');
  // ellipse(width/2,height*0.75-20,100,height/2);
  // pop();
  
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