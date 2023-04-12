let arr = [];
let arrLength = prompt('Введіть довжину масиву:');

if (arrLength !== null && arrLength !== '' && !isNaN(arrLength)) {
  arrLength = parseInt(arrLength);

  for (let i = 0; i < arrLength; i++) {
    arr.push(prompt(`Введіть елемент з індексом ${i}:`));
  }

  arr.sort(function(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  document.write(`Масив: [${arr}]<br>`);

  arr.splice(1, 3);

  document.write(`Масив після видалення елементів з 2 по 4: [${arr}]`);
  
} else {
  document.write(`Некоректне значення довжини масиву`);
}
