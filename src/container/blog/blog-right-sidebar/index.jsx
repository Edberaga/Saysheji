import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import ProfileCard from "../../../components/blog/profile-card";
import Categories from "../../../components/widget/articles-categories-widget";
import Tags from "../../../components/widget/articles-tags-widget";
import BlogCardTwo from "../../../components/blog/blog-card-two";
import { BlogGridSection, Aside } from "./style";
const BlogRightSidebar = ({ data }) => {
    return (
        <BlogGridSection>
            <Container>
                <Row className="gx-5">
                    <Col lg={8} md={8}>
                        <Row className="gx-5">
                            {data?.items &&
                                data?.items.map((blog, i) => {
                                    return (
                                        <Col lg={6} md={6} key={i}>
                                            <BlogCardTwo
                                                title={blog.title}
                                                thume_image={blog?.image?.src}
                                                body={blog.excerpt}
                                                date={blog.date}
                                                slug={blog.slug}
                                            />
                                        </Col>
                                    );
                                })}
                        </Row>
                    </Col>
                    <Col lg={4} md={4}>
                        <Aside>
                            <ProfileCard />
                            <Categories />
                            <Tags />
                        </Aside>
                    </Col>
                </Row>
            </Container>
        </BlogGridSection>
    );
};
BlogRightSidebar.propTypes = {
    data: PropTypes.shape({
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
export default BlogRightSidebar;
