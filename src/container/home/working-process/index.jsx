import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "../../../components/title";
import WorkingProcess from "../../../components/working-process";
import { WorkingProcessSection } from "./style";
const WorkingProcessArea = ({ data }) => {
    return (
        <WorkingProcessSection>
            <Container>
                {data?.section_title && (
                    <SectionTitle
                        headingTitle={data?.section_title.title}
                        {...data.section_title}
                    />
                )}

                <Row className="working-process">
                    {data?.items &&
                        data?.items.map((item, i) => {
                            return (
                                <Col
                                    lg={3}
                                    md={6}
                                    sm={6}
                                    key={i}
                                    className="working-process-list"
                                >
                                    <WorkingProcess
                                        working_arrow={item.images?.[1].src}
                                        icon={item.images?.[0].src}
                                        title={item.headings[0].content}
                                        level={item.headings[0].level}
                                    />
                                </Col>
                            );
                        })}
                </Row>
            </Container>
        </WorkingProcessSection>
    );
};
WorkingProcessArea.propTypes = {
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
        headings: PropTypes.arrayOf(
            PropTypes.shape({
                level: PropTypes.string,
                content: PropTypes.string,
            })
        ),
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
export default WorkingProcessArea;
