 function showTable() {
      const firstName = document.getElementById('first-name').value;
      const lastName = document.getElementById('last-name').value;
      const birthdate = document.getElementById('birthdate').value;
      const gender = document.querySelector('input[name="gender"]:checked').value;
      const city = document.getElementById('city').value;
      const address = document.getElementById('address').value;

      const languages = [];
      const languageCheckboxes = document.querySelectorAll('input[name="language"]:checked');
      languageCheckboxes.forEach(checkbox => languages.push(checkbox.value));

      const dataTable = document.getElementById('data-table');
      const newRow = dataTable.insertRow();

      const cells = [
        firstName,
        lastName,
        birthdate,
        gender,
        city,
        address,
        languages.join(', ')
      ];

      cells.forEach((cellData, index) => {
        const cell = newRow.insertCell(index);
        cell.textContent = cellData;
      });

      document.getElementById('table-container').style.display = 'block';
      document.getElementById('registration-form').style.display = 'none';
      document.querySelector('h1').style.display = 'none';
    }