var grass;
var lightwood;
var birchwood;
var darktree;
var bed;
var door;
var torch;
var sugarcane;
var crafting;
var furnace;
var cobbelstone;
var initials ='jn';
var choice = '1'; 

function preload() {
   grass = loadImage('minecraftitems/grass.jpg');
   lightwood = loadImage('minecraftitems/lightwood.jpg');
   birchwood = loadImage('minecraftitems/birchwood.jpg');
   darktree = loadImage('minecraftitems/darktree.jpg');
   bed = loadImage('minecraftitems/bed.jpg');
   door = loadImage('minecraftitems/door.jpg');
   torch = loadImage('minecraftitems/torch.gif');
   sugarcane = loadImage('minecraftitems/sugarcane.jpg');
   crafting = loadImage('minecraftitems/crafting.jpg');
   furnace = loadImage('minecraftitems/furnace.jpg');
   cobbelstone = loadImage('minecraftitems/cobbelstone.jpg');
}

function setup() {
createCanvas(600, 400);
background(0, 128, 255);
}

function draw() {
  if (keyIsPressed) {
    choice = key;
    clear_print();
  }
  if (mouseIsPressed){
    newkeyChoice(choice);
  }
}
function newkeyChoice(toolChoice) {

 if (toolChoice == '1' ) {
 image(grass, mouseX, mouseY, 50, 50);
    
 } else if (toolChoice == '2') {
 image(lightwood, mouseX, mouseY, 50, 50);
  
 } else if (toolChoice == '3') {
image(birchwood, mouseX, mouseY, 50, 50);
  
} else if (toolChoice == '4') {
image(darktree, mouseX, mouseY, 50, 50);
  
} else if (key == '5') {
image(bed, mouseX, mouseY, 90, 90);
  
} else if (toolChoice == '6') {
image(door, mouseX, mouseY, 115, 115);
  
} else if (toolChoice == '7') {
image(torch, mouseX, mouseY, 60, 60);
 
} else if (toolChoice == '8') {
image(sugarcane, mouseX, mouseY, 70, 70);
  
} else if (toolChoice == '9') {
image(crafting, mouseX, mouseY, 50, 50);
  
} else if (toolChoice == '0') {
   image(furnace, mouseX, mouseY, 50, 50);
 
} else if (key == 'c' || key == 'C') {
    image(cobbelstone, mouseX, mouseY, 50, 50);
 
  }
 }
 
function testbox(r, g, b) {
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
  if (key == 'x' || key == 'X') {
    background(0, 128, 255);
  } else if (key == 'p' || key == 'P') {
     saveme();
     key = "";
  }
}

function saveme(){
    filename=initials+day() + hour() + minute() +second();
    saveCanvas(filename, 'jpg');
 // }
}
