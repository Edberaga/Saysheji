import PropTypes from "prop-types";
import { Col, Container, Row, Accordion } from "react-bootstrap";
import FaqList from "../../components/faq";
import Categories from "../../components/widget/articles-categories-widget";
import { FaqSection, FaqContentBox } from "./style";
const FAQArea = ({ data }) => {
    return (
        <FaqSection>
            <Container>
                <Row>
                    <Col lg={8}>
                        <FaqContentBox>
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
                    <Col lg={4}>
                        <Categories />
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
