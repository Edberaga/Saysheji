import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import ServicesItem from "../../components/services";
import { ServicesSection } from "./style";
const ServicsArea = ({ data }) => {
    return (
        <ServicesSection>
            <Container>
                <Row className="gx-5">
                    {data?.items &&
                        data?.items.map((item, i) => {
                            return (
                                <Col lg={6} md={6} key={i}>
                                    <ServicesItem
                                        iconImage={item.images[0].src}
                                        lineImage={item.images[1].src}
                                        title={item.title}
                                        disText={item.excerpt}
                                        actionClass={item.className}
                                        outlineColor={item.outlineColor}
                                        slug={item.slug}
                                    />
                                </Col>
                            );
                        })}
                </Row>
            </Container>
        </ServicesSection>
    );
};
ServicsArea.propTypes = {
    data: PropTypes.shape({
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
                fields: PropTypes.shape({
                    slug: PropTypes.string,
                }),
                alt: PropTypes.string,
            })
        ),
    }),
};
export default ServicsArea;
