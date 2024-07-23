// src/BookForm.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookForm = () => {
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    
    const response = await fetch('api/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, author, pages })
    });

    const data = await response.json();
    // Redirect to the new book's page
    navigate(`/book/${encodeURIComponent(data.name)}`);
  };

  return (
    <form onSubmit={onSubmit}>
      <input id="name" type="text" placeholder="Book Name" />
      <input id="author" type="text" placeholder="Author" />
      <input id="pages" type="number" placeholder="Number of Pages" />
      <button type="submit" id='submit'>Submit</button>
    </form>
  );
};

export default BookForm;
