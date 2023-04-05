function removeElement(array, item) {   

    let newArray = [];
     for (let i = 0; i < array.length; i++) {
      if (array[i] !== item) {
       newArray.push(array[i]);
      }
     } 
    return newArray;
    }
    
    let userInput = prompt('Введіть значення для масиву, розділені комою:');
     if (!userInput) {
       alert('Не введено значення для масиву');
     } else {
        let array = userInput.split(',');
        let itemToRemove = prompt('Введіть значення, яке потрібно видалити:');

     if (itemToRemove === null) {
        alert('Операція скасована');
     } else {
        let result = removeElement(array, itemToRemove);
        alert(result);
       }
    }