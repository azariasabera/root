import './App.css';
//import { useState, useEffect } from 'react';

function App() {
  //const [books, setBooks] = useState([]);
  /*useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/book');
      const data = await response.json();
      setBooks(data);
    }
    fetchData();
  });*/

  const onSubmit = async () => {
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
    const data = await response.text();
    console.log(data)
    //setBooks([...books, data]);
  }

  return (
    <div className="App">
      <h1>books</h1>
      <input type="text" placeholder="book name" name="name" id='name'/>
      <input type="text" placeholder="author" name="author" id='author'/>
      <input type="number" placeholder="pages" name="pages" id='pages'/>
      <button type="submit" onClick={onSubmit} id='submit'>Add book</button>
    </div>
  );
}

export default App;
