import { graphql } from "gatsby";

export const query = graphql`
    fragment Articles on Article {
        title
        slug
        excerpt
        date(formatString: "D MMMM, YYYY")
        tags {
            title
            slug
        }
        categories {
            title
            slug
        }
        image {
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
    }
`;
