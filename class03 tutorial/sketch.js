function setup() {
  createCanvas(800, 600);
}

function draw() {
fill(150);
rect(0,0,width,height);
fill(255,204,0);
arc(150, 150, 180, 180, 0.5, 6, PIE);

fill(0);
ellipse(170,100,20,20);
fill(255);
ellipse(175,95,5,5);
    
fill(255,255,0);
ellipse(300,150,30,30);

fill(255,255,0);
ellipse(400,150,30,30);

fill(255,255,0);
ellipse(500,150,30,30);
    
fill(255,255,0);
ellipse(600,150,30,30);
    
fill(255,0,0);
ellipse(200,400,180,180);
fill(0);
ellipse(170,380,20,20);
fill(0);
ellipse(240,380,20,20);

noFill();
curve(170, 424, 152, 523);
    

}