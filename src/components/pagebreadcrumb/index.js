import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { PageBreadcrumbWrap, PageTitleContent } from "./style";
import { StaticImage } from "gatsby-plugin-image";

const PageBreadcrumb = ({ title, crumbLabel, location, pageContext }) => {
    const {
        breadcrumb: { crumbs },
    } = pageContext;
    const customCrumbLabel = location.pathname.toLowerCase();
    const crumbLabelArr = customCrumbLabel.split("/");
    const label = crumbLabelArr[crumbLabelArr.length - 1];
    const labelArr = label.split("-");
    const disableLinks = [
        "/events",
        "/category",
        "/profile",
        "/date",
        "/tag",
        "/page",
        "/blog",
        "/blog/page",
        "/blogs",
        "/services",
    ];
    return (
        <PageBreadcrumbWrap>
            <div className="shape shape1">
                <StaticImage src="../../data/images/bread/1.png" alt="" />
            </div>
            <div className="shape shape2">
                <StaticImage src="../../data/images/bread/2.png" alt="" />
            </div>
            <Container>
                <PageTitleContent>
                    <Breadcrumb
                        title={title}
                        crumbs={crumbs}
                        crumbLabel={labelArr.join(" ")}
                        disableLinks={disableLinks}
                    />
                </PageTitleContent>
            </Container>
        </PageBreadcrumbWrap>
    );
};
PageBreadcrumb.propTypes = {
    title: PropTypes.string,
    crumbLabel: PropTypes.string,
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export default PageBreadcrumb;
