module.exports = `
    type CaseStudies implements Node {
        id: ID!
        title: String!
        slug: String!
        excerpt: String!
        is_featured: Boolean
        clients: String
        date: String
        budget: String
        location: String
        content: [CaseStudiesContent]
    }

    type CaseStudiesContent {
        id: ID!
    }
    type Item {
        id: ID!
    }
`;
