function generateList(array) {
    const ul = document.createElement('ul');
  
    for (let i = 0; i < array.length; i++) {
      const item = document.createElement('li');
  
      if (Array.isArray(array[i])) {
        item.appendChild(generateList(array[i]));
      } else {
        item.textContent = array[i];
      }
  
      ul.appendChild(item);
    }
  
    return ul;
  }
  
      const array = [1,[1.1, 1.2, 1.3], 2,[2.1, 2.2, 2.3], 3];
      const listContainer = document.getElementById('list-container');
      const generatedList = generateList(array);
      listContainer.appendChild(generatedList);