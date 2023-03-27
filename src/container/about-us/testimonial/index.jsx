import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import SectionTitle from "../../../components/title";
import Swiper, { SwiperSlide } from "@components/shared/swiper";
import Testimonial from "../../../components/testimonial";
import { StaticImage } from "gatsby-plugin-image";
import {
    TestimonialSection,
    TestimonialContentBox,
    ShapBgImg,
    ClientsImageBox,
    ClientsImage,
} from "./style";

const TestimonialArea = ({ data }) => {
    return (
        <TestimonialSection>
            {data?.section_title && (
                <SectionTitle
                    headingTitle={data?.section_title.title}
                    {...data.section_title}
                />
            )}
            <Container className="position-relative">
                <ClientsImageBox>
                    <ClientsImage>
                        <StaticImage
                            src="../../../data/images/testimonial/2.png"
                            alt="images-not_found"
                        />
                    </ClientsImage>
                    <ClientsImage>
                        <StaticImage
                            src="../../../data/images/testimonial/3.png"
                            alt="images-not_found"
                        />
                    </ClientsImage>
                    <ClientsImage>
                        <StaticImage
                            src="../../../data/images/testimonial/4.png"
                            alt="images-not_found"
                        />
                    </ClientsImage>
                    <ClientsImage>
                        <StaticImage
                            src="../../../data/images/testimonial/5.png"
                            alt="images-not_found"
                        />
                    </ClientsImage>
                    <ClientsImage>
                        <StaticImage
                            src="../../../data/images/testimonial/6.png"
                            alt="images-not_found"
                        />
                    </ClientsImage>
                    <ClientsImage>
                        <StaticImage
                            src="../../../data/images/testimonial/7.png"
                            alt="images-not_found"
                        />
                    </ClientsImage>
                </ClientsImageBox>
                <TestimonialContentBox>
                    <ShapBgImg>
                        <StaticImage
                            className="shape"
                            src="../../../data/images/testimonial/shape.png"
                            alt="images-not_found"
                        />
                    </ShapBgImg>
                    <Swiper
                        layout={{
                            nav: "testimonial-navigation",
                            dots: "testimonial-dots-style",
                        }}
                        navigation={{
                            nextEl: ".testimonial-slider-button-next",
                            prevEl: ".testimonial-slider-button-prev",
                        }}
                        slidesPerView={1}
                        spaceBetween={0}
                    >
                        {data?.items &&
                            data?.items.map((item, i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <Testimonial
                                            image={item.images[0].src}
                                            description={item.description}
                                            name={item.headings[0].content}
                                            designation={item.designation}
                                        />
                                    </SwiperSlide>
                                );
                            })}
                    </Swiper>
                </TestimonialContentBox>
            </Container>
        </TestimonialSection>
    );
};

TestimonialArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            title: PropTypes.string,
        }),
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
                images: PropTypes.arrayOf(
                    PropTypes.shape({
                        src: PropTypes.oneOfType([
                            PropTypes.string,
                            PropTypes.shape({}),
                        ]).isRequired,
                        alt: PropTypes.string,
                    })
                ),
                headings: PropTypes.arrayOf(
                    PropTypes.shape({
                        level: PropTypes.string,
                        content: PropTypes.string,
                    })
                ),
                description: PropTypes.string,
                designation: PropTypes.string,
            })
        ),
    }),
};
export default TestimonialArea;
