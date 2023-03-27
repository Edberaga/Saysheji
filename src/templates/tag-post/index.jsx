import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "@components/pagebreadcrumb";
import { graphql } from "gatsby";
import { normalizedData } from "@utils/functions";
import BlogLeftSidebar from "../../container/blog/blog-left-sidebar";

const TagPosts = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title={"Blog Tag Post"} pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                crumbLabel="Blog Tag Post"
                title="Blog Tag Post"
            />
            <BlogLeftSidebar
                data={{
                    items: data.allArticle.nodes,
                }}
            />
        </Layout>
    );
};

TagPosts.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allArticle: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};
export const query = graphql`
    query tagPageQuery($slug: String) {
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
        allArticle(filter: { tags: { elemMatch: { slug: { eq: $slug } } } }) {
            nodes {
                ...Articles
            }
        }
    }
`;
export default TagPosts;
