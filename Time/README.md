Як отримати дату+час з мілісекунд іншим стособом ніж в доданому коду?

let startDate = new Date('2023-06-23');
let endDate = new Date('2023-06-30');

let timeDiff = Math.abs(endDate.getTime() - startDate.getTime());

console.log(timeDiff);

let daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); // як зробити це ж використовуючи Date

console.log(daysDiff);