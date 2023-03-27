import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import ServicesItem from "../../../components/services";
import SectionTitle from "../../../components/title";
import { ServicesSeaction } from "./style";
const ServicesArea = ({ data }) => {
    return (
        <ServicesSeaction>
            <Container>
                {data?.section_title && (
                    <SectionTitle
                        headingTitle={data?.section_title.title}
                        {...data.section_title}
                    />
                )}

                <Row className="gx-5">
                    {data?.items &&
                        data.items?.map((item, i) => {
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
        </ServicesSeaction>
    );
};

ServicesArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            title: PropTypes.string,
            icon: PropTypes.shape({
                src: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.shape({}),
                ]).isRequired,
                alt: PropTypes.string,
            }),
        }),
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
                fields: PropTypes.shape({
                    slug: PropTypes.string,
                }),
                alt: PropTypes.string,
            })
        ),
        buttons: PropTypes.arrayOf(
            PropTypes.shape({
                content: PropTypes.string,
            })
        ),
    }),
};

export default ServicesArea;
