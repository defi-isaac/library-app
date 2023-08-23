const bookDisplay = document.querySelector('#bookDisplay');
const formModal = document.querySelector('#formModal');
const bookForm = document.querySelector('#bookForm');
const addBook = document.querySelector('#addBook');
const closeForm = document.querySelector('#closeForm');
const submitBook = document.querySelector('#submitBook');
const bookName = document.querySelector('#bookName');
const bookAuthor = document.querySelector('#bookAuthor');
const bookPages = document.querySelector('#bookPages');
const haveRead = document.querySelector('#haveRead');

const myLibrary = [];

function Book() {
    // the constructor...
}

function addBookToLibrary(bookName, bookAuthor, bookPages, haveRead) {
    // do stuff here
    myLibrary.push([bookName, bookAuthor, bookPages, haveRead]);
}

// Calls the below function once the submit button is pressed
function displayBooks () {
    // Can choose to either loop through myLibrary or simply append myLibrary[myLibrary.length - 1] (the last item)
    for (const books of myLibrary) {
        const uniqueBook = document.createElement('div');

        for (let i = 0; i < books.length; i++) {
            // Create an individual div for each info of the book
            // Label it by class name e.g. `bookInfo[i]`
            // Add the text content to that specific div
            // Append it to uniqueBook
            uniqueBook.textContent += ` ${books[i]}`;
        }
        bookDisplay.append(uniqueBook);
    }
    // Clear the myLibrary array - this is done since the books will already be displayed
}

// Add an event listener to an 'add book' button from HTML on click.
/* When the button is pressed, brings up a form that asks for bookName (input)
, bookAuthor (input), bookPages (num), haveRead (checkbox) */
// Form content etc is done in HTML via 'modal'

bookForm.addEventListener('submit', (event) => {
    addBookToLibrary(`${bookName.value}`, `${bookAuthor.value}`, bookPages.value, haveRead.checked);
    event.preventDefault();
    formModal.close();
    bookForm.reset();
});

addBook.addEventListener('click', () => {
    formModal.showModal()
})

// Add an event listener to a 'cross' button
// This should remove the div from the bookDisplay and also close the modal

closeForm.addEventListener('click' , () => {
    formModal.close()
})

// Include toggle button for 'have read' or have not read