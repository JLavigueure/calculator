function addScreen(int) {
  // adds int text to calculator string
  document.getElementById("screenText").innerHTML += int
}
function checkOperator(str, newOperat) {
  //checks for already entered operator, replaces with or adds new operator
  const operates = / \+ | \- | \/ | X /;
  if (operates.test(str)) {
    let newStr = str.replace(operates, newOperat);
    document.getElementById("screenText").innerHTML = newStr;
  }
  else {
    addScreen(newOperat);
  }
}
(function addNumEventListeners() {
  document.getElementById("zero").addEventListener("click", () => {
    addScreen(0);
  });
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
    return(add(x, y));
  }
  else if (sign == '-') {
    return(subtract(x, y));
  }
  else if (sign == '/') {
    return(divide(x, y));
  }
  else if (sign == 'X') {
    return(multiply(x, y));
  }
  else {return}
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
  if (y == 0) {return("Error");}
  else {return(x / y);}
}

// equals button
(function equal(){
  document.getElementById("equal").addEventListener("click", () => {
    let screen = document.getElementById("screenText").innerHTML;
    let input = screen.split(" ");
    let answer = operator(input[1], parseFloat(input[0]), parseFloat(input[2]));
    console.log(answer)
    if (answer == undefined) {
      return;
    }
    document.getElementById("screenText").innerHTML = answer;
  })
})();