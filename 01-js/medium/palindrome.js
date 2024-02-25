/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  var temp = "";
  

  for(let a = 0 ; a < str.length ; a++){
    if(str[a] == ',' || str[a] == '?' || str[a] == '!' || str[a] == ' ' || str[a] == '.'){
      continue;
    }
    if(str[a].toLowerCase() >= 'a' || str[a].toLowerCase() <= 'z'){
      temp += str[a].toLowerCase();
    }
  }
  let i = 0;
  let j = temp.length -1;
  // console.log(temp);
  while(i <= j){
    if(temp[i].toLowerCase() !=  temp[j].toLowerCase()){
      return false;
    }
    i++;
    j--;
  }
  return true;
}
// isPalindrome("Eva, can I see bees in a cave?");

module.exports = isPalindrome;
