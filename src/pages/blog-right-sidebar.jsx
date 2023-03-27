import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "../components/pagebreadcrumb";
import BlogRightSidebar from "../container/blog/blog-right-sidebar";
import { graphql } from "gatsby";
import { normalizedData } from "@utils/functions";

const BlogRightSidebarPage = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Blog Right Sidebar Page" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Blog Right Sidebar Page"
            />
            <BlogRightSidebar
                data={{
                    items: data.allArticle.nodes,
                }}
            />
        </Layout>
    );
};
BlogRightSidebarPage.propTypes = {
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
    query blogRightSidebarPageQuery {
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
        allArticle(sort: { order: DESC, fields: date }) {
            nodes {
                ...Articles
            }
        }
    }
`;
export default BlogRightSidebarPage;
