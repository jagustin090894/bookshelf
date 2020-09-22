'use strict';

const bookList = document.querySelector('.book-list');

const deleteBook = function(e) {
  e.parentNode.remove();
}

const addForm = document.forms['form-add'];

addForm.addEventListener('submit', e => {
  e.preventDefault();

  const userInput = document.getElementById('input-add').value;

  if (userInput) {
    const html = 
    `<li>
      <span class="book-name">${userInput}</span>
      <button class="btn btn-delete" onclick="deleteBook(this)">Delete</button>
    </li>`;

    bookList.innerHTML += html;        
  } else {
    alert('Please enter the book\'s name');
  }
});

const searchForm = document.forms['form-search'];

searchForm.addEventListener('submit', e => {
  e.preventDefault();
})

const searchInput = document.getElementById('input-search');

searchInput.addEventListener('keyup', () => {
  const searchValue = searchInput.value.toLowerCase();
  const bookNames = document.querySelectorAll('.book-name');

  bookNames.forEach((bookName) => {
    
    if (bookName.textContent.toLowerCase().indexOf(searchValue) != -1) {
      bookName.parentNode.style.display = 'flex';
    } else {
      bookName.parentNode.style.display = 'none';
    }
  })
});