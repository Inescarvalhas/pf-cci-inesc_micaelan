let earth // Declare variable 'img'
let sky
var img


function preload() { // runs once

sky = loadImage ('https://raw.githubusercontent.com/ESELX/pf-cci-inesc_micaelan/master/images/universe-sky.jpg')
earth = loadImage ('https://raw.githubusercontent.com/ESELX/pf-cci-inesc_micaelan/master/images/Earth.png');
}

function setup(){ // happens once
  createCanvas (window.innerWidth, window.innerHeight);
 // sky = createImg ('https://raw.githubusercontent.com/ESELX/pf-cci-inesc_micaelan/master/images/universe-sky.jpg', 'sky')

  background (0); // 0 preto 255 branco; // Fundo,Fundo,Fundo
  image (sky, 0 , 0, window.innerWidth, window.innerHeight);
  image (earth,100,100); // (img, x, y, w, h)
  blend (earth, 0, 0, 33, 100, 67, 0, 33, 100, LIGHTEST);

  //imageMode (CENTER);
  //img.loadPixels();


}

function mousePressed () { // Event
}

function draw() { // happens forever.. loop




//fill (50,50,255); // Red Green Blue 0 preto 255 branco
//circle(750, 345, 400); // (x, y, d)
//textSize(30);
//text ( 'Espectro Eletromagnético',70,30);
//fill(255);

}
