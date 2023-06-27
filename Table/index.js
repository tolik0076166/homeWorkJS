let table = document.createElement('table');

let count = 1;
for (let i = 0; i < 10; i++) {
    let row = document.createElement('tr');
  for (let j = 0; j < 10; j++) {
    let cell = document.createElement('td');
    cell.textContent = count;
    row.appendChild(cell);
    count++;
  }
  table.appendChild(row);
}

document.getElementById('container').appendChild(table);
