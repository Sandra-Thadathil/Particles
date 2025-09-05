let particleArray = []; // Array to hold particle objects

function setup() {
  createCanvas(1500, 1500);  // Set canvas size
  // Initialize the particle array with 3000 particles
  for (let i = 0; i < 5000; i++) {
    particleArray[i] = new Particle(); 
  }
}

function draw() {
  background(0);  // Set background color

  // Update and show each particle
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].update();
    particleArray[i].show();
  }
}

function mousePressed() {
  // Reset each particle and reinitialize them when mouse is pressed
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].reset(); // Reset particle properties
    particleArray[i] = new Particle(); // Reinitialize the particle (like initializeParticle() in Processing)
  }
}



// Particle class definition in JavaScript
class Particle {
  constructor() {
    this.isActive = false;
    this.x = mouseX; // Initialize position to mouse position
    this.y = mouseY;
    this.velX = random(-5, 5); // Random horizontal velocity
    this.velY = random(-5, 5); // Random vertical velocity
    this.c = color(random(0, 255), random(0, 255), random(0, 255)); // Random color
    this.size = 2; // Particle size
    this.lifeRemaining = 255; // Life remaining (can be used to fade out)
  }

  // Update the particle's position
  update() {
    if (!this.isActive) {
      this.x += this.velX;
      this.y += this.velY;
      this.lifeRemaining--;

      // If particle hits the edges of the canvas, reverse its velocity
      if (this.x >= width || this.x <= 0) {
        this.velX *= -1;
      }
      if (this.y >= height || this.y <= 0) {
        this.velY *= -1;
      }
    }

    // If the life remaining reaches 0, deactivate the particle
    if (this.lifeRemaining <= 0) {
      this.isActive = true;
    }
  }

  // Display the particle
  show() {
    fill(this.c);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }

  // Reset the particle to its initial state
  reset() {
    if (this.isActive) {
      this.x = mouseX;  // Reset to mouse position
      this.y = mouseY;
      this.velX = 0;
      this.velY = 0;
      this.lifeRemaining = 255;
      this.isActive = false
    }
  }
}