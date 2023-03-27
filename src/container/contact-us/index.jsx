import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import GetInTouchArea from "../../components/get-in-touch";
import MessageFrom from "../../components/message-from";
import SectionTitle from "../../components/title";
import { ContactUsSection, ContactUsinfoList, ContactUsCard } from "./style";
const ContactUsArea = ({ data }) => {
    return (
        <ContactUsSection>
            <Container>
                <ContactUsCard>
                    <Row className="gx-5 contact-us-title">
                        <Col lg={6}>
                            {data?.section_title && (
                                <SectionTitle
                                    headingTitle={data?.section_title.title}
                                    {...data.section_title}
                                />
                            )}
                            <ContactUsinfoList>
                                {data?.items &&
                                    data?.items.map((item) => {
                                        return (
                                            <GetInTouchArea
                                                key={item.id}
                                                icon={item.icon}
                                                title={item.headings[0].content}
                                                content={
                                                    item.headings[1].content
                                                }
                                            />
                                        );
                                    })}
                            </ContactUsinfoList>
                        </Col>
                        <Col lg={6}>
                            <SectionTitle
                                headingTitle="Send Us A Message"
                                showIcon={false}
                                align="left"
                            />
                            <MessageFrom />
                        </Col>
                    </Row>
                </ContactUsCard>
            </Container>
        </ContactUsSection>
    );
};
ContactUsArea.propTypes = {
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
                icon: PropTypes.string,
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
export default ContactUsArea;
