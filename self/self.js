function setup() {
createCanvas(600, 600);
}
function draw() {
  background(171, 120, 210);

//moon
let c = color
c = color(249, 255, 158);
fill(c);
strokeWeight(10);
stroke(color(236, 242, 149));
circle(295, 295, 500);
  
//shoulders
c = color(65);
fill(c);
noStroke();
ellipse(220, 600, 470, 165);
endShape();

//shirt collar
c = color(195, 149, 130);
fill(c);
strokeWeight(2);
stroke(51);
beginShape();
ellipse(220, 550, 270, 70);
endShape();

//neck
c = color(195, 149, 130);
fill(c);
strokeWeight(2);
stroke(51);
beginShape();
rect(149, 200, 140, 350);
endShape();

//new head
beginShape();
vertex(340, 200);
vertex(100, 200);
vertex(100, 400);
vertex(200, 500);
vertex(240, 500);
vertex(340, 400);
vertex(340, 200);
endShape();

//left eye (facing)
c = color(0, 0, 0);
fill(c);
strokeWeight(2);
stroke(0);
ellipse(163, 300, 60, 45);


//right eye (facing)
c = color(0, 0, 0);
noStroke();
ellipse(270, 300, 60, 45);

//top lip
c = color(164, 124, 107);
fill(c);
strokeWeight(2);
stroke(51);
 arc(243, 430, 50, 40, radians(180), radians(0));
 arc(192, 430, 50, 40, radians(180), radians(0));
 
 //bottom lip
 c = color(255, 150, 138);
fill(c);
strokeWeight(2);
stroke(51);
arc(218, 430, 101, 60, radians(0), radians(180));

//hair
c = color(0,0,0);
fill(c);
noStroke();
ellipse(100, 180, 110, 125);
ellipse(180, 180, 110, 125);
ellipse(260, 180, 110, 125);
ellipse(335, 180, 110, 125);
ellipse(140, 150, 110, 125);
ellipse(215, 150, 110, 125);
ellipse(290, 150, 110, 125);

//left eyebrow (facing)
c = color(0, 0, 0);
fill(c);
strokeWeight(4);
noStroke(51);
rect(128, 255, 65, 10);
rect(238, 255, 65, 10);

//nose
c = color(141, 106, 91);
fill(c);
strokeWeight(2);
stroke(51);
 arc(218, 370, 50, 40, radians(180), radians(0));
 
 //left ear (facing)
c = color(195, 149, 130);
fill(c);
strokeWeight(2);
stroke(51);
 arc(99, 340, 70, 70, radians(90), radians(270));
 
 //right ear (facing)
c = color(195, 149, 130);
fill(c);
strokeWeight(2);
stroke(51);
 arc(341, 340, 70, 70, radians(270), radians(90));
 
 //left earring (facing)
 c = color(204, 255, 255);
fill(c);
strokeWeight(2);
stroke(51);
circle(85, 360, 20);

 //right earring (facing)
 c = color(204, 255, 255);
fill(c);
strokeWeight(2);
stroke(51);
circle(355, 360, 20);

}
