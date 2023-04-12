const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// Finding the sum and number of positive elements.

let sumOfPositive = arr.filter(num => num > 0)
                       .reduce((acc, curr) => acc + curr, 0);

let countOfPositive = arr.filter(num => num > 0).length;

console.log('Сума позитивних елементів:', sumOfPositive);
console.log('Кількість позитивних елементів:', countOfPositive);


// Finding the minimum array element and its sequence number.

const minElement = Math.min(...arr);
const minIndex = arr.indexOf(minElement);

console.log('Мінімальний елемент масиву:', minElement);
console.log('Порядковий номер мінімального елемента масиву:', minIndex + 1);


// Finding the maximum array element and its sequence number.

const maxIndex = arr.reduce((maxIndex, currentValue, currentIndex, array) => {
  if (currentValue > array[maxIndex]) {
    return currentIndex;
  } else {
    return maxIndex;
  }
}, 0);

console.log('Максимальний елемент масиву:', arr[maxIndex]);
console.log('Порядковий номер максимального елемента масиву:', maxIndex + 1);


// Determination of the number of negative elements.

const countOfNegative = arr.filter(num => num < 0).length;

console.log('Кількість негативних елементів:', countOfNegative);


// Finding the number of odd positive elements.

const countOfOddPositive = arr.filter(num => num > 0 && num % 2 !== 0)
                              .reduce((acc, num) => acc + 1, 0);

console.log('Кількість непарних позитивних елементів:', countOfOddPositive);


// Finding the number of even positive elements.

const countOfEvenPositive = arr.filter(num => num > 0 && num % 2 === 0).length;

console.log('Кількість парних позитивних елементів:', countOfEvenPositive);


// Finding the sum of even positive elements.

const sumOfEvenPositive = arr.filter(num => num > 0 && num % 2 === 0)
                             .reduce((acc, num) => acc + num, 0);

console.log('Сума парних позитивних елементів:', sumOfEvenPositive);


// Finding the sum of odd positive elements.

const sumOfOddPositive = arr.filter(num => num > 0 && num % 2 !== 0)
                            .reduce((acc, curr) => acc + curr, 0);

console.log('Сума непарних позитивних елементів:', sumOfOddPositive);


// Finding the product of positive elements.

const productOfPositive = arr.reduce((accumulator, currentValue) => {
  if (currentValue > 0) {
    return accumulator * currentValue;
  } else {
    return accumulator;
  }
}, 1);

console.log('Добуток позитивних елементів:', productOfPositive);


// Finding the largest among the elements of the array, the rest are set to zero.

const maxElementValue = Math.max(...arr);
const newArr = arr.map(element => element !== maxElementValue ? 0 : maxElementValue);

console.log('Масив з нулями окрім найбільшого елемента:', newArr);

