import { graphql } from "gatsby";

export const query = graphql`
    fragment PageContentAll on PageContent {
        section
        headings {
            level
            content
        }
        texts {
            content
        }
        buttons {
            ...Button
        }
        images {
            src {
                childImageSharp {
                    gatsbyImageData(
                        formats: WEBP
                        placeholder: TRACED_SVG
                        quality: 100
                    )
                }
            }
            alt
        }
        items {
            id
            headings {
                content
                level
            }
            images {
                alt
                src {
                    childImageSharp {
                        gatsbyImageData(
                            formats: WEBP
                            placeholder: TRACED_SVG
                            quality: 100
                        )
                    }
                }
            }
            description
            designation
            icon
            socials {
                title
                link
                id
                icon
            }
        }
    }
`;
