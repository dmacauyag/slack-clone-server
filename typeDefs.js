import { gql } from 'apollo-server';

const typeDefs = gql`
    type Query {
        hi: String
    }
`;

export default typeDefs;
