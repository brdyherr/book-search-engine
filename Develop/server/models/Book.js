const { Schema } = require('mongoose');
const authorSchema = require('./Author');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const bookSchema = new Schema(
  {
    author: [authorSchema],
    description: {
      type: String,
      required: true
    },
    // saved book id from GoogleBooks
    bookId: {
      type: String,
      required: true
    },
    image: {
      type: String,
    },
    link: {
      type: String
    },
    title: {
      type: String,
      required: true
    },
    author: [authorSchema]
  }
);

const Book = model('Book', bookSchema);

module.exports = Book;
