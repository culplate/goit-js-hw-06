let counterValue = 0;
const counter = document.getElementById('value');
const incrButton = document.querySelector('button[data-action="increment"]');
const decrButton = document.querySelector('button[data-action="decrement"]');

incrButton.addEventListener('click', () => {
    counterValue++;
    counter.innerHTML = counterValue;
})

decrButton.addEventListener('click', () => {
    counterValue--;
    counter.innerHTML = counterValue;
})
