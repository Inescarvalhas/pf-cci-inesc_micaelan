let image
var img
var w = window.innerWidth;
var h = window.innerHeight;


function preload() { // runs once
img = loadImage ('https://raw.githubusercontent.com/ESELX/pf-cci-inesc_micaelan/master/images/Earth.png');
}

function setup(){ // happens once
  createCanvas (1500, 690);//(window.innerWidth,window.innerHeight);

//  img = createImg  ('https://raw.githubusercontent.com/ESELX/pf-cci-inesc_micaelan/master/images/Earth.png') class="over";
  //imageMode (CENTER);
  //image (img , 50,50);

  //img.loadPixels();
  //image(img, 0, 0);


}

function mousePressed () { // Event
}

function draw() { // happens forever.. loop
  background (0); // 0 preto 255 branco; // Fundo,Fundo,Fundo
  fill (50,50,255); // Red Green Blue 0 preto 255 branco
  circle(750, 345, 400); // (x, y, d)

  //textSize(30);
 //text ( 'Espectro Eletromagnético',70,30);
  //fill(255);
}
