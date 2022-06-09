function addScreen(int) {
  // adds int text to calculator string
  document.getElementById("screenText").innerHTML += int
}
function checkOperator(str, newOperat) {
  //checks for already entered operator, replaces with or adds new operator
  const operates = /\+|\-|\/|X/;
  if (operates.test(str)) {
    let newStr = str.replace(operates, newOperat);
    document.getElementById("screenText").innerHTML = newStr;
  }
  else {
    addScreen(newOperat);
  }
}
(function addNumEventListeners() {
  document.getElementById("one").addEventListener("click", () => {
    addScreen(1);
  });
  document.getElementById("two").addEventListener("click", () => {
    addScreen(2);
  });
  document.getElementById("three").addEventListener("click", () => {
    addScreen(3);
  });
  document.getElementById("four").addEventListener("click", () => {
    addScreen(4);
  });
  document.getElementById("five").addEventListener("click", () => {
    addScreen(5);
  });
  document.getElementById("six").addEventListener("click", () => {
    addScreen(6);
  });
  document.getElementById("seven").addEventListener("click", () => {
    addScreen(7);
  });
  document.getElementById("eight").addEventListener("click", () => {
    addScreen(8);
  });
  document.getElementById("nine").addEventListener("click", () => {
    addScreen(9);
  });
  document.getElementById("decimal").addEventListener("click", () => {
    addScreen(`.`);
  });
})();

(function addOperatorEventListeners() {
  //get screen text in variable at time of click, send to checkOperator func
  document.getElementById("divide").addEventListener("click", () => {
    screen = document.getElementById("screenText").innerHTML
    checkOperator(screen, ' / ');
  });
  document.getElementById("multiply").addEventListener("click", () => {
    screen = document.getElementById("screenText").innerHTML
    checkOperator(screen, ' X ');
  });
  document.getElementById("add").addEventListener("click", () => {
    screen = document.getElementById("screenText").innerHTML
    checkOperator(screen, ' + ');
  });
  document.getElementById("subtract").addEventListener("click", () => {
    screen = document.getElementById("screenText").innerHTML
    checkOperator(screen, ' - ');
  });
  document.getElementById("clear").addEventListener("click", function() {
    document.getElementById("screenText").innerHTML = "";
})
})();

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
