/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "@components/pagebreadcrumb";
import { graphql, Link } from "gatsby";
import { Row, Container, Col } from "react-bootstrap";
import Social, { SocialLink } from "../../components/shared/social/index";
import Categories from "../../components/widget/articles-categories-widget";
import Tags from "../../components/widget/articles-tags-widget";
import Author from "../../components/widget/articles-author-widget";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { DiscussionEmbed } from "disqus-react";
import { normalizedData } from "@utils/functions";
import {
    SingleBlogContent,
    PostDetailsContentWrap,
    BlogDetailsArea,
    PostDetailsBody,
    Thumb,
    SocialShareCard,
    Aside,
    Content,
    Title,
    MetaBox,
    CommentArea,
    CommentTitle,
} from "./style";

const SinglePosts = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    // Social Share
    const baseUrl = "https://pringo.com";

    // Disqus Comments add
    const disqusShorttname = "mitech-1";
    const disquscConfig = {
        identifier: data?.article?.id,
        title: data?.article?.title,
        url: baseUrl + "/" + pageContext.slug,
    };

    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title={data?.article?.title} pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Blog Details"
            />
            <BlogDetailsArea>
                <Container>
                    <Row>
                        <Col lg={4} md={4}>
                            <Aside>
                                <Author author={data?.article?.author} />
                                <Categories />
                                <Tags />
                            </Aside>
                        </Col>
                        <Col lg={8} md={8}>
                            <PostDetailsContentWrap>
                                <PostDetailsBody>
                                    <Thumb>
                                        <GatsbyImage
                                            image={getImage(
                                                data?.article?.image?.src
                                            )}
                                            alt={data?.article?.title}
                                        />
                                    </Thumb>
                                    <SocialShareCard>
                                        <ul>
                                            <li className="social-share-item">
                                                <i className="icofont-calendar"></i>
                                                <span>
                                                    {data?.article?.date}
                                                </span>
                                            </li>
                                            <li className="social-share-item">
                                                <i className="icofont-user-alt-7"></i>
                                                <span>
                                                    {
                                                        data?.article?.author
                                                            ?.name
                                                    }
                                                </span>
                                            </li>
                                        </ul>
                                        <div className="social-share-wrap">
                                            <span className="share mb-2">
                                                Share:
                                            </span>
                                            <Social
                                                sx={{
                                                    mt: "10px",
                                                }}
                                                space={10}
                                                size="sm"
                                                bgColor="bgWhite"
                                                border="border"
                                                shape="square"
                                            >
                                                <SocialLink
                                                    href={
                                                        "https://www.facebook.com/sharer/sharer.php?u=" +
                                                        baseUrl +
                                                        pageContext.slug
                                                    }
                                                >
                                                    <i className="icofont-facebook"></i>
                                                </SocialLink>
                                                <SocialLink
                                                    href={
                                                        "https://twitter.com/share?url=" +
                                                        baseUrl +
                                                        pageContext.slug +
                                                        "&text=" +
                                                        data?.article?.title +
                                                        "&via" +
                                                        "twitterHandle"
                                                    }
                                                >
                                                    <i className="icofont-twitter"></i>
                                                </SocialLink>
                                                <SocialLink href="https://www.linkedin.com/">
                                                    <i className="icofont-linkedin"></i>
                                                </SocialLink>
                                            </Social>
                                        </div>
                                    </SocialShareCard>
                                    <Content>
                                        <Title>{data?.article?.title}</Title>
                                        <SingleBlogContent
                                            dangerouslySetInnerHTML={{
                                                __html: data?.article?.content,
                                            }}
                                        />
                                        <MetaBox>
                                            <span className="meta-title">
                                                Tag:
                                            </span>
                                            {data?.article?.tags.map(
                                                (tag, i) => (
                                                    <Link
                                                        key={`tags-${tag.slug}`}
                                                        to={`/tags/${tag.slug}`}
                                                    >
                                                        {tag.title}
                                                        {i !==
                                                            data?.article?.tags
                                                                .length -
                                                                1 && ", "}
                                                    </Link>
                                                )
                                            )}
                                        </MetaBox>
                                    </Content>
                                    <CommentArea>
                                        <CommentTitle>Comments</CommentTitle>
                                        <DiscussionEmbed
                                            shortname={disqusShorttname}
                                            config={disquscConfig}
                                        />
                                    </CommentArea>
                                </PostDetailsBody>
                            </PostDetailsContentWrap>
                        </Col>
                    </Row>
                </Container>
            </BlogDetailsArea>
        </Layout>
    );
};

SinglePosts.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        article: PropTypes.shape({
            image: PropTypes.shape({
                src: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.shape({}),
                ]).isRequired,
                alt: PropTypes.string,
            }),
            tags: PropTypes.arrayOf(
                PropTypes.shape({
                    title: PropTypes.string,
                })
            ),
            categories: PropTypes.arrayOf(
                PropTypes.shape({
                    title: PropTypes.string,
                })
            ),
            alt: PropTypes.string,
            id: PropTypes.string,
            title: PropTypes.string,
            date: PropTypes.string,
            slug: PropTypes.string,
            content: PropTypes.string,
            author: PropTypes.shape({
                name: PropTypes.string,
                bio: PropTypes.string,
            }),
        }),
    }),
};

export const postQuery = graphql`
    query articleBySlug($slug: String!) {
        allGeneral {
            nodes {
                section
                id
                menu {
                    ...Menu
                }
                footer {
                    ...Footer
                }
            }
        }
        article(slug: { eq: $slug }) {
            id
            title
            slug
            title
            tags {
                title
                slug
            }
            categories {
                title
                slug
            }
            author {
                slug
                bio
                description
                name
                image {
                    src {
                        childImageSharp {
                            gatsbyImageData(
                                formats: WEBP
                                placeholder: TRACED_SVG
                                quality: 100
                            )
                        }
                    }
                    alt
                }
                socials {
                    icon
                    id
                    link
                    title
                }
            }
            date
            image {
                src {
                    childImageSharp {
                        gatsbyImageData(
                            formats: WEBP
                            placeholder: TRACED_SVG
                            quality: 100
                        )
                    }
                }
                alt
            }
            content
        }
    }
`;
export default SinglePosts;
