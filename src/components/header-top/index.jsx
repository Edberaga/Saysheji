/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import Social, { SocialLink } from "../../components/shared/social/index";
import {
    HeaderTop,
    NoticeText,
    HeaderTopRight,
    CallToAction,
    SelectLanguage,
    FormSelect,
    FormSelectList,
    NavItem,
} from "./style";
const HeaderTopArea = () => {
    return (
        <HeaderTop>
            <Container className="container-max">
                <Row className="align-items-center">
                    <Col lg={4} md={4} sm={6} xs={8}>
                        <Social
                            sx={{ mt: "0px", borderLeft: "1px solid #273581" }}
                            space={0}
                            size="lg"
                            bgColor="transparent"
                            border="border-right"
                        >
                            <SocialLink href="https://www.facebook.com/">
                                <i className="icofont-facebook"></i>
                            </SocialLink>
                            <SocialLink href="https://twitter.com/home/">
                                <i className="icofont-twitter"></i>
                            </SocialLink>
                            <SocialLink href="https://www.skype.com/">
                                <i className="icofont-skype"></i>
                            </SocialLink>
                            <SocialLink href="https://www.linkedin.com/">
                                <i className="icofont-linkedin"></i>
                            </SocialLink>
                        </Social>
                    </Col>

                    <Col lg={4} md={4} className="d-md-block d-none">
                        <NoticeText>
                            Let us grow your website traffic.
                        </NoticeText>
                    </Col>

                    <Col lg={4} md={4} sm={6} xs={4}>
                        <HeaderTopRight>
                            <CallToAction
                                sx={{
                                    pl: "20px",
                                    borderLeft: "1px solid #273581",
                                }}
                            >
                                Cell: <a href="tel:0123456789">0123456789</a>
                            </CallToAction>
                            <SelectLanguage>
                                <FormSelect>
                                    <NavItem>
                                        <Link to="/">English</Link>
                                        <FormSelectList className="language-ul">
                                            <NavItem>
                                                <Link to="/">English</Link>
                                            </NavItem>
                                            <NavItem>
                                                <Link to="/">Français</Link>
                                            </NavItem>
                                        </FormSelectList>
                                    </NavItem>
                                </FormSelect>
                            </SelectLanguage>
                        </HeaderTopRight>
                    </Col>
                </Row>
            </Container>
        </HeaderTop>
    );
};

export default HeaderTopArea;
