import PropTypes from 'prop-types';

export const ROUTES = {
    HOME: '/',
    SEARCH: '/search',
};

export const BOOK_SHAPE = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};
