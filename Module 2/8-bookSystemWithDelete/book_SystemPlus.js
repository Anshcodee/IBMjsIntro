let books = [];

function addBook(){
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)){
        const book = {
            name: bookName,
            authorName: authorName,
            Description: bookDescription,
            pageNumber: pagesNumber};
        
        books.push(book);
        showbooks(); // To show the array of objects 'books'
        clearInputs(); // TO make way for later additions
    } else{
        alert("Fill all fields correctly");
    }
}

function showbooks(){
    const booksShowing = books.map((book, index) => `<h1>book Number: ${index+1}</h1>
    <p><strong>Book Name: </strong>${book.name}</p>
    <p><strong>Author Name: </strong>${book.authorName}</p>
    <p><strong>Book Description: </strong>${book.Description}</p>
    <p><strong>No. of pages in the book: </strong>${book.pageNumber}</p>
    `);
    document.getElementById('books').innerHTML = booksShowing.join('oof');
}

function clearInputs() {
            document.getElementById('bookName').value = '';
            document.getElementById('authorName').value = '';
            document.getElementById('bookDescription').value = '';
            document.getElementById('pagesNumber').value = '';
 }
 // Note: Clearing out the HTML input for fresh input later AND to clear up the input showing up on the screen