
 var font,
  fontsize = 40,font2=20;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('SCRIPTBL.ttf');
}
 
let snowflakes = []; // array to hold snowflake objects

function setup() {
  createCanvas(displayWidth, displayHeight);
  noStroke();
  
}

function draw() {
  background(14,77,146);
  let t = frameCount / 60; // update time
  fill(250,179,195);
  textFont(font);
  textSize(fontsize);
  text('HAPPY BIRTHDAY TO YOU', 0.4 * displayWidth, 0.5 * displayHeight);
  text('Dinda Kiki Lestari', 0.45 * displayWidth, 0.55 * displayHeight);
  textSize(font2);
  text('With Love', 0.75 * displayWidth, 0.9 * displayHeight);
  text('Wardah', 0.75 * displayWidth, 0.95 * displayHeight);
  fill(240);
  // create a random number of snowflakes each frame
  for (var i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}