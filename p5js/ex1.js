let earth // Declare variable 'img'
let sky
let diamEarth
let button


function preload() { // runs once

sky = loadImage ('https://raw.githubusercontent.com/ESELX/pf-cci-inesc_micaelan/master/images/sky.jpg', 'sky')
earth = loadImage ('https://raw.githubusercontent.com/ESELX/pf-cci-inesc_micaelan/master/images/Earth.png','earth');
}

function setup() { // happens once
  createCanvas (window.innerWidth, window.innerHeight);

  background (0); // 0 preto 255 branco; // Fundo,Fundo,Fundo
  image (sky, 0 , 0, window.innerWidth, window.innerHeight);
  imageMode (CENTER);
  image (earth,width/2, height/2); // (img, x, y, w, h)

  diamEarth = 200

  button = createButton('Radio');
  button.position(19, 19);
  button.mousePressed(changeRadio);
}


function mousePressed () { // Event
}

function changeRadio() {
  let radio = 

function draw() { // happens forever.. loop
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
