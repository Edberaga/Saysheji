import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import Hero from "../container/home/hero";
import BrandArea from "../container/home/brand";
import ServicesArea from "../container/home/services";
import WorkingProcessArea from "../container/home/working-process";
import WhyChooseUsArea from "../container/home/whay-choose-us";
import CaseStudiesArea from "../container/home/case-studies";
import TeamArea from "../container/home/team";
import FAQArea from "../container/home/faq-section";
import TestimonialArea from "../container/home/testimonial";
import LatestBlogArea from "../container/home/blog";
import { normalizedData } from "@utils/functions";

const IndexPage = ({ data }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const content = normalizedData(data?.page.content || []);
    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Home" pathname="/" />
            <Hero data={content["hero-section"]} />
            <BrandArea data={content["brand-section"]} />
            <ServicesArea
                data={{
                    ...content["services-section"],
                    items: data.allServices.nodes,
                }}
            />
            <WorkingProcessArea data={content["working-process"]} />
            <WhyChooseUsArea data={content["why-choose-us-section"]} />
            <CaseStudiesArea
                data={{
                    ...content["case-studies-section"],
                    items: data.allCaseStudies.nodes,
                }}
            />
            <TeamArea data={content["team-members-section"]} />
            <FAQArea data={content["frequiently-asked-question-section"]} />
            <TestimonialArea data={content["happy-customer-section"]} />
            <LatestBlogArea
                data={{
                    ...content["blog-section"],
                    itemsone: data.featuredPosts.nodes,
                    itemstwo: data.latestPosts.nodes,
                }}
            />
        </Layout>
    );
};

IndexPage.propTypes = {
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
        allServices: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        latestPosts: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        featuredPosts: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export const query = graphql`
    query homePageQuery {
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
        page(title: { eq: "home" }, pageType: { eq: homepage }) {
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
        allServices(
            limit: 4
            sort: { order: DESC, fields: id }
            filter: { is_featured: { eq: true } }
        ) {
            nodes {
                ...Services
            }
        }
        featuredPosts: allArticle(
            limit: 1
            sort: { order: DESC, fields: date }
        ) {
            nodes {
                tags {
                    title
                    slug
                }
                slug
                title
                date(formatString: "D MMMM, YYYY")
                categories {
                    title
                    slug
                }
                image {
                    alt
                    src {
                        childImageSharp {
                            gatsbyImageData(
                                height: 200
                                quality: 100
                                width: 520
                            )
                        }
                    }
                }
            }
        }
        latestPosts: allArticle(limit: 3, sort: { order: DESC, fields: date }) {
            nodes {
                ...Articles
            }
        }
    }
`;

export default IndexPage;
