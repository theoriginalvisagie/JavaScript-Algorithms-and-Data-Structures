/**
 * Return true if the given string is a palindrome. Otherwise, return false.
 */
function palindrome(str) {
    let regexPattern = /[^A-Za-z0-9]/g;
    str = str.replace(" ","");
    str = str.replace(regexPattern,"");
    str = str.toLowerCase();
  
    let reversedStr = str.split("").reverse().join("");
  
    if(str == reversedStr){
      return true;
    }else{
      return false;
    }
    
}
  
palindrome("2A3*3a2");
palindrome("racecar");
palindrome("RaceCar");
palindrome("2_A3*3#A2");