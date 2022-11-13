
/**
 * In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in 
 * order to sink the ball in the hole to complete the play. 
 * Depending on how far above or below par your strokes are, there is a different nickname.

 * Your function will be passed par and strokes arguments. 
 * Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):
 */

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if(strokes == 1){
    return names[0];
  }else if(strokes <= par - 2){
    return names[1];
  }else if(strokes == par - 1){
    return names[2];
  }else if(strokes == par){
    return names[3];
  }else if(strokes == par + 1){
    return names[4];
  }else if(strokes == par + 2){
    return names[5];
  }else if(strokes >= par + 3){
    return names[6];
  }
}

golfScore(5, 4);
golfScore(4, 4);
golfScore(5, 2);
golfScore(4, 1);