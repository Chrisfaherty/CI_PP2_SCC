//Selectors
const shoppingListInput = document.querySelector('.shopping-list-input');
const shoppingListButton = document.querySelector('.shopping-list-button');
const sortShoppingListItems = document.querySelector('.sort-shopping-list-items');
const shoppingItemsList = document.querySelector('.shopping-items-list');

//Event Listeners
shoppingListButton.addEventListener('click', addItemToList);

/*
sortShoppingListItems.addEventListener('click', sortItemInList);
shoppingItemsListItem.addEventListener('click', removeItemFromList);
*/

//Functions

function addItemToList(addItem){

    // Function to prevent the from from refreshing
    addItem.preventDefault();

    // Create a Div where the Items added to the list will be displayed
    const addItemToListDiv = document.createElement("div");
    addItemToListDiv.classList.add('item-to-List');

     // Create an Li for each item
    const newItemToList = document.createElement('li');
    newItemToList.innerText = shoppingListInput.value;
    newItemToList.classList.add('list-item');
    addItemToListDiv.appendChild(newItemToList);
    shoppingListInput.value = "";

    //Add item to list button function
    const itemPurchasedButton = document.createElement('button');
    itemPurchasedButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
    itemPurchasedButton.classList.add('item-purchased-btn');
    addItemToListDiv.appendChild(itemPurchasedButton);

    // Remove item from list
    const removeItemButton = document.createElement('button');
    removeItemButton.innerHTML = `<i class="fa-sharp fa-solid fa-minus"></i>`;
    removeItemButton.classList.add('remove-item-btn');
    addItemToListDiv.appendChild(removeItemButton);

    // Append Shopping List
    shoppingItemsList.appendChild(addItemToListDiv);
}