import PropTypes from 'prop-types';

import Book from './Book';
import { BOOK_SHAPE } from './contants';

function Category({ title, books }) {
  return (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
        <ol className="books-grid">
            {books.map(book => (
                <li key={book.id}>
                    <Book
                        id={book.id}
                        title={book.title}
                        author={book.author}
                        url={book.url}
                    />
                </li>
            ))}
        </ol>
        </div>
    </div>
  );
}

Category.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.shape(BOOK_SHAPE)).isRequired,
}


export default Category;
