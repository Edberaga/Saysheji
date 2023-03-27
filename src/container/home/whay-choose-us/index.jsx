import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ChooseUsList from "../../../components/choose-us-list";
import SectionTitleTwo from "../../../components/title-two";
import {
    WhyChooseUsSection,
    ChooseUsImage,
    WhyChooseUsOffset,
    ChooseListWrpa,
} from "./style";
const WhyChooseUsArea = ({ data }) => {
    return (
        <WhyChooseUsSection>
            <StaticImage
                src="../../../data/images/bg/bg.png"
                alt=""
                className="about-bg"
            />
            <Container className="container-max">
                <Row className="align-items-center">
                    <Col lg={6}>
                        <ChooseUsImage>
                            <StaticImage
                                src="../../../data/images/about/1.png"
                                alt=""
                                className="choose-us-img"
                            />
                        </ChooseUsImage>
                    </Col>
                    <Col lg={6}>
                        <WhyChooseUsOffset>
                            <SectionTitleTwo
                                subTitle={data?.section_title.subtitle}
                                title={data?.section_title.title}
                                shortDec={data?.section_title.description}
                                {...data.section_title}
                            />
                            {data?.items &&
                                data?.items.map((item, i) => {
                                    return (
                                        <ChooseListWrpa key={i}>
                                            <ChooseUsList
                                                icon={item.images?.[0].src}
                                                title={item.headings[0].content}
                                                description={item.description}
                                            />
                                        </ChooseListWrpa>
                                    );
                                })}
                        </WhyChooseUsOffset>
                    </Col>
                </Row>
            </Container>
        </WhyChooseUsSection>
    );
};
WhyChooseUsArea.propTypes = {
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
export default WhyChooseUsArea;
