import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query {
    acronyms(from: Int, limit: Int, search: String): [Acronym]
  }
  type Mutation {
    addAcronym(name: String!, desc: String!): AcronymResponse
    updateAcronym(oldName: String!, newName: String!, newDesc: String!): AcronymResponse
    deleteAcronym(name: String!): AcronymResponse
  }
  type Acronym {
    name: String!
    desc: String!
  }
  type Acronyms {
    acronyms: [Acronym]
  }
  type AcronymResponse {
    data: Acronym
    message: String
  }
`);

export default schema;
