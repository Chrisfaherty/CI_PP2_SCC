/*jshint esversion: 6 */
// Insperation for the below code cane from Dev Ed's codeing course
//Selectors
const shoppingListInput = document.querySelector('.shopping-list-input');
const shoppingListButton = document.querySelector('.shopping-list-button');
const shoppingItemsListItem = document.querySelector('.shopping-items-list-item');

//Event Listeners
shoppingListButton.addEventListener('click', addItemToList);
shoppingItemsListItem.addEventListener('click', removeItemFromList);

//Function
// This function prevents the browser from refreshing by default.
// Create a Div where the Items added to the list will be displayed
// Create an Li for each item
// Add item to list button function
// check an item as complete on the list button
// Remove item from list button
// The bloaw code was sourced from dev eds course and altered to suit the shopping list application
function addItemToList(addItem){
    addItem.preventDefault();

    const addItemToListDiv = document.createElement("div");
    addItemToListDiv.classList.add('item-to-list');

    const newItemToList = document.createElement('li');
    newItemToList.innerText = shoppingListInput.value;
    newItemToList.classList.add('list-item');
    addItemToListDiv.appendChild(newItemToList);
    shoppingListInput.value = "";

    const itemPurchasedButton = document.createElement('button');
    itemPurchasedButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
    itemPurchasedButton.classList.add('item-purchased-btn');
    addItemToListDiv.appendChild(itemPurchasedButton);

    const removeItemButton = document.createElement('button');
    removeItemButton.innerHTML = `<i class="fa-sharp fa-solid fa-minus"></i>`;
    removeItemButton.classList.add('remove-item-btn');
    addItemToListDiv.appendChild(removeItemButton);
    shoppingItemsListItem.appendChild(addItemToListDiv);
}

// This function uses the above buttons to mark as complete of remove the item off the list
function removeItemFromList(additem){
    const item = additem.target;
    if (item.classList[0] === "remove-item-btn"){
        const listItem = item.parentElement;
        listItem.remove ();
    }
    if (item.classList[0] === "item-purchased-btn"){
        const listItem = item.parentElement;
        listItem.classList.toggle("item-purchased");
    }
}
