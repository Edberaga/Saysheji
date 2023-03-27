module.exports = `
    type Services implements Node {
        id: ID!
        title: String!
        slug: String!
        excerpt: String!
        is_featured: Boolean
        className: String
        outlineColor: String
        budget: String
        images: [Image]
        content: [ServicesContent]
        buttons: [Button]
    }

    type ServicesContent {
        id: ID!
    }
    type Item {
        id: ID!
    }
`;
