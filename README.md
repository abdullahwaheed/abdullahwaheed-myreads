# MyReads Project

This is the completed solution of my read project.

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## Directory Structure

```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    │── Components
    │   │── App.js # This is the root of your app. Contains routing of the app.
    │   │── Book.js # Renders book component of the app.
    │   │── MyReads.js # Renders my reads component which has book shelves and respective books.
    │   │── SearchLibrary.js # Renders SearchLibrary component which searches books based on query.
    │   │── Shelf.js # Renders Shelf component which renders respective books.
    │   │── ShelfChanger.js # Renders ShelfCHanger selections.
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── constansts.js # constants of the app
    ├── index.css # Global styles. You probably won't need to change anything here.
    │── index.js # You should not need to modify this file. It is used for DOM rendering only.
    │── .gitignore # Igrnores useless files for git tracking.
```

## Routing

MyReads page is at [`MyReads`](http://localhost:3000/)
Search page is at [`Search`](http://localhost:3000/)


## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

