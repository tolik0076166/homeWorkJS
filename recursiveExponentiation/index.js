function pow(num, degree) {
    if (degree === 0) {
      return 1;
    } else if (degree < 0) {
      return 1 / pow(num, -degree);
    } else {
      return num * pow(num, degree - 1);
    }
  }
  
  let num = Number(prompt('Введите число:'));
  let degree = Number(prompt('Введите степень:'));
  
  let result = pow(num, degree);
  alert(`Результат: ${result}`);
  