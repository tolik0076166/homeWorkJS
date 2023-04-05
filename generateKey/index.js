function validateLength(input) {
    if (input === null || input === '') {
        alert('Ви повинні ввести довжину ключа.');
        return false;
    } else if (isNaN(input)) {
        alert('Довжина ключа повинна бути числом.');
        return false;
    } else {
        return true;
    }
}

function generateKey(length, characters) {
    let result = '';
    const charactersLength = characters.length;
  
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let lengthInput = prompt('Введіть довжину ключа:');
  if (validateLength(lengthInput)) {
    let length = parseInt(lengthInput);
    let key = generateKey(length, characters);
    alert(key);
  }
