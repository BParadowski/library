let myLibrary = [];
const bookshelf = document.querySelector('.bookshelf');
const formButton = document.querySelector('.form__button');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const isRead = document.getElementById('isRead');
const newBookButton = document.querySelector('button.header__add');
const popup = document.querySelector('.popup')
const closeForm = document.querySelector('.form__close');


newBookButton.addEventListener('click', function(e){
    popup.classList.add('visible');
} )
formButton.addEventListener('click', addToColection)
closeForm.addEventListener('click', function(e){
    popup.classList.remove('visible');
} )

function addToColection(e){
    e.preventDefault();
    addBookToLibrary(title.value, author.value, parseInt(pages.value), isRead.checked );
    displayNewBook();
    title.value = '';
    author.value = '';
    pages.value = '';
    isRead.checked = false;
}

class Book{
    constructor(title, author, pages, isRead = false){
        this.title = title ? title : "Untitled";
        this.author = author ? author : "Anonymous";
        this.pages = pages ? pages : "Unknown";
        this.isRead = isRead;
    };

    info() {
        let finished = this.isRead  ? "finished" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${finished}.`;
    };
}

function addBookToLibrary(title, author, pages, isRead){
        myLibrary.push(new Book(title, author, pages, isRead));
}

function displayBook(i){

    if (myLibrary[i] !== undefined){
    const book = myLibrary[i];

    let newBook = document.createElement('div');
        newBook.classList.add("book");
//book elements
        let newTitle = document.createElement('h4')
        newTitle.classList.add('book__title');
        newTitle.textContent = book.title;

        let newAuthor = document.createElement('p');
        newAuthor.classList.add('book__author');
        newAuthor.textContent = `by ${book.author}`;

        let newPages = document.createElement('p');
        newPages.classList.add('book__pages');
        newPages.textContent = `Pages: ${book.pages}`;

        let newStatus = document.createElement('div');
        newStatus.classList.add('book_status');
        newStatus.dataset.id = `status_${i}`
        newStatus.textContent = book.isRead ? 'Finished' :'Not read';

        let buttons = document.createElement('div');
        buttons.classList.add('book__buttons');
// buttons
        let newLabel = document.createElement('label');
        newLabel.classList.add('book__switch');

        let newCheckbox = document.createElement('input');
        newCheckbox.type = 'checkbox';     
        newCheckbox.checked = book.isRead;

        let newSlider = document.createElement('span');
        newSlider.classList.add('book__slider');

        let newButton = document.createElement('button');
        newButton.classList.add('book__delete');
// putting it together
        newLabel.dataset.id = `${i}`;

        newLabel.appendChild(newCheckbox);
        newLabel.appendChild(newSlider);

        newCheckbox.dataset.id = `${i}`
        newCheckbox.addEventListener('click', updateReadStatus)

        buttons.appendChild(newLabel);
        buttons.appendChild(newButton);

 
        newButton.dataset.id = `${i}`;
        newButton.addEventListener('click', removeBook)

        newBook.appendChild(newTitle);
        newBook.appendChild(newAuthor);
        newBook.appendChild(newPages);
        newBook.appendChild(newStatus);
        newBook.appendChild(buttons);

        bookshelf.appendChild(newBook);
        newBook.id = `book_${i}`;

        let bookMark = document.createElement('div');
        bookMark.classList.add('book__mark');
        if (book.isRead){
            bookMark.classList.add('green');
        }
        newBook.appendChild(bookMark);
    }
}

function displayNewBook(){
    displayBook(myLibrary.length-1);
}

function displayLibrary(){
    for (let i = 0; i < myLibrary.length; i++){
        displayBook(i);
    }
}

function removeBook(e){
    let bookId = `book_${this.dataset.id}`;
    myLibrary[this.dataset.id] = undefined;
    let bookToDelete = document.getElementById(bookId);
    bookToDelete.replaceChildren();
    bookToDelete.remove()
}

function updateReadStatus(e){
    let status = myLibrary[this.dataset.id].isRead;
    myLibrary[this.dataset.id].isRead = status ? false : true;
    let statusDisplay = document.querySelector(`div[data-id="status_${this.dataset.id}"]`);
    statusDisplay.textContent = statusDisplay.textContent === 'Finished' ? 'Not read' : 'Finished';
    const bookTemp = document.getElementById(`book_${this.dataset.id}`);
    let bookMark = bookTemp.querySelector("div.book__mark");
    bookMark.classList.toggle('green');
}

addBookToLibrary("The hobbit", "J. R. R. Tolkien", 255, true);
addBookToLibrary("Alice in Wonderland", "Lewis Carroll", 472, true);
addBookToLibrary("Heart of Darkness", "Joseph Conrad", 170, false);
addBookToLibrary("Dune", "Frank Herbert", 891, false);
addBookToLibrary("The Magus", "John Fowles", 678, true);

displayLibrary();