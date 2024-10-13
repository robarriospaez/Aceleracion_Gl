// Datos
const initialBooks = [
  { id: 1, title: "1984", author: "George Orwell", available: true },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    available: true,
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    available: false,
  },
];

const initialUsers = [
  { id: 1, name: "Alice Johnson", borrowedBooks: [] },
  { id: 2, name: "Bob Smith", borrowedBooks: [3] },
];

class Book {
  constructor(id, title, author, available = true) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.available = available;
  }

  //prestar un libnro
  borrow() {
    if (this.available) {
      this.available = false;
      return true;
    }
    return false;
  }

  //devolver libros
  return() {
    this.available = true;
  }
}

class User {
  constructor(id, name, borrowedBooks = []) {
    this.id = id;
    this.name = name;
    this.borrowedBooks = borrowedBooks; // Array de IDs de libros prestados
  }

  //sacar prestado un libro
  borrowBook(book) {
    if (book.borrow()) {
      this.borrowedBooks.push(book.id);
      console.log(`${this.name} llevo prestado el libro "${book.title}".`);
    } else {
      console.log(`El libro "${book.title}" no está disponible.`);
    }
  }

  //devolver un libro
  returnBook(book) {
    const bookIndex = this.borrowedBooks.indexOf(book.id);
    if (bookIndex !== -1) {
      this.borrowedBooks.splice(bookIndex, 1);
      book.return();
      console.log(`${this.name} devolvió el libro "${book.title}".`);
    } else {
      console.log(`${this.name} no tiene el libro "${book.title}" prestado.`);
    }
  }
}

const books = initialBooks.map(
  (bookData) =>
    new Book(bookData.id, bookData.title, bookData.author, bookData.available)
);
const users = initialUsers.map(
  (userData) => new User(userData.id, userData.name, userData.borrowedBooks)
);

//buscar un libro
function findBookByTitle(title) {
  return books.find((book) => book.title.toLowerCase() === title.toLowerCase());
}
