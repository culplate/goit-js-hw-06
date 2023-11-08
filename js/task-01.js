const categoriesItems = categories.querySelectorAll('.item');
    
function showCounters(arr) {
    const categoriesList = document.querySelector('#categories');
    console.log(`Number of categories: ${categoriesList.childElementCount}`);

    arr.forEach(item => {
        const headline = item.firstElementChild;
        const list = item.lastElementChild;
        console.log(`Category: ${headline.innerHTML}`)
        console.log(`Elements: ${list.childElementCount}`)
    });
}

showCounters(categoriesItems);