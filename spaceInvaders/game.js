//kiarash kiaee group project 2022
//JU final project 
//made with love
//hope you love the game

function setup() {
   createCanvas(780, 650);
   background(0,0,0);  
}

//all var etc..(global)

var playerImage;
var attackersImage;

var playerX = 360;
var playerY = 600;
var playerWidth = 50;
var playerHeight = 30;
var playerSpeed = 2;

var lives = 2;

//harder new
var m1X = 260;
var m1Y = 530;
var m1Size = 50;

var m2X = 530;
var m2Y = 530;
var m2Size = 50;

var mImage;

//boss attakers new
var b11X = 300;
var b11Y = 100;
var b11Width = 100;
var b11Height = 50;
var b11Speed = 2;
var b11Direction = 1;
var bossImage;
var bossLife = 100; 


var rocket1X = playerX;
var rocket1Y = playerY;
var rocket1Position = 0;
var rocketWidth = 7;
var rocket1Height = 20;
var rocketSpeed = 5;
var shoot = false;

//attakers bullet
var b1X = 50;
var b1Y = 150;
var br1X = b1X;
var br1Y = b1Y;
var br1Position = 1; 

//attakers 
//row1
var attakers20X = -100;
var attakers20Y = 700;

var attakers90X = 900;
var attakers90Y = 200;

var attakersX = 50;
var attakersY = 150;
var attakersWidth = 40;
var attakersHeight = 40;

var attakers2X = 120;
var attakers2Y = 150;

var attakers3X = 190;
var attakers3Y = 150;

var attakers4X = 260;
var attakers4Y = 150;

var attakers5X = 330;
var attakers5Y = 150;

var attakers6X = 400;
var attakers6Y = 150;

var attakers7X = 470;
var attakers7Y = 150;

var attakers8X = 540;
var attakers8Y = 150;

var attakers9X = 610;
var attakers9Y = 150;

//row2
var attakersRowX = 50;
var attakersRowY = 200;
var attakersWidth = 40;
var attakersHeight = 40;

var attakersRow2X = 120;
var attakersRow2Y = 200;

var attakersRow3X = 190;
var attakersRow3Y = 200;

var attakersRow4X = 260;
var attakersRow4Y = 200;

var attakersRow5X = 330;
var attakersRow5Y = 200;

var attakersRow6X = 400;
var attakersRow6Y = 200;

var attakersRow7X = 470;
var attakersRow7Y = 200;

var attakersRow8X = 540;
var attakersRow8Y = 200;

var attakersRow9X = 610;
var attakersRow9Y = 200;

//attakers row3
var attakersRow10X = 50;
var attakersRow10Y = 250;

var attakersRow12X = 120;
var attakersRow12Y = 250;

var attakersRow13X = 190;
var attakersRow13Y = 250;

var attakersRow14X = 260;
var attakersRow14Y = 250;

var attakersRow15X = 330;
var attakersRow15Y = 250;

var attakersRow16X = 400;
var attakersRow16Y = 250;

var attakersRow17X = 470;
var attakersRow17Y = 250;

var attakersRow18X = 540;
var attakersRow18Y = 250;

var attakersRow19X = 610;
var attakersRow19Y = 250;

//attakers row 4

var attakersRow41X = 50;
var attakersRow41Y = 300;

var attakersRow42X = 120;
var attakersRow42Y = 300;

var attakersRow43X = 190;
var attakersRow43Y = 300;

var attakersRow44X = 260;
var attakersRow44Y = 300;

var attakersRow45X = 330;
var attakersRow45Y = 300;

var attakersRow46X = 400;
var attakersRow46Y = 300;

var attakersRow47X = 470;
var attakersRow47Y = 300;

var attakersRow48X = 540;
var attakersRow48Y = 300;

var attakersRow49X = 610;
var attakersRow49Y = 300;

//attakers row 5
var attakersRow51X = 50;
var attakersRow51Y = 350;

var attakersRow52X = 120;
var attakersRow52Y = 350;

var attakersRow53X = 190;
var attakersRow53Y = 350;

var attakersRow54X = 260;
var attakersRow54Y = 350;

var attakersRow55X = 330;
var attakersRow55Y = 350;

var attakersRow56X = 400;
var attakersRow56Y = 350;

var attakersRow57X = 470;
var attakersRow57Y = 350;

var attakersRow58X = 540;
var attakersRow58Y = 350;

var attakersRow59X = 610;
var attakersRow59Y = 350;

//moving attakers
var rows = 1;
var currentRow = rows;
var rowDistance = 3;
var aDistance = 0;
var aSpeed = 1;
var aDirection = 1;

//var of time
var GeneralTime;
var splashTime;
var gameTime;
var limitTime = 120;

//timebar and points
var points = 0;

//stages
var gameScreen = 0; //first, secnd, third page


function draw(){
    clear();
    GeneralTime = millis();

    if (gameScreen === 0){
        firstScreen();
        if(keyIsDown(13)){
            gameScreen = 1;
        }
    }else if(gameScreen ===1){
        game();
        bullet();
    }else if( gameScreen === 2){
        win();
    }else if (gameScreen === 3){
        lose ();
    }
}
    
function firstScreen(){
    background(0,0,0);

    splashTime = GeneralTime;

    fill(0,255,0);
    textSize(45);
    text('**space invaders**',220, 140);

    textSize(20);
    fill(255,0,0);
    textSize(40);
    text('welcome to the game',220, 200);

    textSize(20);
    fill(100,100,250);
    text('(press ENTER to start the game)',270, 280);
    fill(200,100,50);
    text('*use space and arow key to win*',270, 350);
}

function win(){
    background(0,255,0);

    textSize(50);
    fill(0,0,0);
    text('victory is yours',240, 200);

    text('your piont:',140, 100);
    text(points, 390, 100);

    textSize(30);
    fill(0,0,0);
    text('*press 1 to go back*',290, 250);
}

function lose(){
    background(255,0,0);

    textSize(50);
    fill(0,0,0);
    text('Game over!',240, 200);

    text(points, 390, 100);

    textSize(30);
    fill(0,250,0);
    text('press 1 to go back',250,300);
}

//function bullet for the attakers

function game(){
    background(15, 10, 20);
    keyPressed();
    keyType();

    //ground
    fill(110,100,95);
    strokeWeight(3);
    rect(-1, 630 , 900, 200);

    //time bar and score bar and bg
    noStroke();
    fill(250,220,10);
    rect(20, 20 ,700, 70,20);
   
    noStroke();
    fill(0,0,255);
    image(playerImage,playerX,playerY,playerWidth,playerHeight);

    //attakers
    fill(0, 0, 0);
    rect(attakers90X, attakers90Y, attakersWidth, attakersHeight);
    rect(attakers20X, attakers20Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersX, attakersY, attakersWidth, attakersHeight);

    image(attackersImage,attakers2X, attakers2Y, attakersWidth, attakersHeight);
    
    image(attackersImage,attakers3X, attakers3Y, attakersWidth, attakersHeight);

    image(attackersImage,attakers4X, attakers4Y, attakersWidth, attakersHeight);

    image(attackersImage,attakers5X, attakers5Y, attakersWidth, attakersHeight);

    image(attackersImage,attakers6X, attakers6Y, attakersWidth, attakersHeight);

    image(attackersImage,attakers7X, attakers7Y, attakersWidth, attakersHeight);

    image(attackersImage,attakers7X, attakers7Y, attakersWidth, attakersHeight);

    image(attackersImage,attakers8X, attakers8Y, attakersWidth, attakersHeight);

    image(attackersImage,attakers9X, attakers9Y, attakersWidth, attakersHeight);

    //row2
    image(attackersImage,attakersRowX, attakersRowY, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow2X, attakersRow2Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow3X, attakersRow3Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow4X, attakersRow4Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow5X, attakersRow5Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow6X, attakersRow6Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow7X, attakersRow7Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow8X, attakersRow8Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow9X, attakersRow9Y, attakersWidth, attakersHeight);

    //row 3 

    image(attackersImage,attakersRow10X, attakersRow10Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow12X, attakersRow12Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow13X, attakersRow13Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow14X, attakersRow14Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow15X, attakersRow15Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow16X, attakersRow16Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow17X, attakersRow17Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow18X, attakersRow18Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow19X, attakersRow19Y, attakersWidth, attakersHeight);

    //row 4
    image(attackersImage,attakersRow41X, attakersRow41Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow42X, attakersRow42Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow43X, attakersRow43Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow44X, attakersRow44Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow45X, attakersRow45Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow46X, attakersRow46Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow47X, attakersRow47Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow48X, attakersRow48Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow49X, attakersRow49Y, attakersWidth, attakersHeight);

    //row 5
    image(attackersImage,attakersRow51X, attakersRow51Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow52X, attakersRow52Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow53X, attakersRow53Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow54X, attakersRow54Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow55X, attakersRow55Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow56X, attakersRow56Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow57X, attakersRow57Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow58X, attakersRow58Y, attakersWidth, attakersHeight);

    image(attackersImage,attakersRow59X, attakersRow59Y, attakersWidth, attakersHeight);


    //new boss 
    image(bossImage, b11X, b11Y, b11Width, b11Height);

    textSize(20);
    fill(255,0,0);
    text(bossLife, b11X+30, b11Y+10); 

    b11X = b11X +(b11Speed * b11Direction); 
    //hit the wall
    if(b11X >= 600){
        b11Direction = b11Direction *-1;
    }
    if(b11X <= 0){
        b11Direction = b11Direction *-1;
    }
    //rocket hit it 
    if(rocket1X >= b11X - b11Width/2 && rocket1X <= b11X+ b11Width/2 && rocket1Y >= b11Y -b11Height/2 && rocket1Y <= b11Y + b11Height/2){
        if(bossLife >= 10){
            points= points +1;
            bossLife = bossLife -10;
            rocket1Position = 2;
        } else{
            points = points + 1;
            b11Speed = 0;
            b11X = -1000
            rocket1Position = 2;
        }
    }


    //new
    stone();

    // attackers fire
    fill(255,0,0);
    rect(br1X+15, br1Y, 5, 15);

    //bullet shoots 
    if (br1Position == 1){
        br1X = br1X;
        br1Y = br1Y + rocketSpeed;

        if(br1Y >= height){
           br1Position = 2; 
        }
        if (br1Y >= height){
            br1Position =2;
        }
    } else{
        br1Y = b1Y;
        br1X = b1X;
    }
 //go back to the attakers
    if(br1Position === 2){
        br1Y = attakers2Y;
        br1X = attakers2X;
        br1Position = 1;  
    }
 //lose life
    if(br1X >= playerX- playerWidth/2 && br1X<= playerX + playerWidth/2 && br1Y >= playerY-playerHeight/2 && br1Y <= playerY + playerHeight/2){
        lives = lives - 1;
        playerX = width/2; 
        br1Position = 2;
    } 
 //second one
   // attackers fire
   fill(255,0,0);
   rect(br1X+15, br1Y, 5, 15);

   //bullet shoots 
   if (br1Position == 1){
       br1X = br1X;
       br1Y = br1Y + rocketSpeed;

       if(br1Y >= height){
          br1Position = 2; 
       }
       if (br1Y >= height){
           br1Position =2;
       }
   } else{
       br1Y = b1Y;
       br1X = b1X;
   }
 //go back to the attakers
   if(br1Position === 2){
       br1Y = attakers9Y;
       br1X = attakers9X;
       br1Position = 1;  
   }
 //lose life
   if(br1X >= playerX- playerWidth/2 && br1X<= playerX + playerWidth/2 && br1Y >= playerY-playerHeight/2 && br1Y <= playerY + playerHeight/2){
       lives = lives - 1;
       playerX = width/2; 
       br1Position = 2;
 }  

 //motion
    motion();

    moving();
    //timerspalsh
    //stop splashtime to save how much played
    splashTime = splashTime;
    gameTime = int(( GeneralTime - splashTime)  / 1000); 

    //points
    fill(0,0,0);
    textSize(27);
    text('Points:' , 50, 60);
    text(points, 140, 62);

    //lives 
    fill(0,0,0);
    textSize(27);
    text('lives:' , 200, 60);
    text(lives, 280, 62);

    //time
    textSize(27);
    text('time:' , 530, 60);
    //count down time
    text(limitTime-gameTime, 600, 62);

    //rocket
    rocket();

    if(points >= 55){
        gameScreen = 2; //win
    } 

    if(gameTime >= limitTime ){
        gameScreen = 3; // lose
    } 

    if(lives <=0 ){
        gameScreen = 3; //lose
    }
} 

function motion(){
    attakers20X = attakers20X + (aSpeed * aDirection);
    attakers20Y = attakers20Y + aDistance;
    
    attakers90X = attakers90X + (aSpeed * aDirection);
    attakers90Y = attakers90Y + aDistance;

    attakersX = attakersX + (aSpeed * aDirection);
    attakersY = attakersY + aDistance;
    
    attakers2X = attakers2X + (aSpeed * aDirection);
    attakers2Y = attakers2Y + aDistance;

    attakers3X = attakers3X + (aSpeed * aDirection);
    attakers3Y = attakers3Y + aDistance;

    attakers4X = attakers4X + (aSpeed * aDirection);
    attakers4Y = attakers4Y + aDistance;

    attakers5X = attakers5X + (aSpeed * aDirection);
    attakers5Y = attakers5Y + aDistance;

    attakers6X = attakers6X + (aSpeed * aDirection);
    attakers6Y = attakers6Y + aDistance;

    attakers7X = attakers7X + (aSpeed * aDirection);
    attakers7Y = attakers7Y + aDistance;

    attakers8X = attakers8X + (aSpeed * aDirection);
    attakers8Y = attakers8Y + aDistance;

    attakers9X = attakers9X + (aSpeed * aDirection);
    attakers9Y = attakers9Y + aDistance;

    attakersRowX = attakersRowX + (aSpeed * aDirection);
    attakersRowY= attakersRowY + aDistance;

    attakersRow2X = attakersRow2X + (aSpeed * aDirection);
    attakersRow2Y= attakersRow2Y + aDistance;

    attakersRow3X = attakersRow3X + (aSpeed * aDirection);
    attakersRow3Y= attakersRow3Y + aDistance;

    attakersRow4X = attakersRow4X + (aSpeed * aDirection);
    attakersRow4Y= attakersRow4Y + aDistance;

    attakersRow5X = attakersRow5X + (aSpeed * aDirection);
    attakersRow5Y= attakersRow5Y + aDistance;

    attakersRow6X = attakersRow6X + (aSpeed * aDirection);
    attakersRow6Y= attakersRow6Y + aDistance;

    attakersRow7X = attakersRow7X + (aSpeed * aDirection);
    attakersRow7Y= attakersRow7Y + aDistance;

    attakersRow8X = attakersRow8X + (aSpeed * aDirection);
    attakersRow8Y= attakersRow8Y + aDistance;

    attakersRow9X = attakersRow9X + (aSpeed * aDirection);
    attakersRow9Y= attakersRow9Y + aDistance;

    attakersRow10X= attakersRow10X + (aSpeed * aDirection);
    attakersRow10Y= attakersRow10Y + aDistance;

    attakersRow12X= attakersRow12X + (aSpeed * aDirection);
    attakersRow12Y= attakersRow12Y + aDistance;

    attakersRow13X= attakersRow13X + (aSpeed * aDirection);
    attakersRow13Y= attakersRow13Y + aDistance;

    attakersRow14X= attakersRow14X + (aSpeed * aDirection);
    attakersRow14Y= attakersRow14Y + aDistance;

    attakersRow15X= attakersRow15X + (aSpeed * aDirection);
    attakersRow15Y= attakersRow15Y + aDistance;

    attakersRow16X= attakersRow16X + (aSpeed * aDirection);
    attakersRow16Y= attakersRow16Y + aDistance;

    attakersRow17X= attakersRow17X + (aSpeed * aDirection);
    attakersRow17Y= attakersRow17Y + aDistance;

    attakersRow18X= attakersRow18X + (aSpeed * aDirection);
    attakersRow18Y= attakersRow18Y + aDistance;

    attakersRow19X= attakersRow19X + (aSpeed * aDirection);
    attakersRow19Y= attakersRow19Y + aDistance;

    attakersRow41X= attakersRow41X + (aSpeed * aDirection);
    attakersRow41Y= attakersRow41Y + aDistance;

    attakersRow42X= attakersRow42X + (aSpeed * aDirection);
    attakersRow42Y= attakersRow42Y + aDistance;

    attakersRow43X= attakersRow43X + (aSpeed * aDirection);
    attakersRow43Y= attakersRow43Y + aDistance;

    attakersRow44X= attakersRow44X + (aSpeed * aDirection);
    attakersRow44Y= attakersRow44Y + aDistance;

    attakersRow45X= attakersRow45X + (aSpeed * aDirection);
    attakersRow45Y= attakersRow45Y + aDistance;

    attakersRow46X= attakersRow46X + (aSpeed * aDirection);
    attakersRow46Y= attakersRow46Y + aDistance;

    attakersRow47X= attakersRow47X + (aSpeed * aDirection);
    attakersRow47Y= attakersRow47Y + aDistance;

    attakersRow48X= attakersRow48X + (aSpeed * aDirection);
    attakersRow48Y= attakersRow48Y + aDistance;

    attakersRow49X= attakersRow49X + (aSpeed * aDirection);
    attakersRow49Y= attakersRow49Y + aDistance;

    attakersRow51X= attakersRow51X + (aSpeed * aDirection);
    attakersRow51Y= attakersRow51Y + aDistance;

    attakersRow52X= attakersRow52X + (aSpeed * aDirection);
    attakersRow52Y= attakersRow52Y + aDistance;

    attakersRow53X= attakersRow53X + (aSpeed * aDirection);
    attakersRow53Y= attakersRow53Y + aDistance;

    attakersRow54X= attakersRow54X + (aSpeed * aDirection);
    attakersRow54Y= attakersRow54Y + aDistance;

    attakersRow55X= attakersRow55X + (aSpeed * aDirection);
    attakersRow55Y= attakersRow55Y + aDistance;

    attakersRow56X= attakersRow56X + (aSpeed * aDirection);
    attakersRow56Y= attakersRow56Y + aDistance;

    attakersRow57X= attakersRow57X + (aSpeed * aDirection);
    attakersRow57Y= attakersRow57Y + aDistance;

    attakersRow58X= attakersRow58X + (aSpeed * aDirection);
    attakersRow58Y= attakersRow58Y + aDistance;

    attakersRow59X= attakersRow59X + (aSpeed * aDirection);
    attakersRow59Y= attakersRow59Y + aDistance;
}

function moving(){
        //until where should they go
        if(attakers20X >= 10){
            aDirection = aDirection*-1;
            rows = rows + 1;
        }
    
        if(attakers90X <= 900){
            aDirection = aDirection * -1;
            rows = rows + 1;
        }
    
        if (rows > currentRow){
            aDistance = rowDistance;
            currentRow = rows;
        } else{
            aDistance = 0;
        }
        
    //if rows bit you
        if(rows>= 72){
            gameScreen = 3;
        }
}

//from 2nd or 3rd screen go back 
function keyTyped(){ 
    if(gameScreen === 3 && key === '1'){ 
    moving();
    motion();
    stone();

    m1X = 260;
    m1Y = 530;
    m1Size = 50;

    m2X = 530;
    m2Y = 530;
    m2Size = 50;
    mImage;


    b11X = 300;
    b11Y = 100;
    b11Width = 100;
    b11Height = 50;
    b11Speed = 2;
    b11Direction = 1;
    bossImage;
    bossLife = 100; 

    rocket1Position = 0;
    rocketWidth = 7;
    rocket1Height = 20;
    rocketSpeed = 5;

    b1X = 50;
    b1Y = 150;
    br1X = b1X;
    br1Y = b1Y;
    br1Position = 1;

    rows = 1;
    currentRow = rows;
    rowDistance = 3;
    aDistance = 0;
    aSpeed = 1;
    aDirection = 1;

  	gameScreen = 0;
    lives = 2;

    limitTime = 120;
    rows = 1;

    points = 0;

    attakers20X = -100;
    attakers20Y = 700;

    attakers90X = 900;
    attakers90Y = 200;

    attakersX = 50;
    attakersY = 150;

    attakersWidth = 40;
    attakersHeight = 40;

    attakers2X = 120;
    attakers2Y = 150;

    attakers3X = 190;
    attakers3Y = 150;

    attakers4X = 260;
    attakers4Y = 150;

    attakers5X = 330;
    attakers5Y = 150;

    attakers6X = 400;
    attakers6Y = 150;

    attakers7X = 470;
    attakers7Y = 150;

    attakers8X = 540;
    attakers8Y = 150;

    attakers9X = 610;
    attakers9Y = 150;

    //row2
    attakersRowX = 50;
    attakersRowY = 200;
    attakersWidth = 40;
    attakersHeight = 40;

    attakersRow2X = 120;
    attakersRow2Y = 200;

    attakersRow3X = 190;
    attakersRow3Y = 200;

    attakersRow4X = 260;
    attakersRow4Y = 200;

    attakersRow5X = 330;
    attakersRow5Y = 200;

    attakersRow6X = 400;
    attakersRow6Y = 200;

    attakersRow7X = 470;
    attakersRow7Y = 200;

    attakersRow8X = 540;
    attakersRow8Y = 200;

    attakersRow9X = 610;
    attakersRow9Y = 200;

    //attakers row3
    attakersRow10X = 50;
    attakersRow10Y = 250;

    attakersRow12X = 120;
    attakersRow12Y = 250;

    attakersRow13X = 190;
    attakersRow13Y = 250;

    attakersRow14X = 260;
    attakersRow14Y = 250;

    attakersRow15X = 330;
    attakersRow15Y = 250;

    attakersRow16X = 400;
    attakersRow16Y = 250;

    attakersRow17X = 470;
    attakersRow17Y = 250;

    attakersRow18X = 540;
    attakersRow18Y = 250;

    attakersRow19X = 610;
    attakersRow19Y = 250;

    //attakers row 4

    attakersRow41X = 50;
    attakersRow41Y = 300;

    attakersRow42X = 120;
    attakersRow42Y = 300;

    attakersRow43X = 190;
    attakersRow43Y = 300;

    attakersRow44X = 260;
    attakersRow44Y = 300;

    attakersRow45X = 330;
    attakersRow45Y = 300;

    attakersRow46X = 400;
    attakersRow46Y = 300;

    attakersRow47X = 470;
    attakersRow47Y = 300;

    attakersRow48X = 540;
    attakersRow48Y = 300;

    attakersRow49X = 610;
    attakersRow49Y = 300;

    //attakers row 5
    attakersRow51X = 50;
    attakersRow51Y = 350;

    attakersRow52X = 120;
    attakersRow52Y = 350;

    attakersRow53X = 190;
    attakersRow53Y = 350;

    attakersRow54X = 260;
    attakersRow54Y = 350;

    attakersRow55X = 330;
    attakersRow55Y = 350;

    attakersRow56X = 400;
    attakersRow56Y = 350;

    attakersRow57X = 470;
    attakersRow57Y = 350;

    attakersRow58X = 540;
    attakersRow58Y = 350;

    attakersRow59X = 610;
    attakersRow59Y = 350;
}
 //game screen win then go back 
if(gameScreen === 2 && key === '1'){

    moving();
    motion();
    stone();

    m1X = 260;
    m1Y = 530;
    m1Size = 50;

    m2X = 530;
    m2Y = 530;
    m2Size = 50;
    mImage;


    b11X = 300;
    b11Y = 100;
    b11Width = 100;
    b11Height = 50;
    b11Speed = 2;
    b11Direction = 1;
    bossImage;
    bossLife = 100; 

  	gameScreen = 0;
    lives = 2;

    limitTime = 120;
    rows = 1;

    points = 0;
    rocket1Position = 0;

    rocketWidth = 7;
    rocket1Height = 20;
    rocketSpeed = 5;

    b1X = 50;
    b1Y = 150;
    br1X = b1X;
    br1Y = b1Y;
    br1Position = 1;

    rows = 1;
    currentRow = rows;
    rowDistance = 3;
    aDistance = 0;
    aSpeed = 1;
    aDirection = 1;

    attakers20X = -100;
    attakers20Y = 700;

    attakersX = 50;
    attakersY = 150;

    attakers2X = 120;
    attakers2Y = 150;

    attakers3X = 190;
    attakers3Y = 150;

    attakers4X = 260;
    attakers4Y = 150;

    attakers5X = 330;
    attakers5Y = 150;

    attakers6X = 400;
    attakers6Y = 150;

    attakers7X = 470;
    attakers7Y = 150;

    attakers8X = 540;
    attakers8Y = 150;

    attakers9X = 610;
    attakers9Y = 150;

    //row2
    attakersRowX = 50;
    attakersRowY = 200;
    attakersWidth = 40;
    attakersHeight = 40;

    attakersRow2X = 120;
    attakersRow2Y = 200;

    attakersRow3X = 190;
    attakersRow3Y = 200;

    attakersRow4X = 260;
    attakersRow4Y = 200;

    attakersRow5X = 330;
    attakersRow5Y = 200;

    attakersRow6X = 400;
    attakersRow6Y = 200;

    attakersRow7X = 470;
    attakersRow7Y = 200;

    attakersRow8X = 540;
    attakersRow8Y = 200;

    attakersRow9X = 610;
    attakersRow9Y = 200;

    //attakers row3
    attakersRow10X = 50;
    attakersRow10Y = 250;

    attakersRow12X = 120;
    attakersRow12Y = 250;

    attakersRow13X = 190;
    attakersRow13Y = 250;

    attakersRow14X = 260;
    attakersRow14Y = 250;

    attakersRow15X = 330;
    attakersRow15Y = 250;

    attakersRow16X = 400;
    attakersRow16Y = 250;

    attakersRow17X = 470;
    attakersRow17Y = 250;

    attakersRow18X = 540;
    attakersRow18Y = 250;

    attakersRow19X = 610;
    attakersRow19Y = 250;

    //attakers row 4

    attakersRow41X = 50;
    attakersRow41Y = 300;

    attakersRow42X = 120;
    attakersRow42Y = 300;

    attakersRow43X = 190;
    attakersRow43Y = 300;

    attakersRow44X = 260;
    attakersRow44Y = 300;

    attakersRow45X = 330;
    attakersRow45Y = 300;

    attakersRow46X = 400;
    attakersRow46Y = 300;

    attakersRow47X = 470;
    attakersRow47Y = 300;

    attakersRow48X = 540;
    attakersRow48Y = 300;

    attakersRow49X = 610;
    attakersRow49Y = 300;

    //attakers row 5
    attakersRow51X = 50;
    attakersRow51Y = 350;

    attakersRow52X = 120;
    attakersRow52Y = 350;

    attakersRow53X = 190;
    attakersRow53Y = 350;

    attakersRow54X = 260;
    attakersRow54Y = 350;

    attakersRow55X = 330;
    attakersRow55Y = 350;

    attakersRow56X = 400;
    attakersRow56Y = 350;

    attakersRow57X = 470;
    attakersRow57Y = 350;

    attakersRow58X = 540;
    attakersRow58Y = 350;

    attakersRow59X = 610;
    attakersRow59Y = 350;
}}

function bullet(){
        //destroy them
        if(rocket1X >= attakersX - attakersWidth / 2 && rocket1X <= attakersX + attakersWidth / 2 && rocket1Y >= attakersY - attakersHeight / 2 && rocket1Y <= attakersY + attakersHeight / 2){
            points = points + 1;
            attakersX = -1000;
            rocket1Position = 2;}

            if(rocket1X >= attakers2X - attakersWidth / 2 && rocket1X <= attakers2X + attakersWidth / 2 && rocket1Y >= attakers2Y - attakersHeight / 2 && rocket1Y <= attakers2Y + attakersHeight / 2){
            points = points + 1;
            attakers2X = -1000;
            rocket1Position = 2;}

            if(rocket1X >= attakers3X - attakersWidth / 2 && rocket1X <= attakers3X + attakersWidth / 2 && rocket1Y >= attakers3Y - attakersHeight / 2 && rocket1Y <= attakers3Y + attakersHeight / 2){
                points = points + 1;
                attakers3X = -1000;
                rocket1Position = 2;}

            if(rocket1X >= attakers4X - attakersWidth / 2 && rocket1X <= attakers4X + attakersWidth / 2 && rocket1Y >= attakers4Y - attakersHeight / 2 && rocket1Y <= attakers4Y + attakersHeight / 2){
                points = points + 1;
                attakers4X = -1000;
                rocket1Position = 2;}

            if(rocket1X >= attakers5X - attakersWidth / 2 && rocket1X <= attakers5X + attakersWidth / 2 && rocket1Y >= attakers5Y - attakersHeight / 2 && rocket1Y <= attakers5Y + attakersHeight / 2){
                points = points + 1;
                attakers5X = -1000;
                rocket1Position = 2;}

            if(rocket1X >= attakers6X - attakersWidth / 2 && rocket1X <= attakers6X + attakersWidth / 2 && rocket1Y >= attakers6Y - attakersHeight / 2 && rocket1Y <= attakers6Y + attakersHeight / 2){
                points = points + 1;
                attakers6X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakers7X - attakersWidth / 2 && rocket1X <= attakers7X + attakersWidth / 2 && rocket1Y >= attakers7Y - attakersHeight / 2 && rocket1Y <= attakers7Y + attakersHeight / 2){
                points = points + 1;
                attakers7X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakers8X - attakersWidth / 2 && rocket1X <= attakers8X + attakersWidth / 2 && rocket1Y >= attakers8Y - attakersHeight / 2 && rocket1Y <= attakers8Y + attakersHeight / 2){
                points = points + 1;
                attakers8X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakers9X - attakersWidth / 2 && rocket1X <= attakers9X + attakersWidth / 2 && rocket1Y >= attakers9Y - attakersHeight / 2 && rocket1Y <= attakers9Y + attakersHeight / 2){
                points = points + 1;
                attakers9X = -1000;
                rocket1Position = 2;}

            //row 2
            if(rocket1X >= attakersRowX - attakersWidth / 2 && rocket1X <= attakersRowX + attakersWidth / 2 && rocket1Y >= attakersRowY - attakersHeight / 2 && rocket1Y <= attakersRowY + attakersHeight / 2){
                points = points + 1;
                attakersRowX = -1000;
                rocket1Position = 2;}

            if(rocket1X >= attakersRow2X - attakersWidth / 2 && rocket1X <= attakersRow2X + attakersWidth / 2 && rocket1Y >= attakersRow2Y - attakersHeight / 2 && rocket1Y <= attakersRow2Y + attakersHeight / 2){
                points = points + 1;
                attakersRow2X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow3X - attakersWidth / 2 && rocket1X <= attakersRow3X + attakersWidth / 2 && rocket1Y >= attakersRow3Y - attakersHeight / 2 && rocket1Y <= attakersRow3Y + attakersHeight / 2){
                points = points + 1;
                attakersRow3X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow4X - attakersWidth / 2 && rocket1X <= attakersRow4X + attakersWidth / 2 && rocket1Y >= attakersRow4Y - attakersHeight / 2 && rocket1Y <= attakersRow4Y + attakersHeight / 2){
                points = points + 1;
                attakersRow4X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow5X - attakersWidth / 2 && rocket1X <= attakersRow5X + attakersWidth / 2 && rocket1Y >= attakersRow5Y - attakersHeight / 2 && rocket1Y <= attakersRow5Y + attakersHeight / 2){
                points = points + 1;
                attakersRow5X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow6X - attakersWidth / 2 && rocket1X <= attakersRow6X + attakersWidth / 2 && rocket1Y >= attakersRow6Y - attakersHeight / 2 && rocket1Y <= attakersRow6Y + attakersHeight / 2){
                points = points + 1;
                attakersRow6X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow7X - attakersWidth / 2 && rocket1X <= attakersRow7X + attakersWidth / 2 && rocket1Y >= attakersRow7Y - attakersHeight / 2 && rocket1Y <= attakersRow7Y + attakersHeight / 2){
                points = points + 1;
                attakersRow7X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow8X - attakersWidth / 2 && rocket1X <= attakersRow8X + attakersWidth / 2 && rocket1Y >= attakersRow8Y - attakersHeight / 2 && rocket1Y <= attakersRow8Y + attakersHeight / 2){
                points = points + 1;
                attakersRow8X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow9X - attakersWidth / 2 && rocket1X <= attakersRow9X + attakersWidth / 2 && rocket1Y >= attakersRow9Y - attakersHeight / 2 && rocket1Y <= attakersRow9Y + attakersHeight / 2){
                points = points + 1;
                attakersRow9X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow10X - attakersWidth / 2 && rocket1X <= attakersRow10X + attakersWidth / 2 && rocket1Y >= attakersRow10Y - attakersHeight / 2 && rocket1Y <= attakersRow10Y + attakersHeight / 2){
                points = points + 1;
                attakersRow10X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow12X - attakersWidth / 2 && rocket1X <= attakersRow12X + attakersWidth / 2 && rocket1Y >= attakersRow12Y - attakersHeight / 2 && rocket1Y <= attakersRow12Y + attakersHeight / 2){
                points = points + 1;
                attakersRow12X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow13X - attakersWidth / 2 && rocket1X <= attakersRow13X + attakersWidth / 2 && rocket1Y >= attakersRow13Y - attakersHeight / 2 && rocket1Y <= attakersRow13Y + attakersHeight / 2){
                points = points + 1;
                attakersRow13X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow14X - attakersWidth / 2 && rocket1X <= attakersRow14X + attakersWidth / 2 && rocket1Y >= attakersRow14Y - attakersHeight / 2 && rocket1Y <= attakersRow14Y + attakersHeight / 2){
                points = points + 1;
                attakersRow14X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow15X - attakersWidth / 2 && rocket1X <= attakersRow15X + attakersWidth / 2 && rocket1Y >= attakersRow15Y - attakersHeight / 2 && rocket1Y <= attakersRow15Y + attakersHeight / 2){
                points = points + 1;
                attakersRow15X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow16X - attakersWidth / 2 && rocket1X <= attakersRow16X + attakersWidth / 2 && rocket1Y >= attakersRow16Y - attakersHeight / 2 && rocket1Y <= attakersRow16Y + attakersHeight / 2){
                points = points + 1;
                attakersRow16X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow17X - attakersWidth / 2 && rocket1X <= attakersRow17X + attakersWidth / 2 && rocket1Y >= attakersRow17Y - attakersHeight / 2 && rocket1Y <= attakersRow17Y + attakersHeight / 2){
                points = points + 1;
                attakersRow17X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow18X - attakersWidth / 2 && rocket1X <= attakersRow18X + attakersWidth / 2 && rocket1Y >= attakersRow18Y - attakersHeight / 2 && rocket1Y <= attakersRow18Y + attakersHeight / 2){
                points = points + 1;
                attakersRow18X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow19X - attakersWidth / 2 && rocket1X <= attakersRow19X + attakersWidth / 2 && rocket1Y >= attakersRow19Y - attakersHeight / 2 && rocket1Y <= attakersRow19Y + attakersHeight / 2){
                points = points + 1;
                attakersRow19X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow41X - attakersWidth / 2 && rocket1X <= attakersRow41X + attakersWidth / 2 && rocket1Y >= attakersRow41Y - attakersHeight / 2 && rocket1Y <= attakersRow41Y + attakersHeight / 2){
                points = points + 1;
                attakersRow41X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow42X - attakersWidth / 2 && rocket1X <= attakersRow42X + attakersWidth / 2 && rocket1Y >= attakersRow42Y - attakersHeight / 2 && rocket1Y <= attakersRow42Y + attakersHeight / 2){
                points = points + 1;
                attakersRow42X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow43X - attakersWidth / 2 && rocket1X <= attakersRow43X + attakersWidth / 2 && rocket1Y >= attakersRow43Y - attakersHeight / 2 && rocket1Y <= attakersRow43Y + attakersHeight / 2){
                points = points + 1;
                attakersRow43X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow44X - attakersWidth / 2 && rocket1X <= attakersRow44X + attakersWidth / 2 && rocket1Y >= attakersRow44Y - attakersHeight / 2 && rocket1Y <= attakersRow44Y + attakersHeight / 2){
                points = points + 1;
                attakersRow44X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow45X - attakersWidth / 2 && rocket1X <= attakersRow45X + attakersWidth / 2 && rocket1Y >= attakersRow45Y - attakersHeight / 2 && rocket1Y <= attakersRow45Y + attakersHeight / 2){
                points = points + 1;
                attakersRow45X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow46X - attakersWidth / 2 && rocket1X <= attakersRow46X + attakersWidth / 2 && rocket1Y >= attakersRow46Y - attakersHeight / 2 && rocket1Y <= attakersRow46Y + attakersHeight / 2){
                points = points + 1;
                attakersRow46X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow47X - attakersWidth / 2 && rocket1X <= attakersRow47X + attakersWidth / 2 && rocket1Y >= attakersRow47Y - attakersHeight / 2 && rocket1Y <= attakersRow47Y + attakersHeight / 2){
                points = points + 1;
                attakersRow47X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow48X - attakersWidth / 2 && rocket1X <= attakersRow48X + attakersWidth / 2 && rocket1Y >= attakersRow48Y - attakersHeight / 2 && rocket1Y <= attakersRow48Y + attakersHeight / 2){
                points = points + 1;
                attakersRow48X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow49X - attakersWidth / 2 && rocket1X <= attakersRow49X + attakersWidth / 2 && rocket1Y >= attakersRow49Y - attakersHeight / 2 && rocket1Y <= attakersRow49Y + attakersHeight / 2){
                points = points + 1;
                attakersRow49X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow51X - attakersWidth / 2 && rocket1X <= attakersRow51X + attakersWidth / 2 && rocket1Y >= attakersRow51Y - attakersHeight / 2 && rocket1Y <= attakersRow51Y + attakersHeight / 2){
                points = points + 1;
                attakersRow51X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow52X - attakersWidth / 2 && rocket1X <= attakersRow52X + attakersWidth / 2 && rocket1Y >= attakersRow52Y - attakersHeight / 2 && rocket1Y <= attakersRow52Y + attakersHeight / 2){
                points = points + 1;
                attakersRow52X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow53X - attakersWidth / 2 && rocket1X <= attakersRow53X + attakersWidth / 2 && rocket1Y >= attakersRow53Y - attakersHeight / 2 && rocket1Y <= attakersRow53Y + attakersHeight / 2){
                points = points + 1;
                attakersRow53X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow54X - attakersWidth / 2 && rocket1X <= attakersRow54X + attakersWidth / 2 && rocket1Y >= attakersRow54Y - attakersHeight / 2 && rocket1Y <= attakersRow54Y + attakersHeight / 2){
                points = points + 1;
                attakersRow54X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow55X - attakersWidth / 2 && rocket1X <= attakersRow55X + attakersWidth / 2 && rocket1Y >= attakersRow55Y - attakersHeight / 2 && rocket1Y <= attakersRow55Y + attakersHeight / 2){
                points = points + 1;
                attakersRow55X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow56X - attakersWidth / 2 && rocket1X <= attakersRow56X + attakersWidth / 2 && rocket1Y >= attakersRow56Y - attakersHeight / 2 && rocket1Y <= attakersRow56Y + attakersHeight / 2){
                points = points + 1;
                attakersRow56X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow57X - attakersWidth / 2 && rocket1X <= attakersRow57X + attakersWidth / 2 && rocket1Y >= attakersRow57Y - attakersHeight / 2 && rocket1Y <= attakersRow57Y + attakersHeight / 2){
                points = points + 1;
                attakersRow57X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow58X - attakersWidth / 2 && rocket1X <= attakersRow58X + attakersWidth / 2 && rocket1Y >= attakersRow58Y - attakersHeight / 2 && rocket1Y <= attakersRow58Y + attakersHeight / 2){
                points = points + 1;
                attakersRow58X = -1000;
                rocket1Position = 2;}
            if(rocket1X >= attakersRow59X - attakersWidth / 2 && rocket1X <= attakersRow59X + attakersWidth / 2 && rocket1Y >= attakersRow59Y - attakersHeight / 2 && rocket1Y <= attakersRow59Y + attakersHeight / 2){
                points = points + 1;
                attakersRow59X = -1000;
                rocket1Position = 2;}
}

function keyPressed(){

    if(keyIsDown(37) && keyPressed){
        playerX = playerX - playerSpeed;
    } 

    if(keyIsDown(39) && keyPressed){
        playerX = playerX + playerSpeed;
    } 
} 

//new

function stone(){
    image(mImage, m1X, m1Y, m1Size, m1Size);

    image(mImage, m2X, m2Y, m2Size, m2Size);

    if(rocket1X >= m1X-m1Size/2 && rocket1X <= m1X+m1Size/2 && rocket1Y >= m1Y- m1Size/2 && rocket1Y <= m1Y + m1Size/2){
       if(m1Size >= 20){
           m1Size= m1Size - 10;
           rocket1Position = 2;
       }else {
           m1X = -10000;
           rocket1Position = 2;
       } 
    }

    if(rocket1X >= m2X - m2Size/2 && rocket1X <= m2X + m2Size/2 && rocket1Y>= m2Y- m2Size /2 && rocket1Y <= m2Y + m2Size/2){
        if(m2Size >= 20){
            m2Size= m2Size - 10;
            rocket1Position = 2;
        }else {
            m2X = -10000;
            rocket1Position = 2;
        } 
     }
}

function rocket(){
    //bullet 
    fill(0, 134, 195);
    rect(rocket1X + 26 , rocket1Y, rocketWidth-10, rocket1Height);

    if(shoot === true && rocket1Position === 0){
        rocket1Position = 1;
    }
 
    if(rocket1Position === 1){
        rocket1X = rocket1X;
        rocket1Y = rocket1Y - rocketSpeed; //move vertically

        if(rocket1Y <= 0){
            rocket1Position = 2; //reload
        }
    } else {
        rocket1Y = playerY;
        rocket1X = playerX;
    }

    //reload back to the player 
    if(rocket1Position === 2){
        rocket1Y = playerY;
        rocket1X = playerX;
        rocket1Position = 0; // return back to the player 
    }
}

//shoot
function keyType(){
    if(keyIsDown(32)){
        shoot = true;
    }else{
        shoot = false;
    }
}   
  //load images
function preload(){
    playerImage = loadImage('you.png');
    attackersImage = loadImage('attakers.png');
    //new
    mImage = loadImage('stone.png');
    //new
    bossImage = loadImage('boss.png');
}

//save your high score
function saveHighscore() {
    const nameElement = document.getElementById("name");
    let highscore = {
      name: nameElement.value,
      score: points,
    };
  
    
      
    if (localStorage.highscore === undefined) {
        localStorage.highscore = JSON.stringify([]);
      }
      let highscoreArray = JSON.parse(localStorage.highscore);
      highscoreArray.push(highscore);
      localStorage.highscore = JSON.stringify(highscoreArray);
  
      displayHighscore();
    }

   function displayHighscore() {
    if (localStorage.highscore !== undefined) {
      let highscoreArray = JSON.parse(localStorage.highscore);
      highscoreArray.sort(function (a, b) {
        return b.score - a.score;
      });
  
      const highscoreElement = document.getElementById("highscore");
      highscoreElement.innerText = "";
      for (let score of highscoreArray) {
        let index = highscoreArray.indexOf(score);
        if (index <= 4) {
          const item = document.createElement("li");
          item.innerText = score.name + " : " + score.score;
          highscoreElement.appendChild(item);
        }
      }
    }
  }
  
  function loadHandler() {
    const saveButton = document.getElementById("save");
    saveButton.addEventListener("click", function () {
      saveHighscore();
    });
    displayHighscore();
  }
  window.addEventListener("load", loadHandler);

// # fop-project-only-me-group-23
// fop-project-only-me-group-23 created by GitHub Classroom

// in this project I got inspration from https://www.youtube.com/watch?v=qCBiKJbLcFI&t=3484s(which confuse me) AND https://www.youtube.com/watch?v=FX-u9xtZhLA&t=617s (easier one).
// ****and then I mixe it with my knowledge as well****

// for the loccal storage:
// https://www.youtube.com/watch?v=k8yJCeuP6I8&t=253s

// and my friends help in local storage (tobias);

// and to set back to the frist tage I god help from AbdulMalik;

// and of course got help from Garrit and Evelin in lab session;

// also learned something from the lunar lander game as well;