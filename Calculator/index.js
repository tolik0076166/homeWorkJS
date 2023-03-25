let operation = prompt('Виберіть операцію (add, sub, mult, div):');
let num1 = parseFloat(prompt('Введіть перше число:'));
let num2 = parseFloat(prompt('Введіть друге число:'));

let result;
    
switch(operation){
    case 'add':
        result = num1 + num2;
        operation = '+';
        break;

    case 'sub':
        result = num1 - num2;
        operation = '-';
        break;

    case 'mult':
        result = num1 * num2;
        operation = '*';
        break;

    case 'div':
        result = num1 / num2;
        operation = '/';
        break;

    default:
        alert('Невірна операція');

}

if (result !== undefined) {
  alert(num1 + " " + operation + " " + num2 + " = " + result);
}
