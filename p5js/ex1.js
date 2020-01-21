let image
var img

function preload() { // runs once
  img = loadImage ('https://raw.githubusercontent.com/ESELX/pf-cci-inesc_micaelan/master/images/planet%20earth.jpg');
}

function setup(){ // happens once
  createCanvas (windowWidth,windowHeight);
  background(50); // 1

  img = createImg  ('https://raw.githubusercontent.com/ESELX/pf-cci-inesc_micaelan/master/images/planet%20earth.jpg')
  // (100, 100);
  img.loadPixels();
  imageMode(CENTER);
  image(img, 10, 10, 50, 50);
}

function mousePressed () { // Event
}

function draw() { // happens forever.. loop
  background(50); // Fundo,Fundo,Fundo

  textSize(20);
  text ( 'Espectro Eletromagnético',70,30);
  fill(255);
}
