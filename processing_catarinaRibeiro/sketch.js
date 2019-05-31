

var n = 100;
var t,dt;
var myscale;
var keyHue = 0.0;

var saveStill = false;
function setup() {
  var side = windowWidth< windowHeight ? windowWidth : windowHeight ;
  createCanvas(side,side); 
  background(1000);
  colorMode(HSB,360,1.0,1.0);
  background(000, 000, 000);
  var foo = 25.0;
  myscale = width < height ? width/foo : height/foo; 
  t = 0.0;
  dt = 0.10;
} 

function draw() {
  t += dt;
  for(var i=0;i<n;i++){
    var theta = 2.49996*i;
  	var r = myscale*sqrt(i);
   noStroke();
    var s = i/float(n);
    fill(90 - 30*s,7.0-9.0*s, 0.10 + s );
    
    var d = myscale*(8 + 0.3*sin(t + r));
    if(saveStill){
        d = myscale*10; 
    }
   
    ellipse(0.5*width + r*sin(theta),0.5*height + r*cos(theta), d, d);
  }
  
  if(saveStill){
    saveCanvas('vogelTunnel', 'png');
    noLoop();
  }
}