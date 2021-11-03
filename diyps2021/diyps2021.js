var grass;
var lightwood;
var birchwood;
var darktree;
var bed;
var door;
var sugarcane;
var crafting;
var initials ='jn'; // your initials
var choice = '1'; // starting choice, so it is not empty

function preload() {
// preload() runs once, it may make you wait
   grass = loadImage('minecraftitems/grass.jpg');// cat.jpg needs to be next to this .js file
    lightwood = loadImage('minecraftitems/lightwood.jpg');
     birchwood = loadImage('minecraftitems/birchwood.jpg');
     darktree = loadImage('minecraftitems/darktree.jpg');
     bed = loadImage('minecraftitems/bed.jpg');
     door = loadImage('minecraftitems/door.jpg');
      dog = loadImage('minecraftitems/dog.jpg');
       sugarcane = loadImage('minecraftitems/sugarcane.jpg');
            crafting = loadImage('minecraftitems/crafting.jpg');


// you can link to an image on your github account
// img = loadImage('https://dma-git.github.io/images/74.png');
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
  } else if (toolChoice == '4') {2

  image(darktree, mouseX, mouseY, 55, 55);
  } else if (key == '5') { // this tool calls a function
   image(bed, mouseX, mouseY, 110, 110);
    
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {

  image(door, mouseX, mouseY, 130, 130);
  } else if (toolChoice == '7') {

  image(dog, mouseX, mouseY, 60, 60);
  } else if (toolChoice == '8') {

   image(sugarcane, mouseX, mouseY, 60, 60);
  } else if (toolChoice == '9') {

      image(crafting, mouseX, mouseY, 60, 60);
  } else if (toolChoice == '0') {
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, mouseY, 200, 150);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;0
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
