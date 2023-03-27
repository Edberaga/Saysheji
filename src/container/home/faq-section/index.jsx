import PropTypes from "prop-types";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { Col, Container, Row, Accordion } from "react-bootstrap";
import FaqList from "../../../components/faq";
import SectionTitleTwo from "../../../components/title-two";
import { FaqSection, FaqImageBox, FaqContentBox } from "./style";
const FAQArea = ({ data }) => {
    return (
        <FaqSection>
            <StaticImage
                src="../../../data/images/bg/bg.png"
                alt=""
                className="faq-bg"
            />
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <FaqImageBox>
                            <GatsbyImage
                                className="choose-us-img"
                                image={getImage(data.images?.[0].src)}
                                alt="choose us"
                            />
                        </FaqImageBox>
                    </Col>
                    <Col lg={6}>
                        <FaqContentBox>
                            <SectionTitleTwo
                                subTitle={data?.section_title.subtitle}
                                title={data?.section_title.title}
                                {...data.section_title}
                            />
                            <Accordion defaultActiveKey="1">
                                {data?.items &&
                                    data?.items.map((item, i) => {
                                        return (
                                            <FaqList
                                                key={i}
                                                title={item.headings[0].content}
                                                numberItem={i + 1}
                                                description={item.description}
                                            />
                                        );
                                    })}
                            </Accordion>
                        </FaqContentBox>
                    </Col>
                </Row>
            </Container>
        </FaqSection>
    );
};
FAQArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            title: PropTypes.string,
            subtitle: PropTypes.string,
            description: PropTypes.string,
            icon: PropTypes.shape({
                src: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.shape({}),
                ]).isRequired,
                alt: PropTypes.string,
            }),
        }),
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
                alt: PropTypes.string,
                designation: PropTypes.string,
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
export default FAQArea;
