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

function displayBooks () {
        const uniqueBook = document.createElement('div');

        for (let i = 0; i < myLibrary[myLibrary.length - 1].length; i++) {
            uniqueBook.textContent += ` ${myLibrary[myLibrary.length - 1][i]}`;
        }
        bookDisplay.append(uniqueBook);   
}

bookForm.addEventListener('submit', (event) => {
    addBookToLibrary(`${bookName.value}`, `${bookAuthor.value}`, bookPages.value, haveRead.checked);
    event.preventDefault();
    formModal.close();
    displayBooks();
    bookForm.reset();
});

addBook.addEventListener('click', () => {
    formModal.showModal()
})

closeForm.addEventListener('click' , () => {
    formModal.close()
})

// Include toggle button for 'have read' or have not read