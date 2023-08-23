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

const myLibrary = [['book', 'author', 100, true]];
let RECENT_BOOK = myLibrary[myLibrary.length - 1];
displayBooks();

function Book() {
    // the constructor...
}

function addBookToLibrary(bookName, bookAuthor, bookPages, haveRead) {
    // do stuff here
    myLibrary.push([bookName, bookAuthor, bookPages, haveRead]);
}

function displayBooks () {
    RECENT_BOOK = myLibrary[myLibrary.length - 1];
    const uniqueBook = document.createElement('div');
    const bookInfo = document.createElement('div');

    for (let i = 0; i < RECENT_BOOK.length - 1; i++) {
        bookInfo.innerHTML += ` ${RECENT_BOOK[i]} <br>`
    }

    bookDisplay.append(uniqueBook);   
    uniqueBook.append(bookInfo);
    if (uniqueBook.previousElementSibling == null) {
        uniqueBook.classList.add('1');
    } else {
        // Access sibling class and increment it
        let newClassList = parseInt(uniqueBook.previousElementSibling.className[uniqueBook.previousElementSibling.className.length - 1]) + 1;
        // Assign it to uniqueBook
        uniqueBook.classList.add(`${newClassList}`);
        
    }
}

bookForm.addEventListener('submit', (event) => {
    addBookToLibrary(`${bookName.value}`, `${bookAuthor.value}`, bookPages.value, haveRead.checked);
    event.preventDefault();
    displayBooks();
    formModal.close();
    bookForm.reset();
});

addBook.addEventListener('click', () => {
    formModal.showModal()
})

closeForm.addEventListener('click' , () => {
    formModal.close()
})

// Include toggle button for 'have read' or have not read