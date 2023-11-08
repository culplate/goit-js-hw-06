const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
    nameInput.value.length >= 1 ?
        nameOutput.innerHTML = nameInput.value :
        nameOutput.innerHTML = "Anonymous";
})