const keys = document.querySelectorAll('.calculator__key');

const display = document.querySelector('.calculator__display');

let currentExpression = '';

function handleButtonClick(event) {
  
  const buttonValue = event.target.value;
  
  if (buttonValue === 'clear') {
    display.value = '';
    currentExpression = '';
    return;
  }
  
  if (buttonValue === '=') {
    try {
      const result = eval(currentExpression);
      display.value = result;
      currentExpression = result;
    } catch (e) {
      display.value = 'Error';
    }
    return;
  }
  
  currentExpression += buttonValue;
  display.value = currentExpression;
}

keys.forEach(key => {
  key.addEventListener('click', handleButtonClick);
});
