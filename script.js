function appendToDisplay(value) {
    const display = document.getElementById("result");
    display.value += value;
  }
  
  // Clears the display
  function clearDisplay() {
    document.getElementById("result").value = "";
  }
  
  // Deletes the last character from the display
  function deleteLast() {
    const display = document.getElementById("result");
    display.value = display.value.slice(0, -1);
  }
  
  // Evaluates the expression in the display
  function calculateResult() {
    const display = document.getElementById("result");
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  }