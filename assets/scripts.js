'use strict';

const bookList = document.querySelector('.book-list');

const deleteBook = e => {
  e.parentNode.remove();
}

const addBook = document.forms['form-add'];

addBook.addEventListener('submit', e => {
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
    document.querySelector('body').classList.toggle('has-modal');
  }
});

const searchBook = document.forms['form-search'];

searchBook.addEventListener('submit', e => {
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

const modal = document.querySelector('.modal');
const btns = modal.querySelectorAll('button');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('has-modal');
  })
})

