class BookList {
  constructor() {
    this.booksArray = [];
    this.doneReading = 0;
    this.booksToRead = 0;
    this.nextBook = "";
    this.currentBook = "";
    this.lastBook = "";
  }



  addBook(book) {
    this.booksArray.push(book);
    this.booksToRead++;
  }

  finishCurrentBook(book) {
    book.read = true;
    book.readDate = Date();
    this.lastBook = book;
    this.currentBook = this.nextBook;
    this.nextBook = ""; //todo
    this.doneReading++;
    this.booksToRead--;
  }
}

class Book {
  constructor(title, genre, author) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = false;
    this.readDate = 0;
  }
}

const firstShelf = new BookList();
const book1 = new Book("Warm and Fast Dish", "Fantasy", "Alien");
const book2 = new Book("HTML & CSS", "Educaiton", "Khaled");
const book3 = new Book("JS & JQuery", "Educaiton", "Chris");

firstShelf.addBook(book1);
firstShelf.addBook(book2);
firstShelf.addBook(book3);

// console.log(book1)
// console.log(firstShelf)

firstShelf.finishCurrentBook(book2);

console.log(firstShelf)

