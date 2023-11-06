const fontSizeInput = document.getElementById('font-size-control');
const sizeExmaple = document.getElementById('text');

fontSizeInput.addEventListener('input', () => {
    sizeExmaple.style.fontSize = `${fontSizeInput.value}px`;
})
