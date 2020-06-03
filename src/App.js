import React from 'react';
import './App.css';

import BookContentProvider from './Context/BookContext';

import Header from './Components/Header';
import BookForm from './Components/BookForm';
import BookList from './Components/BookList';

function App() {
  return (
    <div className='App'>
      <BookContentProvider>
        <Header />
        <BookForm />
        <BookList />
      </BookContentProvider>
    </div>
  );
}

export default App;
