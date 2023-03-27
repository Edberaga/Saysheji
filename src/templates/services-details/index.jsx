/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "@components/pagebreadcrumb";
import { graphql } from "gatsby";
import { Container } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SectionArea from "../../container/services-details/layout-one";
import SectionTwoArea from "../../container/services-details/layout-two";
import SectionThreeArea from "../../container/services-details/layout-three";
import { normalizedData } from "../../utils/functions";
import {
    ServicesDetailsArea,
    ServicesDetailsContent,
    ServicesDetails,
    Thumb,
    ServicesTitle,
    ServiceDetailsList,
} from "./style";
const ServicesPosts = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const content = normalizedData(data?.services.content || []);
    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Services Details" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Services Details"
            />
            <ServicesDetailsArea>
                <Container>
                    <ServicesDetailsContent>
                        <ServicesDetails>
                            <Thumb>
                                {data?.services?.images?.[2].src && (
                                    <GatsbyImage
                                        image={getImage(
                                            data?.services?.images?.[2].src
                                        )}
                                        alt={
                                            data?.services?.images?.[2].alt ||
                                            data?.services?.title
                                        }
                                    />
                                )}
                            </Thumb>
                            <ServicesTitle>
                                {data?.services.title && data.services.title}
                            </ServicesTitle>
                            <SectionArea data={content["layout-one-section"]} />
                            <ServiceDetailsList>
                                <SectionTwoArea
                                    data={content["layout-two-section"]}
                                />
                                <SectionArea
                                    data={content["layout-three-section"]}
                                />
                            </ServiceDetailsList>
                            <SectionThreeArea
                                data={content["layout-four-section"]}
                            />
                            <SectionArea
                                data={content["layout-five-section"]}
                            />
                        </ServicesDetails>
                    </ServicesDetailsContent>
                </Container>
            </ServicesDetailsArea>
        </Layout>
    );
};
ServicesPosts.propTypes = {
    data: PropTypes.object,
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        services: PropTypes.shape({
            title: PropTypes.string,
            content: PropTypes.arrayOf(PropTypes.shape({})),
            images: PropTypes.arrayOf(
                PropTypes.shape({
                    src: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.shape({}),
                    ]).isRequired,
                    alt: PropTypes.string,
                })
            ),
        }),
    }),
};

export const servicesPostsQuery = graphql`
    query ServicesPostsBySlug($slug: String!) {
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
        services(slug: { eq: $slug }) {
            id
            id
            title
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
                alt
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
        }
    }
`;
export default ServicesPosts;
