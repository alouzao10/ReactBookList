import React, { useContext } from 'react';
import { BookContext } from '../Context/BookContext';

function Header() {
  const { books } = useContext(BookContext);
  return (
    <div className='navbar'>
      <h1>My Book List</h1>
      <p>I have: {books.length} books to read.</p>
    </div>
  );
}

export default Header;
