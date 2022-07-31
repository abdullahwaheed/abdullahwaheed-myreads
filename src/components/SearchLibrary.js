import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { ROUTES } from "../constants";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";

function SearchLibrary() {
  const [books, setBooks] = useState([]);
  const [userBookIds, setUerBooksIds] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((responseBooks) =>
      setUerBooksIds(
        responseBooks.map((book) => ({
          id: book.id,
          shelf: book.shelf,
        }))
      )
    );
  }, []);

  const handleChange = (event) => {
    const searchQuery = event.target.value;
    if (!searchQuery) {
      setBooks([]);
    } else {
      BooksAPI.search(searchQuery).then((responseBooks) => {
        if (Array.isArray(responseBooks)) {
          setBooks(responseBooks);
        } else {
          setBooks([]);
        }
      });
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to={ROUTES.HOME}>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map((book) => {
			const shelf = userBookIds.find((userId) => userId.id === book.id);
            return (
              <li key={book.id}>
                <Book book={book} shelf={shelf ? shelf.shelf : 'none'} />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default SearchLibrary;
