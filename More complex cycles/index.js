//Output the numbers from 20 to 30 through the gap using a step of 0.5 (20 20.5 21 21.5….).

document.write('Виведення числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….). <br>');

for (i = 20; i <= 30; i += 0.5) {
    if (i === 30) {
      document.write(i);
    } else {
      document.write(i + ', ');
    }
  }

//Output data with the calculation of the cost of 10, 20, 30... 100 dollars.

document.write('<br> <br> Виведення даних з розрахунком вартості 10, 20, 30... 100 доларів. При курсі один долар коштує 27 гривень. <br>');

let exchangeRate = 27;

for (let i = 10; i <= 100; i += 10) {
  document.write(`${i} доларів = ${i * exchangeRate} гривень <br>`);
}

// This is an integer. Output all integers from 1 to 100 whose square does not exceed N numbers.

let n = prompt('Введіть  число вид 1 до 100');

if (n === null || n === '') {
    alert('Помилка: значення не було введено');
    document.write('<br> Помилка: значення не було введено');
  } else if (isNaN(n)) {
    alert('Помилка: введено не число');
    document.write('<br> Помилка: введено не число');
  } else if (n < 1 || n > 100) {
    alert('Помилка: число повинне бути в діапазоні від 1 до 100');
    document.write('<br> Помилка: число повинне бути в діапазоні від 1 до 100');
  } else {
    document.write('<br> Виведення всіх цілих чисел від 1 до 100, квадрат яких не перевищує даного числа:');

    for (let i = 1; i <= 100; i++) {
     if (i * i <= n) {
      document.write('<br>' + i);
      } else {
         break;
        }
    }
      
//This is an integer. Find out whether it is prime (prime is a number greater than 1 that has no divisors other than 1 and itself).

document.write('<br> <br> Зясуваня, чи є дане ціле число  простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).');

let isPrime = true;

if (n > 1) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
} else {
  isPrime = false;
}

if (isPrime) {
  document.write(`<br> ${n} є простим числом.`);
} else {
  document.write(`<br> ${n} не є простим числом.`);
}


// //Given some number. Determine whether it is possible to obtain this number by reducing the number 3 to a certain power. (For example, the numbers 9, 81 can be obtained, and 13 cannot be obtained).

document.write('<br> <br>  Визначення, чи можна одержати дане деяке число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна). <br>');

let num = parseInt(n);

while (num % 3 === 0) {
    num /= 3;
  }
  
  if (num === 1) {
    document.write(`Задане ${n} число можна отримати шляхом зведення числа 3 у деякий ступінь.`);
  } else {
    document.write(`Задане число ${n} не можна отримати шляхом зведення числа 3 у деякий ступінь.`);
  }
}
