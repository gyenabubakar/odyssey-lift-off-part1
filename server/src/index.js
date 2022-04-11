const {gql} = require('apollo-server');

const typeDefs = gql`
    type Query {
        "Tracks list for home page."
        tracksForHome: [Track!]!
    }

    "A track is a group of modules that teaches about a specific topic."
    type Track {
        id: String!
        "Title of a track."
        title: String!
        "Photo URL of a track."
        thumbnail: String
        "Approximate number of minutes modules take to complete."
        length: Int
        "Number of modules in a track."
        modulesCount: Int
        "User who created a track."
        author: Author!
    }

    type Author {
        id: String!
        "First and last names of author."
        name: String!
        "Author's photo URL."
        photo: String
    }
`;

module.exports = typeDefs;