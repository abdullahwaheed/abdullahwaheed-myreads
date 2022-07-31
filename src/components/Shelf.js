import PropTypes from 'prop-types';

import Book from './Book';
import { BOOK_SHAPE } from '../constants';

function Shelf({ title, books, identifier, fetchBooks }) {
  return (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
        <ol className="books-grid">
            {books.filter(book => book.shelf === identifier).map(book => (
                <li key={book.id}>
                    <Book
                        book={book}
                        fetchBooks={fetchBooks}
                        shelf={identifier}
                    />
                </li>
            ))}
        </ol>
        </div>
    </div>
  );
}

Shelf.propTypes = {
    fetchBooks: PropTypes.func.isRequired,

    title: PropTypes.string.isRequired,
    identifier: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.shape(BOOK_SHAPE)).isRequired,
}


export default Shelf;
