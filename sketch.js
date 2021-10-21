var backgroundImg;
var title, titleImg;
var playButton, playButtonImg;
var bow, bowImg;
var arrowImg;
var gameOver;

var appleImg, bananaImg, carrotImg, broccoliImg, virusImg, gameOverImg; 
var arrowGrp, appleGrp, bananaGrp, carrotGrp, broccoliGrp, virusGrp;

var PLAY = 1;
var END = 0;
var gameState = 1;

function preload() {
  backgroundImg       = loadImage("background.png");
  titleImg            = loadImage("title.png");
  playButtonImg       = loadImage("playButton.png");
  bowImg              = loadImage("bow.png");
  arrowImg            = loadImage("Arrow.png");
  appleImg            = loadImage("Apple.png");
  bananaImg           = loadImage("Banana.png");
  carrotImg           = loadImage("carrot.png");
  broccoliImg         = loadImage("broccoli.png");
  virusImg            = loadImage("virus.png");
  gameOverImg         = loadImage("GameOver.png");
}

function setup() {
  createCanvas(800,400);
  
  title = createSprite(400, 100, 20, 20);
  title.addImage(titleImg);
  title.scale = 0.25;

  playButton = createSprite(400, 250, 20, 20);
  playButton.addImage(playButtonImg);
  playButton.scale = 0.125;

  bow = createSprite(70, 200, 20, 20);
  bow.addImage(bowImg);
  bow.scale = 0.125;
  bow.visible = false;

  gameOver = createSprite(400, 200, 20, 20);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 0.5;
  gameOver.visible = false;

  arrowGrp = createGroup();
  appleGrp = createGroup();
  bananaGrp = createGroup();
  carrotGrp = createGroup();
  broccoliGrp = createGroup();
  virusGrp = createGroup();

}

function draw() {
  background(backgroundImg);  

  if(gameState === PLAY){

  bow.y = World.mouseY;

  //if(mousePressedOver(playButton)){
    console.log("start");
    startGame();
    spawnApple();
    spawnBanana();
    spawnCarrot();
    spawnBroccoli();
    spawnVirus();
  //}
  
  if(keyDown("space")){
    spawnArrow();
  }
}

  if(gameState === END){
    bow.visible = false;
    arrowGrp.destroyEach();
    appleGrp.destroyEach();
    gameOver.visible = true;
  }

  drawSprites();
}

function startGame() {
  title.visible = false;
  playButton.visible = false;
  bow.visible = true;
}

function spawnArrow() {
  arrow = createSprite(70, 200, 20, 20);
  arrow.addImage(arrowImg);
  arrow.velocityX = 4;
  arrow.lifetime = 500;
  arrow.scale = 0.125;
  arrow.y = bow.y;
  arrowGrp.add(arrow);
}

function spawnApple () {
  
 if (World.frameCount % 50 === 0) {
  
  var apple = createSprite(800, Math.round(random(10, 400)));
  apple.addImage(appleImg);
  apple.velocityX = -5; 
  apple.scale = 0.145;
  appleGrp.add(apple);
    
  }
}

function spawnBanana () {
  
  if (World.frameCount % 70 === 0) {
   
   var banana = createSprite(800, Math.round(random(10, 400)));
   banana.addImage(bananaImg);
   banana.velocityX = -5; 
   banana.scale = 0.145;
   bananaGrp.add(banana);
     
   }
 }

 function spawnCarrot () {
  
  if (World.frameCount % 90 === 0) {
   
   var carrot = createSprite(800, Math.round(random(10, 400)));
   carrot.addImage(carrotImg);
   carrot.velocityX = -5; 
   carrot.scale = 0.145;
   carrotGrp.add(carrot);
     
   }
 }

 function spawnBroccoli () {
  
  if (World.frameCount % 110 === 0) {
   
   var broccoli = createSprite(800, Math.round(random(10, 400)));
   broccoli.addImage(broccoliImg);
   broccoli.velocityX = -5; 
   broccoli.scale = 0.145;
   broccoliGrp.add(broccoli);
     
   }
 }

 function spawnVirus () {
  
  if (World.frameCount % 80 === 0) {
   
   var virus = createSprite(800, Math.round(random(10, 400)));
   virus.addImage(virusImg);
   virus.velocityX = -5; 
   virus.scale = 0.120;
   virusGrp.add(virus);
     
   }
 }