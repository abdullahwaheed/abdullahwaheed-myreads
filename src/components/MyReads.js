import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { ROUTES, BOOK_SHELF } from '../constants';
import * as BooksAPI from '../BooksAPI';
import Shelf from './Shelf';

function MyReads() {
  const [books, setBooks] = useState([]);

  const fetchBooks = () => BooksAPI.getAll().then(books => setBooks(books));

  useEffect(() => {
    fetchBooks();
  }, []);
  return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
          {BOOK_SHELF.map(shelf => (
            <Shelf
              title={shelf.name}
              key={shelf.identifier}
              identifier={shelf.identifier}
              books={books}
              fetchBooks={fetchBooks}
            />
          ))}
          </div>
        </div>
        <div className="open-search">
          <Link to={ROUTES.SEARCH}>Add a book</Link>
        </div>
      </div>
  );
}

export default MyReads;
