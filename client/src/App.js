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
      <form action="/api/book" method="POST">
        <input type="text" id="name" name="name" placeholder="name" />
        <input type="text" id="author" name="author" placeholder="author" />
        <input type="number" id="pages" name="pages" placeholder="pages" />
        <button type="submit" id="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
