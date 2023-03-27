import { graphql } from "gatsby";

export const query = graphql`
    fragment CaseStudies on CaseStudies {
        id
        title
        slug
        excerpt
        category
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
        }
    }
`;
