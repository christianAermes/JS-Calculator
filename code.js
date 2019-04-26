// get the control elements by ID

var display = document.getElementById("display");
var calculation = document.getElementById("calculation");

var button1 = document.getElementById("one");
var button2 = document.getElementById("two");
var button3 = document.getElementById("three");
var button4 = document.getElementById("four");
var button5 = document.getElementById("five");
var button6 = document.getElementById("six");
var button7 = document.getElementById("seven");
var button8 = document.getElementById("eight");
var button9 = document.getElementById("nine");
var button0 = document.getElementById("zero");

var buttonPoint = document.getElementById("decimal");

var buttonDelete = document.getElementById("clear");

var buttonPlus = document.getElementById("add");
var buttonMinus = document.getElementById("subtract");
var buttonDiv = document.getElementById("divide");
var buttonMult = document.getElementById("multiply");

var buttonEqual = document.getElementById("equals");

var inputNumber = "";
var historyStr = ""; //all inputs are appended to the history String


function changeText(){
  // updates the text of the display on input
  // is called every time a button is clicked
  calculation.innerHTML = historyStr;
  display.innerHTML = inputNumber;
    
}

buttonEqual.onclick = function(){
  // when equal button is clicked, perform the calculation
  // First, split the history string into an array
  var steps = historyStr.replace(/\s/, " ").split(" ")
  
  // convert elements (strings) in step array into floats
  for (var i=0; i<steps.length; i++){
    if (steps[i].match(/\d/g)){
      steps[i] = Number.parseFloat(steps[i]);
    }
  }
  var result = steps[0]; // result of the calculation
  var regEx = /[\+\-\*\/]/; // regex for deetcting mathematcal operators
  for (var i=1; i<steps.length-1; i+=2){
    // go through the steps array and perform each calculation
    if (steps[i] == "+" && steps[i+1] != ""){
      result += steps[i+1]
    } else if (steps[i] == "-" && steps[i+1] != ""){
      result -= steps[i+1]
    } else if (steps[i] == "*" && steps[i+1] != ""){
      result *= steps[i+1]
    } else if (steps[i] == "/" && steps[i+1] != ""){
      result /= steps[i+1]
    }
  }
  display.innerHTML = result;
  historyStr = result;
  calculation.innerHTML = result;
}


// events for every button
buttonPlus.onclick = function(){
  historyStr += " + ";
  inputNumber = "";
  changeText();
}

buttonMinus.onclick = function(){
  historyStr += " - "; 
  inputNumber = "";
  changeText();
}

buttonMult.onclick = function(){
  historyStr += " * ";  
  inputNumber = "";
  changeText();
}

buttonDiv.onclick = function(){
  historyStr += " / ";
  inputNumber = "";
  changeText();
}

buttonDelete.onclick = function(){
  inputNumber = "0";
  historyStr = "";
  result = false;
  changeText();
}

button1.onclick = function(){
  inputNumber == "0" ? inputNumber = button1.innerHTML : inputNumber += button1.innerHTML
  historyStr += button1.innerHTML;
  changeText();
}

button2.onclick = function(){
  inputNumber == "0" ? inputNumber = button2.innerHTML : inputNumber += button2.innerHTML
  historyStr += button2.innerHTML;
  changeText();
}

button3.onclick = function(){
  inputNumber == "0" ? inputNumber = button3.innerHTML : inputNumber += button3.innerHTML
  historyStr += button3.innerHTML;
  changeText();
}

button4.onclick = function(){
  inputNumber == "0" ? inputNumber = button4.innerHTML : inputNumber += button4.innerHTML
  historyStr += button4.innerHTML;
  changeText();
}

button5.onclick = function(){
  inputNumber == "0" ? inputNumber = button5.innerHTML : inputNumber += button5.innerHTML
  historyStr += button5.innerHTML;
  changeText();
}

button6.onclick = function(){
  inputNumber == "0" ? inputNumber = button6.innerHTML : inputNumber += button6.innerHTML
  historyStr += button6.innerHTML;
  changeText();
}

button7.onclick = function(){
  inputNumber == "0" ? inputNumber = button7.innerHTML : inputNumber += button7.innerHTML
  historyStr += button7.innerHTML;
  changeText();
}

button8.onclick = function(){
  inputNumber == "0" ? inputNumber = button8.innerHTML : inputNumber += button8.innerHTML
  historyStr += button8.innerHTML;
  changeText();
}

button9.onclick = function(){
  inputNumber == "0" ? inputNumber = button9.innerHTML : inputNumber += button9.innerHTML
  historyStr += button9.innerHTML;
  changeText();
}

button0.onclick = function(){
  inputNumber == "0"? inputNumber = "0" : inputNumber += button0.innerHTML
  historyStr += button0.innerHTML;
  changeText();
}

buttonPoint.onclick = function(){
  containsDecimal = inputNumber.match(/\./)
  if (!containsDecimal) {
    inputNumber += buttonPoint.innerHTML
    historyStr += buttonPoint.innerHTML;
  }
  changeText();
}