let Score = function(){
  this.score = 0;
}

Score.prototype.getCurrentScore = function(){
  return this.score;
}

Score.prototype.updateScore = function(){
  return this.score+=10;
}
