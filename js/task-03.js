const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector('.gallery');

// стилі для ul
list.style.display = 'flex';
list.style.flexDirection = 'column';
list.style.listStyle = 'none';  
list.style.rowGap = '12px'

// функція по ТЗ
function renderImages(arr) {
  const markup = arr
    .map(({ url, alt }) => {
      return `<li><img src=${url} alt=${alt}/></li>`;
    })
    .join('');
    
  list.insertAdjacentHTML('beforeend', markup);
  
  // до перебору задля зміни стилю усіх елементів нас ще не вчили)))
  document.querySelectorAll('.gallery img').forEach(item => {
    item.style.display = 'block';
    item.style.maxHeight = '33.3vh';
    item.style.transition = 'transform .2s ease';
    item.addEventListener('mouseover', () => {
      item.style.transform = 'scale(1.1)';
    });
    item.addEventListener('mouseout', () => {
      item.style.transform = 'scale(1)';
    });
  });
}

renderImages(images);