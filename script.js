let myLibrary = [];

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

function displayLibrary(){
    for (let book of myLibrary){
        let newBook = document.createElement('div');
        newBook.classList.add("book");
        let newTitle = document.createElement('h4')
        newTitle.classList.add('book__title');
        newTitle.textContent = book.title;
        let newAuthor = document.createElement('p');
        newAuthor.classList.add('book__author');
        newAuthor.textContent = `by ${book.author}`;
        let 

    }
}

addBookToLibrary("The hobbit", "J R R Tolkien", 255, true);
addBookToLibrary("The hobbit", "J R R Tolkien", 255, true);
addBookToLibrary("The hobbit", "J R R Tolkien", 255, true);