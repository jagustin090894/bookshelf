'use strict';

const list = document.querySelector('.book-list');

// delete books

list.addEventListener('click', function(e){
  if (e.target.classList.contains('btn-delete')){
    const li = e.target.parentElement;
    list.removeChild(li);
  }

})

const addForm = document.forms['form-add'];

addForm.addEventListener('submit', function(e){
    e.preventDefault();

    let value = addForm.querySelector('input[type="text"]').value;

    if (value != '') {
        const li = document.createElement('li');
        const bookName = document.createElement('span');
        const deleteBtn = document.createElement('button');

        deleteBtn.textContent = 'delete';
        bookName.textContent = value;
            
        bookName.classList.add('book-name');
        deleteBtn.classList.add('btn');
        deleteBtn.classList.add('btn-delete');

        li.appendChild(bookName);
        li.appendChild(deleteBtn);
        list.appendChild(li);        
    }
});

const searchBar = document.forms['form-search'].querySelector('input');

searchBar.addEventListener('keyup', function(e){

  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');
  
  Array.from(books).forEach(function(book){
      
    const title = book.firstElementChild.textContent;

    if (title.toLowerCase().indexOf(term) != -1){
      book.style.display = 'flex';
    } else {
      book.style.display = 'none';
    }
  });
});