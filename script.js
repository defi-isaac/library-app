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

const myLibrary = [new Book('book', 'author', 100, true)];
let RECENT_BOOK = myLibrary[myLibrary.length - 1];
displayBooks();

function Book(bookName, bookAuthor, bookPages, haveRead) {
    // the constructor...
    this.bookName = bookName,
    this.bookAuthor = bookAuthor,
    this.bookPages = bookPages,
    this.haveRead = haveRead
}

function addBookToLibrary(bookName, bookAuthor, bookPages, haveRead) {
    // do stuff here
    myLibrary.push(new Book(bookName, bookAuthor, bookPages, haveRead));
}

function displayBooks () {
    RECENT_BOOK = myLibrary[myLibrary.length - 1];
    const uniqueBook = document.createElement('div');
    const bookInfo = document.createElement('div');
    const removeBook = document.createElement('button');
    const readStatus = document.createElement('button');

    // Add the most recent books information



    if (RECENT_BOOK.haveRead == true) {
        readStatus.textContent = 'Have read'
        readStatus.classList.add('haveRead');
    } else {
        readStatus.textContent = "Haven't read"
    }
    readStatus.classList.add('readStatus');
    removeBook.textContent = 'X';

    bookDisplay.append(uniqueBook);   
    uniqueBook.append(bookInfo);
    uniqueBook.append(readStatus);
    uniqueBook.append(removeBook);

    readStatus.addEventListener('click', () => {
        if (readStatus.className.includes('haveRead')) {
            readStatus.textContent = "Haven't read";
        } else {
            readStatus.textContent = 'Have read';
        }
        readStatus.classList.toggle('haveRead');
    })
    removeBook.addEventListener('click', () => {
        uniqueBook.remove();
    })
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