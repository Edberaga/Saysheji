module.exports = `
    type Page implements Node {
        id: ID!
        title: String!
        content: [PageContent]
        pageType: PageType!
    }
    enum PageType {
        innerpage
        homepage
    }
    type PageContent {
        id: ID!
        section: String!
        headings: [Heading]
        intro: [Text]
        mid: [Text]
        texts: [Text]
        items: [Item]
        section_title: SectionTitle
        images: [Image]
        buttons: [Button]
    }
    type Item {
        id: ID!
        title: String
        description: String
        images: [Image]
        link: String
        name: String,
        designation: String,
        socials: [Social]
        rating: Int
        subject: String
        alt: String
        icon: String
    }
    
`;
