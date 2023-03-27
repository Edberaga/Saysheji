module.exports = `
    type Authors implements Node {
        id: ID!
        name: String!
        slug: String!
        image: Image
        description: String
        bio: String
        socials: [Social]
    }

    type Social {
        id: ID!
    }
`;
