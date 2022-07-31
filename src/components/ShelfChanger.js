import PropTypes from 'prop-types';

import { SHELF_CHANGER, BOOK_SHAPE } from '../constants';
import * as BooksAPI from '../BooksAPI';

function ShelfChanger({ book, fetchBooks, shelf }) {
    const handleChange = event => {
        BooksAPI.update(book, event.target.value).then(fetchBooks);
    }
    
    return (
        <div className="book-shelf-changer">
            <select onChange={handleChange} value={shelf}>
                {SHELF_CHANGER.map((changer, index) => (
                    <option
                        value={changer.identifier}
                        key={`${changer.identifier}-${index}`}
                        disabled={changer.disabled}
                    >
                        {changer.name}
                    </option>
                ))}
            </select>
        </div>
  );
}

ShelfChanger.propTypes = {
    fetchBooks: PropTypes.func.isRequired,

    book: PropTypes.shape(BOOK_SHAPE).isRequired,

    shelf: PropTypes.string.isRequired,
};

export default ShelfChanger;
