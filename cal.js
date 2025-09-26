let display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}
console.log(appendValue);


function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}
// function appendValue(value) {
//     display.value %=value;
    
// }
