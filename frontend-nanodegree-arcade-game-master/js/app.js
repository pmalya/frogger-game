// Enemies our player must avoid
var Enemy = function(x, y) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  this.x = x;
  this.y = y;
  //Set up random speed for enemies to make the game more interesting
  this.speed = 100 + Math.floor(Math.random() * 200);;
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x = this.x + this.speed * dt;
  //When enemy reaches off screen immediatelly new enemy appears.
  if (this.x > 510) {
    this.x = 0;
  }

  //When there is a collision game resets and 1 star removed
  if (player.x < this.x + 80 && player.x + 80 > this.x && player.y < this.y + 60 && player.y + 60 > this.y) {
    player.x = 200;
    player.y = 400;
    alert("SORRY!YOU LOST THE GAME")
    /*TO DO update stars*/
    /*TO DO resetPlayer*/
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.player = 'images/char-pink-girl.png';
};

/*Player.prototype.reachRiver = function () {
  updateStars( 1 );
  reset( this, startX, startY );
};*/

Player.prototype.update = function(dt) {};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.player), this.x, this.y);
};

Player.prototype.handleInput = function(movePlayer) {
  if (movePlayer == 'left' && this.x > 25) {
    this.x -= 90;
  }
  if (movePlayer == 'right' && this.x < 375) {
    this.x += 90;
  }
  if (movePlayer == 'up' && this.y > 0) {
    this.y -= 90;
  }
  if (movePlayer == 'down' && this.y < 400) {
    this.y += 90;
  }
  if (this.y < 0) {
    this.x = 200;
    this.y = 400;
    alert("CONGRATULATIONS! YOU ARE THE WINNER");
  }
};



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var enemy1 = new Enemy(-50, 50);
var enemy2 = new Enemy(-100, 150);
var enemy3 = new Enemy(-75, 225);

var allEnemies = [];
allEnemies.push(enemy1, enemy2, enemy3);


// Place the player object in a variable called player

var player = new Player(200, 400);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});

//Open the window to read the game rules
var acc = document.getElementsByClassName("HowToPlay");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
/*

function gameOver() {
  allEnemies.length = 0;
  reset(player, 200, 400);
  /*TO DO figure out game over popup
}

function newGame(){
  allEnemies.length = 0;
  updateHearts(starterStar);
  resetPlayer();
};

function resetPlayer() {
  reset (player, statX, startY);
  if(stars <= 0){
    gameOver()
  }
};

function updateStars(){};*/
