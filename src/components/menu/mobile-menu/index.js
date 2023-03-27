/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { Fragment } from "react";
import PropTypes from "prop-types";
import Button from "../../shared/button";
import Social, { SocialLink } from "../../shared/social/index";
import {
    getClosest,
    getSiblings,
    slideToggle,
    slideUp,
} from "../../../utils/mobile-nav-utils";
import {
    MobileMenuContent,
    Navbar,
    NavMunuUl,
    MobileNavitem,
    ButtonClose,
} from "./style";

const MobileNavMenu = ({ MobilemenuData, ofcanvasOpen, ofcanvasHandaler }) => {
    const MobileMenuArr = MobilemenuData;

    const onClickHandler = (e) => {
        const target = e.currentTarget;
        const parentEl = target.parentElement;
        if (
            parentEl?.classList.contains("menu-expand") ||
            target.classList.contains("menu-expand")
        ) {
            const element = target.classList.contains("icon")
                ? parentEl
                : target;
            const parent = getClosest(element, "li");
            const childNodes = parent.childNodes;
            const parentSiblings = getSiblings(parent);
            parentSiblings.forEach((sibling) => {
                const sibChildNodes = sibling.childNodes;
                sibChildNodes.forEach((child) => {
                    //console.log(child);
                    if (child.nodeName === "UL") {
                        slideUp(child, 500);
                    }
                });
            });
            childNodes.forEach((child) => {
                if (child.nodeName === "UL") {
                    slideToggle(child, 500);
                }
            });
        }
    };

    return (
        <MobileMenuContent
            className={`${ofcanvasOpen ? "mobile-menu-open" : ""}`}
        >
            <div
                className="OffCanvasContent"
                onClick={ofcanvasHandaler}
                onKeyDown={ofcanvasHandaler}
                role="button"
                tabIndex={0}
            />

            <Navbar className="site-mobile-menu">
                <ButtonClose
                    onClick={ofcanvasHandaler}
                    onKeyDown={ofcanvasHandaler}
                >
                    Close <i className="icofont-close"></i>
                </ButtonClose>
                <NavMunuUl>
                    {MobileMenuArr.map((menu) => {
                        const submenu = menu.submenu;
                        return (
                            <MobileNavitem
                                key={`menu-${menu.id}`}
                                className={`${
                                    !!submenu ? "has-submenu-dropdown" : ""
                                }`}
                            >
                                <Link activeClassName="active" to={menu.link}>
                                    {menu.text}
                                </Link>
                                {!!submenu && (
                                    <Fragment>
                                        <button
                                            className="menu-toggle menu-expand"
                                            onClick={onClickHandler}
                                            onKeyDown={onClickHandler}
                                        >
                                            <i className="icofont-rounded-down"></i>
                                        </button>
                                        <ul className="submenu-nav">
                                            {submenu.map((submenu, i) => {
                                                return (
                                                    <MobileNavitem
                                                        key={`submenu${i}`}
                                                    >
                                                        <Link to={submenu.link}>
                                                            {submenu.text}
                                                        </Link>
                                                    </MobileNavitem>
                                                );
                                            })}
                                        </ul>
                                    </Fragment>
                                )}
                            </MobileNavitem>
                        );
                    })}
                </NavMunuUl>

                <Social sx={{ mt: "30px" }} space={10} size="md" shape="square">
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

                <Button
                    sx={{
                        mt: "30px",
                    }}
                    size="large"
                    shape="rounded10"
                    path="/"
                >
                    Analyze Your Site
                    <i className="icofont-arrow-right"></i>
                </Button>
            </Navbar>
        </MobileMenuContent>
    );
};

MobileNavMenu.propTypes = {
    MobilemenuData: PropTypes.array,
    ofcanvasOpen: PropTypes.bool,
    ofcanvasHandaler: PropTypes.func,
};

export default MobileNavMenu;
