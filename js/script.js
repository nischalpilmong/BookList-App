//Book Class: Represents a book
class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
//UI Class: Handle UI
class UI{
    static displayBooks(){
        const StoredBooks = [
                {
                 title: 'Haribahadur',
                 author: 'Haribansha Acharya',
                 isbn: 100
                },
                {
                 title: 'Summer Love',
                 author: 'Subin Ghimire',
                 isbn: 101
                }
        ];
        StoredBooks.forEach((bookEach) => UI.addBookToList(bookEach));
    }
    static addBookToList(book){
       const list = document.querySelector('#book-list');
       const row = document.createElement('tr');
       row.innerHTML = `<td>${book.title}</td> 
                         <td>${book.author}</td>
                         <td>${book.isbn}</td>
                         <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>`;
       list.appendChild(row);                  
    }
    
}
//Display Books
document.addEventListener('DOMContentLoaded',UI.displayBooks);

//Add a Book
document.querySelector('#book-form').addEventListener('submit',(e) => {
    //prevent from actual submit
    e.preventDefault();
    //Get the Form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
    //Instantiate Book
    const bookObj = new Book(title, author, isbn);
    //Add Book to UI
    UI.addBookToList(bookObj);

});