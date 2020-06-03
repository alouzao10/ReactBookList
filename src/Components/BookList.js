import React, { useContext } from 'react';
import { BookContext } from '../Context/BookContext';
import BookDetails from './BookDetails';

function BookList() {
  const { books } = useContext(BookContext);

  return books.length ? (
    <div className='book-list'>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <BookDetails book={book} key={book.id} />
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div className='empty'>Nothing to read...</div>
  );
}

export default BookList;
