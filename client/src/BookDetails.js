// src/BookDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookForm from './BookForm';

const BookDetails = () => {
  const { bookName } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await fetch(`/api/book/${decodeURIComponent(bookName)}`);
      const data = await response.json();
      setBook(data);
    };

    fetchBook();
  }, [bookName]);

  //if (!book) return <h1>404: This is not the webpage you are looking for</h1>;

  return (book &&
    <div>
      <h1>{book.name}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Pages:</strong> {book.pages}</p>
      <BookForm />
    </div>
  );
};

export default BookDetails;
