import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "../components/pagebreadcrumb";
import CaseStudiesArea from "../container/case-studies";
import { normalizedData } from "@utils/functions";
import { graphql } from "gatsby";
const CaseStudiesPage = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const content = normalizedData(data?.page.content || []);
    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Case Studies Page" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Case Studies Page"
            />
            <CaseStudiesArea
                data={{
                    ...content["casestudies-section"],
                    items: data.allCaseStudies.nodes,
                }}
            />
        </Layout>
    );
};
export const query = graphql`
    query casestudiesPageQuery {
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
        page(title: { eq: "casestudiesPage" }, pageType: { eq: innerpage }) {
            content {
                ...PageContentAll
                section_title {
                    ...SectionTitle
                }
            }
        }
        allCaseStudies(
            sort: { order: DESC, fields: id }
            filter: { is_featured: { eq: true } }
        ) {
            nodes {
                ...CaseStudies
            }
        }
    }
`;
CaseStudiesPage.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        page: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allCaseStudies: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export default CaseStudiesPage;
