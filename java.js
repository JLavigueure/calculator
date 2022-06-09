function addScreen(int) {
  // adds int text to calculator string
  let display = document.getElementById("screenText").innerHTML;
  if (display == "Error" || (!operates.test(int) && isScreenAnswer == true)) {
    document.getElementById("screenText").innerHTML = "";
  }
  else if (display.length > 14) {
    return;
  }
  isScreenAnswer = false;
  document.getElementById("screenText").innerHTML += int
}
function checkOperator(str, newOperat) {
  //checks for already entered operator, replaces with or adds new operator
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
    let screen = document.getElementById("screenText").innerHTML;
    if(screen.includes('.')) {
      return;
    }
    addScreen(`.`);
  });
  document.getElementById("back").addEventListener("click", () => {
    let screen = document.getElementById("screenText").innerHTML;
    screen = screen.slice(0, -1);
    document.getElementById("screenText").innerHTML = screen;
    isScreenAnswer = false;
  })
  document.getElementById("clear").addEventListener("click", function() {
    document.getElementById("screenText").innerHTML = "";
    clearHx();
    isScreenAnswer = false;
})
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
  else {return("No operator")}
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
  if (y == 0) {return;}
  else {return(x / y);}
}

// equals button
(function equalListener(){
  document.getElementById("equal").addEventListener("click", () => equal())
})();

function equal() {
  let screen = document.getElementById("screenText").innerHTML;
  let input = screen.split(" ");
  let answer = operator(input[1], parseFloat(input[0]), parseFloat(input[2]));
  console.log(answer)
  if (answer == "No operator") { //dont return anything if no operator
    return;
  }
  else if (isNaN(answer) || answer.length > 14) { //return error if NaN or to large num
    document.getElementById("screenText").innerHTML = "Error";
    return;
  }
  answer = +(answer.toFixed(8));
  document.getElementById("screenText").innerHTML = answer;
  addHx(screen, answer);
  isScreenAnswer = true;
}

// history functions
function addHx(input, output) {
  let newDiv1 = document.createElement("div");
  newDiv1.classList.add("history", "equation");
  newDiv1.innerHTML = input;
  document.getElementById("hx").appendChild(newDiv1);

  let newDiv2 = document.createElement("div");
  newDiv2.classList.add("history", "answer");
  newDiv2.innerHTML = output;
  document.getElementById("hx").appendChild(newDiv2);
}
function clearHx() {
  hxContainer = document.getElementById('hx');
  while(hxContainer.firstChild) {
    hxContainer.removeChild(hxContainer.firstChild)
  }
}

// keyboard functions
(function keyboardFunctions() {
  document.addEventListener('keydown', (e) => {
    console.log(e.key);
    screen = document.getElementById("screenText").innerHTML
    if(e.key == ' ') {return;}
    if(e.key <= 9 && e.key >= 0) {
      addScreen(e.key);
      return;
    }
    else if(e.key == '.') {
      if(screen.includes('.')) {
        return;
      }
      addScreen(`.`);
      return;
    }
    else if(e.key == "Backspace") {
      screen = screen.slice(0, -1);
      document.getElementById("screenText").innerHTML = screen;
      isScreenAnswer = false;
      return;
    }
    else if(e.key == "Enter" || e.key == '=') {
      equal();
      return;
    }
    else if(operates2.test(e.key)) {
      if(e.key == 'x' || e.key == '*') {
        checkOperator(screen, ' X ');
        return;
      }
      else {
        checkOperator(screen, ` ${e.key} `);
        return;
      }
    }
  })
})();
const operates = / \+ | \- | \/ | X /;
const operates2 = /\+|\-|\/|x|X|\*/;
let isScreenAnswer = false; //if screen is showing answer from previous equation
// turns to false with clear, back or new num

//TO DO
// add hx to r side of screen
// add keyboard function
// use loop in javascript to create divs instead of html code?