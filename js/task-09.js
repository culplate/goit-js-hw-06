function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const span = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', () => {
  // записую результат функції в змінну, бо якщо запускати функцію
  // в body.style.backgroundColor, а потім span змінювати ось так -
  // span.innerHTML = body.style.backgroundColor, то в span буде передаватись
  // RGB значення, а не HEX
  const hexColor = getRandomHexColor();
  body.style.backgroundColor = hexColor;
  span.innerHTML = hexColor;
});