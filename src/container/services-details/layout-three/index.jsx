import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { SectionTwo, Title, DescriptionText } from "./style.jsx";
const SectionThreeArea = ({ data }) => {
    return (
        <SectionTwo>
            <Row>
                <Col lg={5}>
                    {data?.images && (
                        <GatsbyImage
                            className="text-end"
                            image={getImage(data?.images[0]?.src)}
                            alt={
                                data?.images[0]?.alt ||
                                data?.headings[0].content
                            }
                        />
                    )}
                </Col>
                <Col lg={7}>
                    {data?.headings && (
                        <Title as={data?.headings[0].level}>
                            {data?.headings[0].content}
                        </Title>
                    )}

                    {data?.items &&
                        data?.items.map((item, i) => (
                            <DescriptionText key={i}>
                                {item.desc}
                            </DescriptionText>
                        ))}
                </Col>
            </Row>
        </SectionTwo>
    );
};
SectionThreeArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(
            PropTypes.shape({
                level: PropTypes.string,
                content: PropTypes.string,
            })
        ),
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: [PropTypes.string, PropTypes.number],
                alt: PropTypes.string,
                desc: PropTypes.string,
            })
        ),
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
};
export default SectionThreeArea;
