//A function that calculates the arithmetic mean of only the numerical elements of the given array.
function average(input) {
    let sum = 0;
    let count = 0;
    let arr = input.split(',');
    
    for (let i = 0; i < arr.length; i++) {
      if (!isNaN(arr[i])) {
        sum += parseFloat(arr[i]);
        count++;
      }
    }
    
    if (count > 0) {
      alert(`Середнє арифметичне: ${sum / count}`);
    } else {
      alert('Введені дані не містять чисел');
    }
  }
  
  let input = prompt('Введіть значення для масиву (розділіть комами)');
  
  switch(input){
    case '':
        alert('Введений рядок порожній');
    break;
    case null:
        alert('Ви нажали отмена ')
    default:
        average(input);
  }


// Function doMath
function doMath(x, znak, y) {
    switch (znak) {
      case '+':
        return x + y;
      case '-':
        return x - y;
      case '*':
        return x * y;
      case '/':
        return x / y;
      case '%':
        return x % y;
      case '^':
        return x ** y;
    }
  }

  let x = parseFloat(prompt('Введіть x: '));
  let y = parseFloat(prompt('Введіть y: '));
  let znak = prompt('Введіть znak (+, -, *, /, %, ^): ');
  
  if (isNaN(x)) {
        alert('Не введений x');
  } else if (isNaN(y)){
        alert('Не введений y')
  } else if (znak === '' || znak === null) { 
        alert('Не введений оператор');
  } else if (znak !== '+' && znak !== '-' && znak !== '*' && znak !== '/' && znak !== '%' && znak !== '^') { 
         alert('Не дійсний оператор');
  } else if (x === 0 || y === 0 && znak === '/') { 
         alert('Не можна ділити на нуль');
  } else {
         let result = doMath(x, znak, y);
         alert(`${x} ${znak} ${y} = ${result}`);
  }


// The function of filling two-dimensional array with data.
function fillArray(rows, cols) {
    let arr = [];
    let output = ''; 
    for (let i = 0; i < rows; i++) {
      arr[i] = [];
      for (let j = 0; j < cols; j++) {
        arr[i][j] = prompt(`Введіть елемент [${i}][${j}]: `);
        output += arr[i][j] + ' ';
      }
      output += '\n';
    }
    alert(output); 
    return arr;
  }
  
  let rows = parseInt(prompt('Введіть кількість рядків: '));
  let cols = parseInt(prompt('Введіть кількість стовпців: '));
  let arr = fillArray(rows, cols);
   
  
// A function that removes from the string all the characters that we passed in the second argument
function func(string, chars) {
    let result = '';
    for (let i of string) {
      let found = false;
      for (let j of chars) {
        if (i === j) {
          found = true;
          break;
        }
      }
      if (!found) {
        result += i;
      }
    }
    return result;
  }
  
  let string = prompt('Введіть рядок: ');
  if (string === null || string === '') {
    alert('Ви не ввели рядок!');
  } else {
    let chars = prompt('Введіть символи, які потрібно видалити: ');
    if (chars === null || chars === '') {
      alert('Ви не ввели символи!');
    } else {
      alert(func(string, chars.split('')));
    }
  }
  
  