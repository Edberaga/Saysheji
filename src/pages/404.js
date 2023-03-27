import Layout from "@layout";
import SEO from "@components/seo";
import PropTypes from "prop-types";
import ErrorArea from "../container/error";
import { graphql } from "gatsby";
import { normalizedData } from "@utils/functions";
const NotFoundPage = ({ data }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="404: Not found" pathname="/" />
            <ErrorArea />
        </Layout>
    );
};

NotFoundPage.propTypes = {
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};
export const query = graphql`
    query NotFoundPageQuery {
        allGeneral {
            nodes {
                section
                id
                menu {
                    ...Menu
                }
                footer {
                    ...Footer
                }
            }
        }
    }
`;
export default NotFoundPage;
