function preload(){

}
function setup(){
    canvas = createCanvas(600,600);
    canvas.center();
}
function draw(){
    fill(255,0,0);
    stroke(0,255,0);
    circle(50, 50, 80);
    circle(50,400,80);
    circle(400,50,80);
    circle(400,400,80);
    fill(0,255, 0);
    stroke(0,0,0)
    rect(90,40,300,40);
    rect(90,400,300,40);
    rect(40,90,40,300);
    rect(400,90,40,300);

   

}