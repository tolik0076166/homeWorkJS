//Display the numbers from 10 to 20 on the page in one line separated by commas.

document.write('Виведення на сторінку в один рядок через кому числа від 10 до 20. <br>');

for (i = 10; i <= 20; i++) {
    if (i < 20) {
        document.write(`${i}, `);
    } else {
        document.write(i);
    }
}

//Print the squares of numbers from 10 to 20.

document.write('<br> <br> Виведення квадрати чисел від 10 до 20. <br>');

for (i = 10; i <= 20; i++) {
    if (i < 20) {
      document.write(`${i * i}, `);
    } else {
      document.write(i * i);
    }
  }

//Display the multiplication table by 7.

document.write('<br> <br> Виведення  таблицю множення на 7.');

for(i= 1; i <= 10; i++){
    document.write(`<br> 7 x ${i} = ${i * 7}`);
}

//Find the sum of all integers from 1 to 15.

document.write('<br> <br> Знаходження суми всіх цілих чисел від 1 до 15. <br>');

let sum = 0;
for (i = 1; i <= 15; i++){
    sum += i;
}
document.write(sum);

// Find the product of all integers from 15 to 35.

document.write('<br> <br> Знаходження  добутка усіх цілих чисел від 15 до 35. <br>');

let prod = 1;
for (i = 15; i <= 35; i++){
    prod *= i;
}
document.write(prod);

//Find the arithmetic mean of all integers from 1 to 500.

document.write('<br> <br> Знаходження  середнє арифметичне всіх цілих чисел від 1 до 500. <br>');

let total = 0;
for (let i = 1; i <= 500; i++) {
  total += i;
}
let avg = total / 500;
document.write(avg);

//Output the sum of only even numbers in the range from 30 to 80.

document.write('<br> <br> Виведення суму лише парних чисел в діапазоні від 30 до 80. <br>');

let amount = 0;
for (i = 30; i <= 80; i++) {
    if(i % 2 === 0){
        amount += i;
    }
}
document.write(amount);

//Output all numbers in the range from 100 to 200 multiples of 3.

document.write('<br> <br> Виведення всіх чисел в діапазоні від 100 до 200 кратні 3. <br>');

for (i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
      document.write(i);
      if (i !== 198) {
        document.write(', ');
      }
    }
  }

//A natural number is given. Find and display all its divisors on the page.

document.write('<br> <br> Знаходження та виведення из даного натурального числа на сторінку всіх його дільникив <br>');

let n = prompt('Введіть натуральне число');

if (isNaN(n)) {
  document.write('Ви ввели рядок!');
  alert('Ви ввели рядок!');
} else if (n !== null && n !== '') {
  let lastDivisor = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      if (lastDivisor !== 0) {
        document.write(', ');
      }
      document.write(i);
      lastDivisor = i;
    }
  }
} else {
  document.write('Вы не ввели число!')
  alert('Вы не ввели число!');
}


// //Determine the number of its even divisors.

document.write('<br> <br> Визначення кількість його парних дільників. <br>');

let count = 0;
for (let i = 1; i <= n; i++) {
  if (n % i === 0 && i % 2 === 0) {
    count++;
  }
}
document.write(count);

// //Find the sum of its even divisors.

document.write('<br> <br> Знаходження суми його парних дільників. <br>');

let cost = 0;
for (let i = 1; i <= n; i++) {
  if (n % i === 0 && i % 2 === 0) {
    cost += i;
  }
}
document.write(cost);

// Print the complete multiplication table from 1 to 10.

document.write('<br> <br> Друкування повної таблици множення від 1 до 10. <br>');

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      document.write(i + " x " + j + " = " + i*j + "<br>");
    }
    document.write("<br>");
  }
  

