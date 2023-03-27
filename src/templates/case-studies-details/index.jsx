/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "@components/pagebreadcrumb";
import { Row, Container, Col } from "react-bootstrap";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import AboutUsBanner from "../../components/about-banner";
import SectionArea from "../../container/case-studies-destails/layout-one";
import { normalizedData } from "../../utils/functions";
import {
    CaseStudiesDetailsArea,
    CaseStudiesDetailsContent,
    CaseClientsCard,
    CaseClientsCardRow,
    CaseDetailsCol,
    CaseDetailsDataTitle,
    CaseDetailsDataDes,
    Thumb,
    CaseStudiesTitle,
} from "./style";
const CaseStudiesPosts = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const content = normalizedData(data?.caseStudies.content || []);

    // const image = getImage(caseStudiesPostData.thumbImg.childImageSharp);
    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Case Studies Details" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title={data?.caseStudies?.title}
            />
            <CaseStudiesDetailsArea>
                <Container>
                    {/* <Thumb>
                        <GatsbyImage
                            image={image}
                            alt={caseStudiesPostData.title}
                        />
                    </Thumb> */}
                    <CaseClientsCard>
                        <CaseClientsCardRow>
                            {data?.caseStudies?.category && (
                                <CaseDetailsCol>
                                    <CaseDetailsDataTitle>
                                        Category:
                                    </CaseDetailsDataTitle>
                                    <span className="clients-hr"></span>
                                    <CaseDetailsDataDes>
                                        {data?.caseStudies?.category}
                                    </CaseDetailsDataDes>
                                </CaseDetailsCol>
                            )}
                            {data?.caseStudies?.clients && (
                                <CaseDetailsCol>
                                    <CaseDetailsDataTitle>
                                        Clients:
                                    </CaseDetailsDataTitle>
                                    <span className="clients-hr"></span>
                                    <CaseDetailsDataDes>
                                        {data?.caseStudies?.clients}
                                    </CaseDetailsDataDes>
                                </CaseDetailsCol>
                            )}

                            {data?.caseStudies?.date && (
                                <CaseDetailsCol>
                                    <CaseDetailsDataTitle>
                                        Date:
                                    </CaseDetailsDataTitle>
                                    <span className="clients-hr"></span>
                                    <CaseDetailsDataDes>
                                        {data?.caseStudies?.date}
                                    </CaseDetailsDataDes>
                                </CaseDetailsCol>
                            )}
                            {data?.caseStudies?.budget && (
                                <CaseDetailsCol>
                                    <CaseDetailsDataTitle>
                                        Budget:
                                    </CaseDetailsDataTitle>
                                    <span className="clients-hr"></span>
                                    <CaseDetailsDataDes>
                                        {data?.caseStudies?.budget}
                                    </CaseDetailsDataDes>
                                </CaseDetailsCol>
                            )}
                            {data?.caseStudies?.location && (
                                <CaseDetailsCol>
                                    <CaseDetailsDataTitle>
                                        Location:
                                    </CaseDetailsDataTitle>
                                    <span className="clients-hr"></span>
                                    <CaseDetailsDataDes>
                                        {data?.caseStudies?.location}
                                    </CaseDetailsDataDes>
                                </CaseDetailsCol>
                            )}
                        </CaseClientsCardRow>
                    </CaseClientsCard>
                    <CaseStudiesDetailsContent>
                        {data?.caseStudies?.title && (
                            <CaseStudiesTitle>
                                {data?.caseStudies?.title}
                            </CaseStudiesTitle>
                        )}

                        <SectionArea
                            data={content["case-studies-hero-section"]}
                        />
                        <Row className="gx-5 mt-5">
                            <Col lg={3}>
                                <AboutUsBanner />
                            </Col>
                            <Col lg={9}>
                                <SectionArea
                                    data={
                                        content[
                                            "case-studies-description-section"
                                        ]
                                    }
                                />
                            </Col>
                        </Row>
                        <SectionArea
                            data={content["case-studies-how-it-Work-section"]}
                        />
                        <SectionArea
                            data={content["case-studies-results-section"]}
                        />
                    </CaseStudiesDetailsContent>
                </Container>
            </CaseStudiesDetailsArea>
        </Layout>
    );
};
CaseStudiesPosts.propTypes = {
    data: PropTypes.object,
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        caseStudies: PropTypes.shape({
            title: PropTypes.string,
            category: PropTypes.string,
            clients: PropTypes.string,
            budget: PropTypes.string,
            date: PropTypes.string,
            location: PropTypes.string,
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export const caseStudiesPostsQuery = graphql`
    query CaseStudiesPostsBySlug($slug: String!) {
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
        caseStudies(slug: { eq: $slug }) {
            id
            title
            clients
            category
            date
            budget
            location
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
            content {
                section
                headings {
                    content
                    level
                }
                items {
                    id
                    desc
                }
            }
        }
    }
`;
export default CaseStudiesPosts;
