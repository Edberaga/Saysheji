import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import { graphql } from "gatsby";
import PageBreadcrumb from "../../components/pagebreadcrumb";
import ServicsArea from "../../container/services";
import { careerData } from "../../data/career/career";
import { normalizedData } from "@utils/functions";
import { Link } from "gatsby";
import "./style.css";
import { CareerCard } from "../../components/career-card";

const CareerPages = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const content = normalizedData(data?.page.content || []);
    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Career Page" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Careers"
            />
            <section className="career-section">
                <header className="career-header">
                    <h1>Career In Saysheji</h1>
                    <p>
                        We are always looking for passionate people to join us
                        to take over the digital world. <br />
                        Check out the available positions below and send your
                        resume to
                        <span className="boss-mail">
                            kaseyfong@saysheji.com
                        </span>
                    </p>
                </header>

                <section className="career-container">
                    {careerData.map((item, index) => {
                        return <CareerCard key={index} {...item} />;
                    })}
                </section>
            </section>
        </Layout>
    );
};

CareerPages.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        page: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allServices: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export const query = graphql`
    query servicesPageQuery {
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
        page(title: { eq: "servicesPage" }, pageType: { eq: innerpage }) {
            content {
                ...PageContentAll
                section_title {
                    ...SectionTitle
                }
            }
        }
        allServices(
            sort: { order: DESC, fields: id }
            filter: { is_featured: { eq: true } }
        ) {
            nodes {
                ...Services
            }
        }
    }
`;

export default CareerPages;
