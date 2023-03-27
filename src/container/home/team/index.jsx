import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { Col, Container, Row } from "react-bootstrap";
import TeamMember from "../../../components/team";
import SectionTitle from "../../../components/title";
import { TeamSection } from "./style";
const TeamArea = ({ data }) => {
    return (
        <TeamSection>
            <StaticImage
                className="pattern"
                src="../../../data/images/team/pattern.png"
                alt=""
            />
            <Container>
                {data?.section_title && (
                    <SectionTitle
                        headingTitle={data?.section_title.title}
                        {...data.section_title}
                    />
                )}
                <Row>
                    {data?.items &&
                        data?.items.map((item, i) => {
                            return (
                                <Col lg={3} sm={6} key={i}>
                                    <TeamMember
                                        title={item.headings[0].content}
                                        level={item.headings[0].level}
                                        teamImage={item.images[0].src}
                                        designation={item.designation}
                                        socials={item.socials}
                                    />
                                </Col>
                            );
                        })}
                </Row>
            </Container>
        </TeamSection>
    );
};

TeamArea.propTypes = {
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
                designation: PropTypes.string,
                socials: PropTypes.arrayOf(
                    PropTypes.shape({
                        title: PropTypes.string,
                    })
                ),
            })
        ),
        buttons: PropTypes.arrayOf(
            PropTypes.shape({
                content: PropTypes.string,
            })
        ),
    }),
};

export default TeamArea;
