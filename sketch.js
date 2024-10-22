let y = 190;
let Speed = 0.5;
let armySpeed = 0.5;
let headspeed= 0.5;
let suny=0;
let army=200
let limby=225



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(135,221,245);

  //ground
  fill(103,150,75);
  strokeWeight(0);
  rect(0,300,400,100);
  
  
  //sun
//ellipse (x,y,width,height);
  fill(255,246,51);
  strokeWeight(10);
ellipse(400,suny,300,200);
 suny = suny + Speed; 
  console.log(suny);
  //restart animation if(suny <= 194)
  //{
  //y=0
  //}
  if( suny > 194)
  {
    
    Speed= -Speed;
  }
  if( suny < 0)
  {
    
    Speed= -Speed;
  }
  
 //body
//rect (x,y,width,height,radius);
  fill (255,51,51);
  strokeWeight(4);
rect(200,200,25,60);
//legs and arms
//line (x1,y1,x2,y2)
  strokeWeight(3);
  line(200,limby,170,250);
  line (250,army,225,225);
  line(200,300,200,260);
  line (225,300,225,260);
  army=army+ armySpeed
   //restart animation if(army <= 215)
  //{
  //y=190
  //}
  if( army > 215)
  {
    
    armySpeed= -armySpeed;
  }
  if( army < 190)
  {
    
    armySpeed= -armySpeed;
  }
  
  
 //head
  //ellipse (x,y,width,height);
  fill(255,51,181);
  strokeWeight(4);
  ellipse (210,y,35,37);
  y= y + headspeed;
  console.log(y);
  //restart animation if (y <= 205)
  //{
  //y=190
  //}
  if (y>205)
    {
      headspeed =-headspeed;
      
    }
  if (y<190)
    { headspeed =-headspeed;
    }
  
  

  
  
  //mountain
  //triangle(x1,y1,x2,y2,x3,y3);
  triangle(0,300,150,300,20,100)
  
 
}