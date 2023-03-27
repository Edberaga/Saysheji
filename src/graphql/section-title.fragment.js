import { graphql } from "gatsby";

export const query = graphql`
    fragment SectionTitle on SectionTitle {
        title
        subtitle
        description
        iconBg
        align
        iconAlign
        dividerBg
        showIcon
        color
        showSubTitle
        showShortDec
        icon {
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
    }
`;
