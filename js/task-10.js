function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const countInput = document.querySelector('input[type="number"]')
const createBtn = document.querySelector('button[data-create]')
const destroyBtn = document.querySelector('button[data-destroy]')
const boxContainer = document.querySelector('#boxes');
let counter;

function createBoxes(n) {
  boxContainer.innerHTML = '';

  let size = 30;

  // в лупі була помилка "i = counter", через це під час виконання коду сторінка
  // намертво зависала, чому так?
  for (let i = 0; i < n; i++) {
    const div = document.createElement('div');
    div.style.height = `${size}px`;
    div.style.width = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxContainer.append(div);

    size += 10;
  }
}

countInput.addEventListener('input', () => {
  counter = Number(countInput.value);
})

createBtn.addEventListener('click', () => {
  createBoxes(counter);
});

destroyBtn.addEventListener('click', () => {
  boxContainer.innerHTML = '';
});