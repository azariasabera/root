// src/BookDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h1>{book.name}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Pages:</strong> {book.pages}</p>
    </div>
  );
};

export default BookDetails;
