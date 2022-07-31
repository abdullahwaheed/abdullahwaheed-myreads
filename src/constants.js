import PropTypes from 'prop-types';

export const ROUTES = {
    HOME: '/',
    SEARCH: '/search',
};

export const BOOK_SHELF = [
    {
        name: 'Currently Reading',
        identifier: 'currentlyReading',
    },
    {
        name: 'Want to Read',
        identifier: 'wantToRead',
    },
    {
        name: 'Read',
        identifier: 'read',
    },
];

export const SHELF_CHANGER = [
    {
        name: 'Move to...',
        identifier: '',
        disabled: true,
    },
    ...BOOK_SHELF,
    {
        name: 'None',
        identifier: 'none',
    }
];

export const BOOK_SHAPE = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string),
    imageLinks: PropTypes.object,
};
