'use strict';
let bookList = document.querySelector('.book-list');

let deleteBook = function() {

    bookList.addEventListener('click', function(e) {

        let li = e.target.parentNode;
        
        if (e.target.classList.contains = 'btn-delete') {
            li.parentNode.removeChild(li);
        }
    });
}

let addBook = function() {

    let btnAdd = document.getElementById('btn-add');

    btnAdd.addEventListener('click', function(e) {

        e.preventDefault();

        let input = document.getElementById('input-add');

        let book = document.createElement('li');
        let bookName = document.createElement('span');
        let btnDelete = document.createElement('button');


        book.appendChild(bookName);
        bookName.innerText = input.value;
        bookName.className = 'book-name';

        book.appendChild(btnDelete);
        btnDelete.innerText = 'Delete';
        btnDelete.className = 'btn';
        btnDelete.classList.add('btn-delete');

        bookList.appendChild(book);

        input.value = '';
    })
}
 
deleteBook();
addBook();
