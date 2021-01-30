var bg, bgImage;

var cat, catIdleImage, catWalkAnim, catSitImage;

var mouse, mouseImage, mouseInvesigateImage;

//var gameState = "play";

function preload() {
    //load the images here
    bgImage = loadImage("images/garden.png");
    catIdleImage = loadAnimation("images/cat1.png");
    catWalkAnim = loadAnimation("images/cat2.png", "images/cat3.png");
    catSitImage = loadAnimation("images/cat4.png");
    mouseIdleImage = loadAnimation("images/mouse1.png");
    mouseImage = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseInvesigateImage = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    bg = createSprite(500, 800);
    bg.addImage("Background", bgImage);
    //bg.scale = 3;

    cat = createSprite(700, 700);
    cat.addAnimation("catIdle", catIdleImage);
    cat.scale = 0.1;
    cat.debug = true;
    cat.setCollider("rectangle", 0,0,1000,1000);

    mouse = createSprite(200, 700);
    mouse.addAnimation("mouseIdle", mouseIdleImage);
    mouse.scale = 0.1;
    mouse.debug = true;
    mouse.setCollider("rectangle", 0,0,1000,1000);
}

function draw() {
    background(255);
    //Write condition here to evalute if tom and jerry collide

    //if(gameState === "play"){
        if(cat.x - mouse.x < ((cat.width - mouse.width)/2)+110){
            cat.velocityX = 0;
            cat.addAnimation("catSitImage", catSitImage);
            cat.changeAnimation("catSitImage");
            mouse.addAnimation("mouseInvesigateImage", mouseInvesigateImage);
            mouse.changeAnimation("mouseInvesigateImage");
            
        }
   // } else if (gameState === "end"){
        
   // }
    //700 - 200 < 50 + 50
    //200 < 100
    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        cat.velocityX = - 5;
        cat.addAnimation("catWalkAnim",catWalkAnim);
        cat.changeAnimation("catWalkAnim");
        mouse.addAnimation("teasing", mouseImage);
        mouse.changeAnimation("teasing");
    }

}
