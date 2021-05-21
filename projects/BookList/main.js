// ENUM
const readStatuses = {
  unread: "unread",
  reading: "reading",
  finished: "finished",
};

class Book {
  constructor(title, genre, author, readingStatus, lastRead) {
    // Title
    this.title = title;
    // Genre
    this.genre = genre;
    // Author
    this.author = author;
    // Read (true or false)
    this.readingStatus = readingStatus;
    // Read date, can be blank, otherwise needs to be a JS Date() object
    this.lastRead = lastRead || null;
  }
}
const initialBooks = [
  new Book(
    "Harry Potter 1",
    "Children's Fantasy",
    "J.K.Rowling",
    readStatuses.finished
  ),
  new Book(
    "Harry Potter 2",
    "Children's Fantasy",
    "J.K.Rowling",
    readStatuses.reading
  ),
  new Book(
    "Harry Potter 3",
    "Children's Fantasy",
    "J.K.Rowling",
    readStatuses.unread
  ),
  new Book(
    "Harry Potter 4",
    "Children's Fantasy",
    "J.K.Rowling",
    readStatuses.unread
  ),
];

class BookList {
  constructor(allBooks) {
    //  An array of all the Books
    this.books = allBooks || [];
    // calculating read/unread/finished/whatever books
    this.updateCounts();
    //  A reference to the next book to read (book object)
    this.nextBook = allBooks.find(
      (b) => b.readingStatus === readStatuses.unread
    );
    //  A reference to the current book being read (book object)
    this.currentBook = allBooks.find(
      (b) => b.readingStatus === readStatuses.reading
    );
    this.updateUI();
  }
  add(title, genre, author, readingStatus, lastRead) {
    this.books.push(new Book(title, genre, author, readingStatus, lastRead));
    this.updateCounts();
    this.updateUI();
  }
  finishCurrentBook() {
    this.currentBook.readingStatus = readStatuses.finished;
    this.currentBook.lastReadDate = Date.now();
    this.lastBook = this.currentBook;
    this.nextBook.readingStatus = readStatuses.reading;
    this.currentBook = this.nextBook;
    this.nextBook = this.books.find(
      (b) => b.readingStatus === readStatuses.unread
    );
    this.updateCounts();
    this.updateUI();
  }
  updateCounts() {
    this.finishedBooksCount = this.books.filter(
      (b) => b.readingStatus === readStatuses.finished
    ).length;
    //  Number of books marked not read yet
    this.unreadBooksCount = this.books.filter(
      (b) => b.readingStatus === readStatuses.unread
    ).length;
  }
  updateUI() {
    document.querySelector("table").innerHTML = `
      <tr>
        <th>title</th>
        <th>status</th>
        <th>genre</th>
        <th>author</th>
      </tr>
      ${this.books
        .map(
          (b) =>
            `<tr>
              <td>${b.title}</td>
              <td>${b.readingStatus}</td>
              <td>${b.genre}</td>
              <td>${b.author}</td>
            </tr>`
        )
        .join("")}`;
  }
}
let myBookList = new BookList(initialBooks);

myBookList.add(
  "Harry Potter 0",
  "Children's Fantasy",
  "J.K.Rowling",
  readStatuses.finished
);

const form = document.querySelector("form");

form.addEventListener("submit", (i) => {
  const inputTitle = document.querySelector("#inputTitle");
  const inputGenre = document.querySelector("#inputGenre");
  const inputAuthor = document.querySelector("#inputAuthor");
  const readStatus = document.querySelector("input[name=read]:checked");
  i.preventDefault();
  console.log(readStatus);
  myBookList.add(
    inputTitle.value,
    inputGenre.value,
    inputAuthor.value,
    readStatus.value
  );
  inputTitle.value = "";
  inputGenre.value = "";
  inputAuthor.value = "";
});

//   console.log(myBookList);
