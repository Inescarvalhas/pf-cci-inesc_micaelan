let image
var img
var w = window.innerWidth;
var h = window.innerHeight;

function preload() { // runs once
img = loadImage ('https://raw.githubusercontent.com/ESELX/pf-cci-inesc_micaelan/master/images/Earth.png');
}

function setup(){ // happens once
  createCanvas (window.innerWidth, window.innerHeight);
  background (0); // 0 preto 255 branco; // Fundo,Fundo,Fundo

  //img = createImg  ('https://raw.githubusercontent.com/ESELX/pf-cci-inesc_micaelan/master/images/planet%20earth.jpg')
  //img.loadPixels();
  //imageMode (CENTER)
  //image(img, 0, 0);
}

function mousePressed () { // Event
}

function draw() { // happens forever.. loop


  //textSize(30);
 //text ( 'Espectro Eletromagnético',70,30);
  //fill(255);
}
