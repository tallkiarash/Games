// GLOBAL VARIABLES
let rocketX = 10;
let rocketY = 10;
let speed = 0;
let landerX;
let gameIsActive = true;

const groundToLand = 500;
const grav = 0.4;
const timeLimit = 15;
const landingZoneWidth = 80;
let stage = 0;
let totalTime = 0;
let splashTime = 0;
let gameTime = 0;

function setup() {
  createCanvas(800, 600);
  landerX = width / 2 - landingZoneWidth / 2;
  splashTime = millis();
}

function draw() {
  clear();
  totalTime = millis();
  gameTime = int((totalTime - splashTime) / 1000);

  if (stage === 0) {
    splash();
  } else if (stage === 1) {
    runGame();
  } else if (stage === 2) {
    win();
  } else if (stage === 3) {
    lose();
  }

  // START game with SPACE key
  if (keyIsDown(32) && stage === 0) {
    stage = 1;
    splashTime = millis(); // reset timer
  }

  // RESTART game with mouse click in win or lose
  if (mouseIsPressed && (stage === 2 || stage === 3)) {
    resetGame();
  }
}

function splash() {
  background(0);
  fill(0, 255, 0);
  textSize(40);
  textAlign(CENTER);
  text("* Kiarash Game *", width / 2, 200);
  textSize(14);
  fill(0, 0, 255);
  text("*** Made with Love ***", width / 2, 230);

  fill(250, 100, 0);
  textSize(40);
  text("* How to Play *", width / 2, 300);

  textSize(14);
  fill(0, 200, 200);
  text("*** Use arrow keys to move the rocket ***", width / 2, 330);

  fill(255, 0, 0);
  text("*** Press SPACE to start ***", width / 2, 390);
}

function runGame() {
  background(30);
  drawGround(groundToLand);
  drawLandingZone();
  drawRocket(rocketX, rocketY);

  if (gameIsActive) {
    // Vertical movement
    if (keyIsDown(DOWN_ARROW)) {
      speed += 0.8;
    } else if (keyIsDown(UP_ARROW)) {
      speed -= 0.8;
    }

    // Horizontal movement
    if (keyIsDown(LEFT_ARROW)) {
      rocketX -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      rocketX += 5;
    }

    speed += grav;
    rocketY += speed;

    // Timer display
    fill(255, 0, 0);
    textSize(20);
    text("Time Left: " + max(timeLimit - gameTime, 0), 50, 50);

    // Check for ground collision
    if (rocketY + 120 > groundToLand) {
      rocketY = groundToLand - 120;
      gameIsActive = false;

      if (
        rocketX > landerX &&
        rocketX < landerX + landingZoneWidth &&
        speed <= 3
      ) {
        stage = 2; // win
      } else {
        stage = 3; // lose
      }
    }

    if (gameTime >= timeLimit) {
      stage = 3;
      gameIsActive = false;
    }
  }
}

function drawRocket(x, y) {
  noStroke();
  fill(255, 0, 0); // main body
  rect(x + 310, y, 100, 100, 5);

  fill(0, 0, 255); // wings
  rect(x + 408, y + 60, 25, 20);
  rect(x + 428, y + 60, 25, 60);
  rect(x + 275, y + 60, 25, 60);
  rect(x + 292, y + 60, 20, 20);

  fill(0); // exhaust
  rect(x + 330, y + 100, 60, 8);
}

function drawGround(y) {
  fill(255, 119, 10);
  rect(0, y, width, height - y);
}

function drawLandingZone() {
  fill(0, 255, 0);
  rect(landerX, groundToLand - 10, landingZoneWidth, 10);
}

function win() {
  background(0, 255, 0);
  fill(0);
  textSize(40);
  textAlign(CENTER);
  text("Victory!", width / 2, 200);

  textSize(15);
  fill(250, 0, 0);
  text("Click to restart", width / 2, 250);
}

function lose() {
  background(255, 0, 0);
  fill(0);
  textSize(40);
  textAlign(CENTER);
  text("Game Over", width / 2, 200);

  textSize(15);
  text("Click to restart", width / 2, 250);
}

function resetGame() {
  rocketX = 10;
  rocketY = 10;
  speed = 0;
  gameIsActive = true;
  stage = 0;
  splashTime = millis();
}
