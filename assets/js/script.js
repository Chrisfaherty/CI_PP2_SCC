//Selectors
const shoppingListInput = document.querySelector('.shopping-list-input');
const shoppingListButton = document.querySelector('shopping-list-button');
const sortShoppingListItems = document.querySelector('sort-shopping-list-items');
const shoppingItemsListItem = document.querySelector('shopping-items-list-items');

//Event Listeners
shoppingListButton.addEventListener('click', addItemToList);
sortShoppingListItems.addEventListener('click', sortItemInList);
shoppingItemsListItem.addEventListener('click', removeItemFromList);

//Functions