// Import the necessary Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, onValue,set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// Firebase app configuration
const appSettings = {
    databaseURL: "https://playground-874e9-default-rtdb.firebaseio.com/"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const bookInDB = ref(database, "books");

const booksEl = document.getElementById("books");
const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");

addButtonEl.addEventListener('click', function() {
    let inputValue = inputFieldEl.value;

    if (inputValue) {
        // Create a reference in the Firebase database
        const dbRef = ref(database, 'books/' + Date.now());
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
    clearBooksList()
    appendBooksListEl(inputValue)
});

onValue(bookInDB, function(snapshot) {
    clearBooksList();
    
    if (snapshot.exists()) {
        const books = snapshot.val();
        Object.values(books).forEach(book => {
            appendBooksListEl(book);
        });
    } else {
        booksEl.innerHTML = "<li>No books available</li>";
    }
});

function clearBooksList() {
    booksEl.innerHTML = "";
}

function appendBooksListEl(bookValue) {
    const li = document.createElement("li");
    li.textContent = bookValue;
    booksEl.appendChild(li);
    // booksEl.innerHTML += `<li>${bookValue}</li>`
}
