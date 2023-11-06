const inputField = document.getElementById('validation-input');
const reqLength = Number(inputField.dataset.length);

inputField.addEventListener('blur', () => {
    if (inputField.value.length === reqLength) {
        inputField.classList.add('valid')
        inputField.classList.remove('invalid')
    } else {
        inputField.classList.add('invalid')
        inputField.classList.remove('valid')
    }
});

