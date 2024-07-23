import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from 'react-router-dom';

function App() {
  const [books, setBooks] = useState([]);

  // Function to fetch books from API
  const fetchBooks = async () => {
    const response = await fetch('/api/books');
    const data = await response.json();
    setBooks(data); // Update state with fetched books
  };

  useEffect(() => {
    fetchBooks(); // Fetch books on initial render
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    
    const response = await fetch('/api/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, author, pages })
    });

    const data = await response.json();
    console.log(data);

    fetchBooks(); // Re-fetch books after a new book is added

    // redirect to the new book's page
    window.location.href = `/book/${encodeURIComponent(name)}`;
  };

  return (
    <Router>
      <div className="App">
        <h1>Books</h1>
        <Routes>
          <Route 
            path='/' 
            element={
              <div>
                <form onSubmit={onSubmit}>
                  <input type="text" id="name" name="name" placeholder="name" />
                  <input type="text" id="author" name="author" placeholder="author" />
                  <input type="number" id="pages" name="pages" placeholder="pages" />
                  <button type="submit">Submit</button>
                </form>
              </div>
            } 
          />
          <Route 
            path='/book/:id' 
            element={<DisplayBook books={books} />} 
          />
          <Route 
            path='*' 
            element={<h1>404: This is not the webpage you are looking for</h1>} 
          />
        </Routes>
      </div>
    </Router>
  );
}

function DisplayBook({ books }) {
  const { id } = useParams();
  // Decode the URL-encoded book name
  const decodedId = decodeURIComponent(id);
  const book = books.find(book => book.name === decodedId);

  return book ? (
    <div>
      <h1>{book.name}</h1>
      <h2>{book.author}</h2>
      <p>{book.pages} pages</p>
    </div>
  ) : (
    <h1>404 - This is not the webpage you are looking for</h1>
  );
}

export default App;
