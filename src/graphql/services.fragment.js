import { graphql } from "gatsby";

export const query = graphql`
    fragment Services on Services {
        id
        title
        slug
        className
        excerpt
        outlineColor
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
