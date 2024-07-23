// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookForm from './BookForm'; // Form component
import BookDetails from './BookDetails'; // Details component

const App = () => {
  return (
    <Router>
      <h1>Books</h1>
      <Routes>
        <Route path="/" element={<BookForm />} />
        <Route path="/book/:bookName" element={<BookDetails />} />
        <Route path="*" element={<h1>404: This is not the webpage you are looking for</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
