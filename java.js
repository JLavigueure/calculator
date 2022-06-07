// math functions

function operator(sign, x, y) {
  if (sign == '+') {
    add(x, y);
  }
  else if (sign == '-') {
    subtract(x, y);
  }
  else if (sign == '/') {
    divide(x, y);
  }
  else if (sign == 'x') {
    multiply(x, y);
  }
  else {return("Error");}
}

function add(x, y) {
    return(x + y);
  }
  
  function subtract(x, y) {
    return(x - y);
  }
  
  function multiply(x, y) {
    return(x * y);
  }
  
  function divide(x, y) {
    return(x / y);
  }