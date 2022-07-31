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
        identifier: 'none',
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
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageLinks: PropTypes.objectOf(PropTypes.shape({
        smallThumbnail: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
    })).isRequired,
};
