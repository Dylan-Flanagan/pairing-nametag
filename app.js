const nameDisplay = document.getElementById('name-display');
const nameInput = document.getElementById('name-input');
const changeButton = document.getElementById('change-name');
changeButton.addEventListener('click', () => {
    nameDisplay.textContent = nameInput.value;
    nameInput.value = '';
});
