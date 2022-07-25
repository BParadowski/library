let myLibrary = [];
const bookshelf = document.querySelector('.bookshelf');

function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead; 
}

Book.prototype.info = function(){
    let finished = this.isRead === true ? "finished" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${finished}.`;
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
        let buttons = document.createElement('div');
        buttons.classList.add('book__buttons');
// buttons
        let newlabel = document.createElement('label');
        newlabel.classList.add('book__switch');
        let newCheckbox = document.createElement('input');
        newCheckbox.type = 'checkbox';
        newCheckbox.checked = book.isRead;
        let newSlider = document.createElement('span');
        newSlider.classList.add('book__slider');

        let newButton = document.createElement('button');
        newButton.classList.add('book__delete');
// putting it together

        newlabel.appendChild(newCheckbox);
        newlabel.appendChild(newSlider);

        buttons.appendChild(newlabel);
        buttons.appendChild(newButton);
        newButton.dataset.id = `${i}`;
        newButton.addEventListener('click', removeBook)

        newBook.appendChild(newTitle);
        newBook.appendChild(newAuthor);
        newBook.appendChild(newPages);
        newBook.appendChild(buttons);

        bookshelf.appendChild(newBook);
        newBook.id = `book_${i}`;
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

addBookToLibrary("The hobbit", "J R R Tolkien", 255, true);
addBookToLibrary("The hobbit", "J R R Tolkien", 255, true);
addBookToLibrary("The hobbit", "J R R Tolkien", 255, true);

displayLibrary();