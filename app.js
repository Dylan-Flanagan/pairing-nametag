const nameDisplay = document.getElementById('name-display');
console.log(nameDisplay);

const nameInput = document.getElementById('name-input');
console.log(nameInput);

const changeButton = document.getElementById('change-name');
console.log(changeButton);

changeButton.addEventListener('click', () => {
    nameDisplay.textContent = nameInput.value;
    nameInput.value = '';
});
