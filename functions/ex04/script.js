let str = prompt('Type something')

let res;

function lastLetter(str) {
    return str.charAt(str.length - 1);
  }
  
  let inputString = prompt('Type something');
  let lastChar = lastLetter(inputString);
  
  alert(lastChar);
  