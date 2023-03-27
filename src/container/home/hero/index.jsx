/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../../components/shared/button";
import {
    HeroSection,
    HeroImg,
    HeroContent,
    Title,
    DecText,
    Form,
    Input,
} from "./style";

const Hero = ({ data }) => {
    return (
        <HeroSection>
            {data?.images?.[0]?.src && (
                <GatsbyImage
                    className="shape shape1"
                    image={getImage(data.images?.[0].src)}
                    alt={data.images?.[0].alt}
                />
            )}
            {data?.images?.[1]?.src && (
                <GatsbyImage
                    className="shape shape2"
                    image={getImage(data.images?.[1].src)}
                    alt={data.images?.[1].alt}
                />
            )}
            {data?.images?.[2]?.src && (
                <GatsbyImage
                    className="shape particle1"
                    image={getImage(data.images?.[2].src)}
                    alt={data.images?.[2].alt}
                />
            )}
            {data?.images?.[3]?.src && (
                <GatsbyImage
                    className="shape particle2"
                    image={getImage(data.images?.[3].src)}
                    alt={data.images?.[3].alt}
                />
            )}
            <Container>
                <Row>
                    <Col lg={5} xl={6}>
                        <HeroContent>
                            {data?.headings?.[0] && (
                                <Title>{data.headings[0].content}</Title>
                            )}
                            {data?.texts?.[0] && (
                                <DecText>
                                    <span className="hr d-none d-xl-block"></span>
                                    {data.texts[0].content}
                                </DecText>
                            )}
                            <Form action="#">
                                <Input
                                    className="form-box"
                                    type="text"
                                    placeholder="https://yourwebsite.com"
                                />

                                {data?.buttons &&
                                    data.buttons.map(
                                        ({ id, content, ...props }) => (
                                            <Button key={id} {...props}>
                                                {content}
                                            </Button>
                                        )
                                    )}
                            </Form>
                            {data?.images?.[4]?.src && (
                                <GatsbyImage
                                    className="hero-image-four"
                                    image={getImage(data.images?.[4].src)}
                                    alt={data.images?.[4].alt}
                                />
                            )}
                        </HeroContent>
                    </Col>
                    <Col lg={7} xl={6}>
                        <HeroImg>
                            {data?.images?.[5]?.src && (
                                <GatsbyImage
                                    image={getImage(data.images?.[5].src)}
                                    alt={data.images?.[5].alt}
                                />
                            )}
                            <div className="position-absolute animate-two">
                                {data?.images?.[6]?.src && (
                                    <GatsbyImage
                                        image={getImage(data.images?.[6].src)}
                                        alt={data.images?.[6].alt}
                                    />
                                )}
                            </div>

                            <div className="position-absolute animate-three">
                                {data?.images?.[7]?.src && (
                                    <GatsbyImage
                                        image={getImage(data.images?.[7].src)}
                                        alt={data.images?.[7].alt}
                                    />
                                )}
                            </div>
                        </HeroImg>

                        <div className="hero-img-mobile">
                            {data?.images?.[8]?.src && (
                                <GatsbyImage
                                    image={getImage(data.images?.[8].src)}
                                    alt={data.images?.[8].alt}
                                />
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </HeroSection>
    );
};

Hero.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(
            PropTypes.shape({
                level: PropTypes.string,
                content: PropTypes.string,
            })
        ),
        texts: PropTypes.arrayOf(
            PropTypes.shape({
                content: PropTypes.string,
            })
        ),
        buttons: PropTypes.arrayOf(
            PropTypes.shape({
                content: PropTypes.string,
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

export default Hero;
