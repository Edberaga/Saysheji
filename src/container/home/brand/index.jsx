import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import Swiper, { SwiperSlide } from "@components/shared/swiper";
import SingleBrand from "../../../components/brand";
import { BrandSection, BrandBox, BrandTitle } from "./style";
const BrandArea = ({ data }) => {
    return (
        <BrandSection>
            <Container className="container-max">
                <Row>
                    <Col>
                        <BrandBox>
                            {data?.headings?.[0] && (
                                <BrandTitle
                                    dangerouslySetInnerHTML={{
                                        __html: data.headings[0].content,
                                    }}
                                />
                            )}
                            <Swiper
                                layout={{
                                    nav: "brand-navigation",
                                    dots: "brand-dots-style",
                                }}
                                navigation={{
                                    nextEl: ".brand-slider-button-next",
                                    prevEl: ".brand-slider-button-prev",
                                }}
                                slidesPerView={5}
                                spaceBetween={0}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 2,
                                    },
                                    480: {
                                        slidesPerView: 3,
                                    },
                                    768: {
                                        slidesPerView: 4,
                                    },
                                    992: {
                                        slidesPerView: 5,
                                    },
                                }}
                            >
                                {data?.items &&
                                    data?.items?.map((item, i) => {
                                        return (
                                            <SwiperSlide key={i}>
                                                <SingleBrand
                                                    brnadAffterImage={
                                                        item.images?.[0].src
                                                    }
                                                    brnadBeforeImage={
                                                        item.images?.[1].src
                                                    }
                                                    alt={item.images?.[0].alt}
                                                />
                                            </SwiperSlide>
                                        );
                                    })}
                            </Swiper>
                        </BrandBox>
                    </Col>
                </Row>
            </Container>
        </BrandSection>
    );
};
BrandArea.propTypes = {
    data: PropTypes.shape({
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
                images: PropTypes.arrayOf(
                    PropTypes.shape({
                        src: PropTypes.oneOfType([
                            PropTypes.string,
                            PropTypes.shape({}),
                        ]).isRequired,
                        alt: PropTypes.string,
                    })
                ),
                alt: PropTypes.string,
            })
        ),
    }),
};
export default BrandArea;
