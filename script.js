
    function sum() {
      // Get the input values
      let firstNumber = parseInt(document.getElementById("firstNumber").value);
      let secondNumber = parseInt(document.getElementById("secondNumber").value);

      // Add the numbers
      let sum = firstNumber + secondNumber;

      // Display the result
      document.getElementById("result").textContent = sum;
    }