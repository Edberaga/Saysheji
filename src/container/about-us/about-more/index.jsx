import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Col, Container, Row } from "react-bootstrap";
import AboutUsBanner from "../../../components/about-banner";
import AboutUSCard from "../../../components/about-card";
import PropTypes from "prop-types";
import { AboutUsSection, AboutThumb } from "./style";

const AboutMoreArea = ({ data }) => {
    return (
        <AboutUsSection>
            <Container>
                <Row className="gx-5">
                    <Col lg={4}>
                        <AboutThumb>
                            <GatsbyImage
                                image={getImage(data?.images?.[0].src)}
                                alt={data?.images?.[0].alt}
                            />
                        </AboutThumb>
                    </Col>
                    <Col lg={5}>
                        {data?.items &&
                            data?.items.map((item) => (
                                <AboutUSCard
                                    key={item.id}
                                    subTitle={item.headings[0].content}
                                    title={item.headings[1].content}
                                    description={item.description}
                                />
                            ))}
                    </Col>
                    <Col lg={3}>
                        <AboutUsBanner />
                    </Col>
                </Row>
            </Container>
        </AboutUsSection>
    );
};
AboutMoreArea.propTypes = {
    data: PropTypes.shape({
        images: PropTypes.arrayOf(
            PropTypes.shape({
                src: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.shape({}),
                ]).isRequired,
                alt: PropTypes.string,
            })
        ),

        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
                fields: PropTypes.shape({
                    slug: PropTypes.string,
                }),
                description: PropTypes.string,
                headings: PropTypes.arrayOf(
                    PropTypes.shape({
                        level: PropTypes.string,
                        content: PropTypes.string,
                    })
                ),
            })
        ),
    }),
};
export default AboutMoreArea;
