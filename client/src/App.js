import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from 'react-router-dom';

function App() {
  const [books, setBooks] = useState([]);
  //const navigate = useNavigate();
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
    let newBook = { name: data.name, author: data.author, pages: data.pages };
    setBooks([...books, newBook]);
    console.log(books);
    // redirect to the link: /book/data.name like this:
    //navigate(`/book/${data.name}`);
  }

  return (
    <Router>
    <div className="App">
      <h1>books</h1>
      <Routes>
        <Route path='/' element={
          <div>
            <form action="" method="POST" onSubmit={onSubmit}>
              <input type="text" id="name" name="name" placeholder="name" />
              <input type="text" id="author" name="author" placeholder="author" />
              <input type="number" id="pages" name="pages" placeholder="pages" />
              <button type="submit" id="submit">Submit</button>
            </form>
          </div>
        } 
        />
      
        <Route path='/book/:id' element={< DisplayBook books={books}/>} />
        <Route path='*' element={<h1>404: This is not the webpage you are looking for</h1>} />
      </Routes>
      
    </div>
    </Router>
  );
}

function DisplayBook({books}) {
  const { id } = useParams();
  console.log(books);
  const book = books.find(book => book.name === id);

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
