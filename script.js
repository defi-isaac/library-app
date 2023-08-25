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

addBook.addEventListener('click', () => {
    formModal.showModal()
})

closeForm.addEventListener('click' , () => {
    formModal.close()
})

const myLibrary = [new Book('Dale Carnegie', 'How to Win Friends and Influence People', 291, false)];
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

bookForm.addEventListener('submit', (event) => {
    addBookToLibrary(`${bookName.value}`, `${bookAuthor.value}`, bookPages.value, haveRead.checked);
    event.preventDefault();
    displayBooks();
    formModal.close();
    bookForm.reset();
});

function displayBooks () {
    RECENT_BOOK = myLibrary[myLibrary.length - 1];
    const uniqueBook = document.createElement('div');
    const bookInfo = document.createElement('div');
    const removeBook = document.createElement('button');
    const readStatus = document.createElement('button');
    const bookButtons = document.createElement('div');

    // Add the most recent books information
    if (myLibrary) bookInfo.innerHTML = `<h1>Name:</h1><p>${RECENT_BOOK.bookName}</p> <h1>Author:</h1><p>${RECENT_BOOK.bookAuthor}</p><h1>Pages:</h1><p>${RECENT_BOOK.bookPages}</p>`;


    if (RECENT_BOOK.haveRead == true) {
        readStatus.textContent = 'Have read'
        readStatus.classList.add('haveRead');
    } else {
        readStatus.textContent = "Haven't read"
    }
    readStatus.classList.add('readStatus');
    removeBook.textContent = 'Remove book';
    bookButtons.classList.add('bookButtons');

    bookDisplay.append(uniqueBook);   
    uniqueBook.append(bookInfo);
    bookButtons.append(readStatus);
    bookButtons.append(removeBook);
    uniqueBook.append(bookButtons);

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
