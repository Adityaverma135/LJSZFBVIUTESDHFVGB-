var birthimg,balloon,balloon2,balloonimg
var happyimg,happy
var birthDay_song

var frame,frameimg,image2,img

var wish,wishimg
var aditya
var song

function preload(){
  birthimg=loadImage("balloon.png")
  balloonimg=loadImage("balloon2.png")
  happyimg=loadImage("happybirthday.png")
  wishimg=loadImage("birthwishes.png")
  frameimg=loadImage("frame.png")
  img=loadImage("image2.PNG")
  
  birthDay_song=loadSound("birthsong.mp4")
  song=loadSound("song.mp4")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  balloon=createSprite(width/2-160,height/2-370,50,50)
  balloon.addImage(birthimg)
  //balloon.scale=0.5
  balloon.visible=true
  
  balloon2=createSprite(width/2+160,height/2-370,50,50)
  balloon2.addImage(balloonimg)
  //balloon2.scale=0.5
  balloon2.visible=true
  
  happy=createSprite(width/2,height/2-100,50,50)
  happy.addImage(happyimg)
  //happy.scale=0.5
  happy.visible=true
  
  wish=createSprite(width/2,height/2+400,50,50)
  wish.addImage(wishimg)
  //wish.scale=0.5
  wish.visible=true
  
  frame=createSprite(width/2,height/2,50,50)
  frame.addImage(frameimg)
  //frame.scale=0.85
  frame.visible=false
  
  image2=createSprite(width/2,height/2,50,50)
  image2.addImage(img)
  image2.visible=false
  
  birthDay_song.play();
  
}
  

function draw() {
  background(255);
  
  if (touches.length>0 || keyDown("space")){
    balloon.visible=false
    wish.visible=false
    balloon2.visible=false
    happy.visible=false
    birthDay_song.stop()
    //touches=[aditya] 
    frame.visible=true
    image2.visible=true
    song.play();
  }
 
 
  drawSprites();
}