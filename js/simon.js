console.log('simon.js READY!');

function SimonGame () {
  this.colors = ['red', 'green', 'blue', 'yellow'];

  // Our current sequence
  this.sequence = [];

  // Where the user is in the sequence.
  this.userClickCount = 0;

  // What the player's score is
  this.round = 1;
}

SimonGame.prototype.startGame = function () {
  console.log('Starting the game...');

  this.addColor();
  this.showSequence();
};

// Chooses one of the 4 colors at random and adds it to the sequence
SimonGame.prototype.addColor = function () {
  var randomIndex = Math.floor(Math.random() * 4);

  this.sequence.push( this.colors[randomIndex] );
};

SimonGame.prototype.showSequence = function () {
  // turns on the light by adding class="lighton"
  $('#' + this.sequence[0]).addClass('lighton');
    // $('#red').addClass('lighton')

  // after 700ms...
  setTimeout(function () {
    // turns off the light by removing the class
    $('button').removeClass('lighton');
  }, 700);
};
