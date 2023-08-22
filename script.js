const bookDisplay = document.querySelector('#bookDisplay');
const bookForm = document.querySelector('#bookForm');
const addBook = document.querySelector('#addBook');
const closeForm = document.querySelector('#closeForm')

const myLibrary = [['Book1', 'Author1', 100, true]];

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

addBook.addEventListener('click', () => {
    bookForm.showModal()
})

// Add an event listener to a 'cross' button
// This should remove the div from the bookDisplay and also close the modal

closeForm.addEventListener('click' , () => {
    bookForm.close()
})

// Include toggle button for 'have read' or have not read