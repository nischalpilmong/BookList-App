//Book Class: Represents a Book
class Book{
    constructor(title, author, isbn){
          this.title = title;
          this.author = author;
          this.isbn = isbn;
    }
    static display(){
        console.log('Hello display');
    }
}

//static method gives us advantage of not instantiation of object, we can direct call with class
//Book.display();

//UI Class: Handle UI Class
class UI{
  static displayBooks(){
      const StoredBooks = [
               {
                 title: 'Seto Dharti',
                 author: 'Madhav Ghimire',
                 isbn: 45353
               },
               {
                 title: 'Hari Bahadur',
                 author: 'Haribansha Acharya',
                 isbn: 44435
               }
      ];
      const books = StoredBooks;
      
      books.forEach((book) => UI.addBookToList(book));

  }
  static addBookToList(book){
      const list = document.querySelector('#book-list');
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
      `
     list.appendChild(row);  
  }
  static deleteBook(el){
      if(el.classList.contains('delete')){
          el.parentElement.parentElement.remove();//parentElement is 'tr' so it is twice written
      }
  }
  static clearFields(){
      document.querySelector('#title').value = '';
      document.querySelector('#author').value = '';
      document.querySelector('#isbn').value = '';
  }
} /**** class UI ends here ******/ 


//Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: Add a Book
document.querySelector('#book-form').addEventListener('submit',(e) => {
    //Prevent actual submit
    e.preventDefault();
    //Get Form Values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
    //Instantiate book
    const book = new Book(title, author, isbn);
    //Add Book to UI
    UI.addBookToList(book);

    //Clear Fields of input 
    UI.clearFields();    
});
//Event: Remove a book
document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target);
});