import PropTypes from 'prop-types';

import { BOOK_SHAPE } from '../constants';
import ShelfChanger from './ShelfChanger';

function Book({ book, fetchBooks, shelf }) {
    const { title, authors, imageLinks } = book;
    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                        `url("${imageLinks.smallThumbnail}")`,
                    }}
                />
                <ShelfChanger
                    book={book}
                    fetchBooks={fetchBooks}
                    shelf={shelf}
                />
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors.join(', ')}</div>
        </div>
    );
}

Book.propTypes = {
    fetchBooks: PropTypes.func.isRequired,

    book: PropTypes.shape(BOOK_SHAPE).isRequired,

    shelf: PropTypes.string.isRequired,
}

export default Book;
