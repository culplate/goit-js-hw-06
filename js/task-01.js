const categoriesItems = categories.querySelectorAll('.item');
    
function showCounters(arr) {
    const categoriesList = document.querySelector('#categories');
    console.log(`Number of categories: ${categoriesList.querySelectorAll('.item').length}`);

    arr.forEach(item => {
        const headline = item.querySelector('h2');
        const list = item.querySelector('ul');
        console.log(`Category: ${headline.innerHTML}`)
        console.log(`Elements: ${list.childElementCount}`)
    });
}

showCounters(categoriesItems);