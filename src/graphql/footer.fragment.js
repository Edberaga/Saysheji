import { graphql } from "gatsby";

export const query = graphql`
    fragment Footer on Footer {
        id
        icon
        link
        text
        title
        list {
            id
            link
            text
            icon
        }
        socials {
            id
            icon
            link
            title
        }
    }
`;
