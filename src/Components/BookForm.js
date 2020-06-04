import React, { useContext, useState } from 'react';
import { BookContext } from '../Context/BookContext';

function BookForm() {
  const { dispatch } = useContext(BookContext);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const setBookInfo = (e) => {
    const field = e.target.name;
    switch (field) {
      case 'title':
        setTitle(e.target.value);
        break;
      case 'author':
        setAuthor(e.target.value);

        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_BOOK', book: { title, author } });
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='title'
        placeholder='Title'
        value={title}
        onChange={setBookInfo}
        required
      />
      <input
        type='text'
        name='author'
        placeholder='Author'
        value={author}
        onChange={setBookInfo}
        required
      />
      <input type='submit' value='Add' />
    </form>
  );
}

export default BookForm;
