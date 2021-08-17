function add(a, b) {
    return a + b
  };
  
  function subtract(a, b) {
    return a - b
  };
  
  function multiply(a, b) {
    return a * b
  };
  
  function divide(a, b) {
    return a / b
  };
  

  function operate(operator, num1, num2) {
    switch (operator) {
      case '+':
        return add(num1, num2)
      case '−':
        return substract(num1, num2)
      case '×':
        return multiply(num1, num2)
      case '÷':
        if (num2 === 0) 
        return null
        else 
        return divide(num1, num2)
      default:
        return null
    }
  };

