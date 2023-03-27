/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "../../../components/blog/blog-card";
import { LatestBlogSection } from "./style";
import SectionTitleTwo from "../../../components/title-two";
const LatestBlogArea = ({ data }) => {
    return (
        <LatestBlogSection>
            <Container>
                <Row className="gx-5">
                    <Col lg={6} md={12}>
                        <SectionTitleTwo
                            headingTitle={data?.section_title.title}
                            {...data.section_title}
                        />
                        {data?.itemsone &&
                            data?.itemsone.map((item, i) => {
                                return (
                                    <BlogCard
                                        key={i}
                                        variant="horizontal"
                                        title={item.title}
                                        author={item.author}
                                        date={item.date}
                                        slug={item.slug}
                                        image={item.image.src}
                                    />
                                );
                            })}
                    </Col>
                    <Col lg={6} md={12}>
                        {data?.itemstwo &&
                            data?.itemstwo.map((item, i) => {
                                return (
                                    <BlogCard
                                        key={i}
                                        variant="vertical"
                                        title={item.title}
                                        author={item.author}
                                        date={item.date}
                                        slug={item.slug}
                                        image={item.image.src}
                                    />
                                );
                            })}
                    </Col>
                </Row>
            </Container>
        </LatestBlogSection>
    );
};

LatestBlogArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            title: PropTypes.string,
        }),
        itemsone: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
                fields: PropTypes.shape({
                    slug: PropTypes.string,
                }),
                image: PropTypes.shape({
                    src: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.shape({}),
                    ]).isRequired,
                    alt: PropTypes.string,
                }),
                alt: PropTypes.string,
                title: PropTypes.string,
                author: PropTypes.string,
                date: PropTypes.string,
                slug: PropTypes.string,
            })
        ),
        itemstwo: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
                fields: PropTypes.shape({
                    slug: PropTypes.string,
                }),
                image: PropTypes.shape({
                    src: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.shape({}),
                    ]).isRequired,
                    alt: PropTypes.string,
                }),
                alt: PropTypes.string,
                title: PropTypes.string,
                author: PropTypes.string,
                date: PropTypes.string,
                slug: PropTypes.string,
            })
        ),
    }),
};
export default LatestBlogArea;
