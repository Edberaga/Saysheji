import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import CaseStudiesGrid from "../../components/case-studies-grid";
import { CaseStudiesSection } from "./style";
const CaseStudiesArea = ({ data }) => {
    return (
        <CaseStudiesSection>
            <Container>
                <Row className="gx-5">
                    {data?.items &&
                        data?.items.map((post, i) => {
                            return (
                                <Col lg={4} md={4} sm={6} key={i}>
                                    <CaseStudiesGrid
                                        title={post.title}
                                        thumbImg={post.images[0].src}
                                        category={post.category}
                                        slug={post.slug}
                                    />
                                </Col>
                            );
                        })}
                </Row>
            </Container>
        </CaseStudiesSection>
    );
};
CaseStudiesArea.propTypes = {
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
export default CaseStudiesArea;
