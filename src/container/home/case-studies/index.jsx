import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import Swiper, { SwiperSlide } from "@components/shared/swiper";
import SectionTitle from "../../../components/title";
import CaseStudiesItem from "../../../components/case-studies-item";
import { CaseStudiesSection } from "./style";
const CaseStudiesArea = ({ data }) => {
    return (
        <CaseStudiesSection>
            <Container className="container-max-lg">
                {data?.section_title && (
                    <SectionTitle
                        headingTitle={data?.section_title.title}
                        {...data.section_title}
                    />
                )}
                <Swiper
                    layout={{
                        nav: "case-studies-navigation",
                        dots: "case-studies-dots-style",
                    }}
                    navigation={{
                        nextEl: ".case-studies-slider-button-next",
                        prevEl: ".case-studies-slider-button-prev",
                    }}
                    slidesPerView={3}
                    spaceBetween={30}
                    centeredSlides={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        480: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {data?.items &&
                        data.items?.map((post, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <CaseStudiesItem
                                        title={post.title}
                                        thumbImg={post.images[0].src}
                                        category={post.category}
                                        slug={post.slug}
                                    />
                                </SwiperSlide>
                            );
                        })}
                </Swiper>
                <div className="case-studies-slider-button">
                    <div className="case-studies-slider-button-prev">
                        <i className="icofont-rounded-double-left"></i>
                    </div>
                    <div className="case-studies-slider-button-next">
                        <i className="icofont-rounded-double-right"></i>
                    </div>
                </div>
            </Container>
        </CaseStudiesSection>
    );
};
CaseStudiesArea.propTypes = {
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
    }),
};

export default CaseStudiesArea;
