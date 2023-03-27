module.exports = `
    type Article implements Node {
        id: ID!
        title: String!
        slug: String!
        date: Date @dateformat
        is_featured: Boolean
        quote_text: String
        author: Authors
        categories: [Meta]
        tags: [Meta]
        image: Image
        excerpt: String @mdpassthrough(fieldName: "excerpt") 
        content: String @mdpassthrough(fieldName: "html")
        buttons: [Button]
    }
    
    type Item {
        id: ID!
    }
    
    type Meta {
        title: String
        slug: String
    }
    
`;
