class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
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
        
    }
}