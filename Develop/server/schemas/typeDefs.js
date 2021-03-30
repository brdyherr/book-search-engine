// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        books: [Book]
        savedBooks: [bookSchema]
    }

    type Book {
        _id: ID
        author: [Author]
        description: String
        bookId: String
        image: String
        link: String
        title: String 
    }

    type Author {
        name: String
        books: [Book]
      }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        book(_id: ID!): Book
    }

    type Mutation {
        
    }
`;

// export the typeDefs
module.exports = typeDefs;