import React, { createContext, useState, useReducer, useEffect } from 'react';
import { v1 as uuid } from 'uuid';
import { BookReducer } from '../Reducer/BookReducer';

export const BookContext = createContext();

function BookContextProvider(props) {
  const [books, dispatch] = useReducer(BookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  /*const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };*/

  /*const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };*/

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;
