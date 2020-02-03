let image
var img


function preload() { // runs once
img = loadImage ('https://raw.githubusercontent.com/ESELX/pf-cci-inesc_micaelan/master/images/Earth.png');
}

function setup(){ // happens once
  createCanvas (1500, 690);
  img =  createImg  ('https://raw.githubusercontent.com/ESELX/pf-cci-inesc_micaelan/master/images/Earth.png') ;
  //imageMode (CENTER);
  //image (img , 50,50);

  //img.loadPixels();
  //image(img, 0, 0);

}

function mousePressed () { // Event
}

function draw() { // happens forever.. loop
  background (0); // 0 preto 255 branco; // Fundo,Fundo,Fundo
  img =  createImg  ('https://raw.githubusercontent.com/ESELX/pf-cci-inesc_micaelan/master/images/Earth.png') ;
  fill (50,50,255); // Red Green Blue 0 preto 255 branco
  circle(750, 345, 400); // (x, y, d)
  //nope img = createImg  ('https://raw.githubusercontent.com/ESELX/pf-cci-inesc_micaelan/master/images/Earth.png') class="over";

  //textSize(30);
 //text ( 'Espectro Eletromagnético',70,30);
  //fill(255);
}
