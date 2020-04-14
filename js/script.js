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
    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();//<tr> is a parent element
        }
    }
    static showAlert(message, className){
       const div = document.createElement('div');
       div.className = `alert alert-${className}`;
       const text = document.createTextNode(message);
       div.appendChild(text);
       const container = document.querySelector('.container');
       const form = document.querySelector('#book-form');
       container.insertBefore(div, form);//insert the div before the form inside container
       //vanish alert box in 3 seconds
       setTimeout(() => {
            document.querySelector('.alert').remove();
       },3000);
    }
    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
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
    //Validation of form
    if(title === '' || author === '' || isbn === ''){
       UI.showAlert('please fill in all fields!!', 'danger');
    }
    else{
         //Instantiate Book to add new values from the form
           const bookObj = new Book(title, author, isbn);
        //Add Book to UI
           UI.addBookToList(bookObj);
        //Show alert for successful book added
           UI.showAlert('Book Added!','success');   
        //clear the fields of form
           UI.clearFields();
    }
});
//Remove a book from the book-list
document.querySelector('#book-list').addEventListener('click',(e) => {
     UI.deleteBook(e.target);
     //Show alert for book removed.
     UI.showAlert('Book Removed','sucess');
});