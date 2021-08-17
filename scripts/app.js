

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
  
  function displayHistory(toHistory) {
    if (toHistory === 'plus') {
      history.textContent += '+ ';
    } else if (toHistory === 'minus') {
      history.textContent += '- ';
    } else if (toHistory === 'multiply') {
      history.textContent += '× ';
    } else if (toHistory === 'divide') {
      history.textContent += '÷ ';
    } else {
      history.textContent += `${toHistory} `;
    }
  }


  function displayInput(task, value) {
    if (task === 'add') {
      if (newInput === 'Infinity') {
        newInput = '';
      }
      if (value !== '0' || newInput !== '0') {
        newInput += value;
        input.textContent = newInput;
      }
    } else if (task === 'backspace') {
      if (newInput === 'Infinity') {
        newInput = '';
      } else {
        newInput = newInput.slice(0, -1);
      }
      if (newInput.indexOf('.') === -1) {
        decimalPoint.removeAttribute('disabled');
      }
      input.textContent = newInput;
    } else if (task === 'clear') {
      newInput = '';
      decimalPoint.removeAttribute('disabled');
      if (value === 'full') {
        firstNumber = '';
        secondNumber = '';
        action = '';
        history.textContent = '';
        input.textContent = newInput;
      }
    }
  }

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

