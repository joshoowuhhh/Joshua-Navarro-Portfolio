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
createCanvas(600, 400);  // canvas size
background(0, 128, 255);   // use our background screen color
}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear s1creen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}
function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
 image(grass, mouseX, mouseY, 55, 55);
    
 } else if (toolChoice == '2') { // second toolx
 image(lightwood, mouseX, mouseY, 55, 55);
  
 } else if (toolChoice == '3') { // third tool
image(birchwood, mouseX, mouseY, 55, 55);
  
} else if (toolChoice == '4') {
image(darktree, mouseX, mouseY, 55, 55);
  
} else if (key == '5') {
image(bed, mouseX, mouseY, 110, 110);
  
} else if (toolChoice == '6') {
image(door, mouseX, mouseY, 130, 130);
  
} else if (toolChoice == '7') {
image(torch, mouseX, mouseY, 60, 60);
 
} else if (toolChoice == '8') {
image(sugarcane, mouseX, mouseY, 70, 70);
  
} else if (toolChoice == '9') {
image(crafting, mouseX, mouseY, 60, 60);
  
} else if (toolChoice == '0') {
   image(furnace, mouseX, mouseY, 60, 60);
 
} else if (toolChoice == 'f') {
    image(cobbelstone, mouseX, mouseY, 60, 60);
 
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(0, 128, 255); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
     key = ""; // reset the key so that it doesn't keep taking screenshots
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
    filename=initials+day() + hour() + minute() +second();
    saveCanvas(filename, 'jpg');
 // }
}
