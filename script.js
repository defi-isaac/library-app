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
    const removeBook = document.createElement('button');
    const readStatus = document.createElement('button');

    for (let i = 0; i < RECENT_BOOK.length - 1; i++) {
        bookInfo.innerHTML += ` ${RECENT_BOOK[i]} <br>`
    }
    if (RECENT_BOOK[RECENT_BOOK.length - 1] == true) {
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

    if (uniqueBook.previousElementSibling == null) {
        uniqueBook.classList.add('1');
    } else {
        let newClassList = parseInt(uniqueBook.previousElementSibling.className[uniqueBook.previousElementSibling.className.length - 1]) + 1;
        uniqueBook.classList.add(`${newClassList}`);
    }
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

// Include toggle button for 'have read' or have not read