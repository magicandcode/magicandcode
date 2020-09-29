const checklistTitleName = 'checklist__title';
const checkedClassName = 'checked';
const checklistItems = document.querySelectorAll(`.${checklistTitleName}`);
const itemsCount = checklistItems.length;


const toggleChecklistItem = item => {
    item.classList.toggle(checkedClassName);
};

const toggleChecklistItems = () => {
    checklistItems.forEach(
        item => item.addEventListener('click', () => toggleChecklistItem(item)));
};


const checkedItemsCount = () => Array.from(checklistItems).reduce((acc, curr) => {
    return curr.classList.contains(checkedClassName) ? acc + 1 : acc;
}, 0);
toggleChecklistItems();
