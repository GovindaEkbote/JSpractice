// Import the necessary Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// Firebase app configuration
const appSettings = {
    databaseURL: "https://realtime-database-ccc28-default-rtdb.firebaseio.com/"
};

// Initialize Firebase app and database
const app = initializeApp(appSettings);
const database = getDatabase(app);

const shoppingInDB = ref(database, "shoppingList")

// Get references to the DOM elements
const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const shoppingListEl = document.getElementById("shopping-list")

// Add event listener for button click
addButtonEl.addEventListener('click', function() {
    let inputValue = inputFieldEl.value;

    if (inputValue) {
        // Create a reference in the Firebase database
        const dbRef = ref(database, 'items/' + Date.now());
        set(dbRef, { Movies: inputValue })
            .then(() => {
                console.log(`${inputValue} added to the database`);
            })
            .catch((error) => {
                console.error("Error adding to database: ", error);
            });
    } else {
        console.log('Input field is empty.');
    }
    clearInputFields()
    addItemsToShoppingListEl(inputValue)
});

function clearInputFields()
{
    inputFieldEl.value = "";
}

function addItemsToShoppingListEl(itemValue)
{
    shoppingListEl.innerHTML += `<li>${itemValue}</li>`
}