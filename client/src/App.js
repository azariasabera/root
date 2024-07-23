// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookForm from './BookForm'; // Form component
import BookDetails from './BookDetails'; // Details component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookForm />} />
        <Route path="/book/:bookName" element={<BookDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
