import gql from 'graphql-tag';

export const QUERY_BOOK = gql`
    query book($id: ID!) {
        book(_id: $id) {
            _id
            username
            author {
                authorTitle
            }
        }
    }
`;

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            savedBooks
        }
    }
`;

export const QUERY_ME = gql`
{
    me {
        _id
        username
        email
        savedBooks{
            authors
            description
            bookID
            title
            image
            link
        }
    }
}`;