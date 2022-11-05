/**
 * In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by 
 * keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.
 * 
 * Having more high cards remaining in the deck favors the player. 
 * Each card is assigned a value according to the table below. When the count is positive, the player should bet high. 
 * When the count is zero or negative, the player should bet low.
 */
let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

cc(2); 
cc(3); 
cc(7); 
cc('K'); 
cc('A');