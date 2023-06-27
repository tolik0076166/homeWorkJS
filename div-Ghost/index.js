const textField = document.getElementById('myTextField');
const divElement = document.getElementById('myDiv');


textField.addEventListener('focus', function() {
    divElement.style.display = 'block'; 
});


textField.addEventListener('blur', function() {
    divElement.style.display = 'none'; 
});
