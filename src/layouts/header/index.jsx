/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import HeaderTopArea from "../../components/header-top";
import React, { Fragment, useState } from "react";
import { Container } from "react-bootstrap";
import Logo from "../../components/logo";
import MainMenu from "../../components/menu/main-menu";
import Button from "../../components/shared/button";
import MobileNavMenu from "../../components/menu/mobile-menu";
import { useSticky } from "../../hooks";
import {
    HeaderWrap,
    HeaderBottomArea,
    ManimenuWrap,
    Menu,
    MobileMenuBtn,
} from "./style";

const Header = ({ data }) => {
    // Sticky Header
    const { sticky, headerRef, fixedRef } = useSticky();

    // OfCanvas Menu
    const [ofcanvasOpen, setOfcanvasOpen] = useState(false);

    // OfCanvas Menu Open & Remove
    const ofcanvasHandaler = () => {
        setOfcanvasOpen((prev) => !prev);
    };

    return (
        <HeaderWrap ref={headerRef}>
            <HeaderTopArea />
            <HeaderBottomArea ref={fixedRef} isSticky={sticky}>
                <Container className="container-max">
                    <ManimenuWrap>
                        <Logo />
                        <Menu>
                            <MainMenu allmenuData={data.menu} />
                            <Button
                                sx={{
                                    ml: ["0px", "0px", "0px", "40px", "80px"],
                                    display: ["none", "block", "block"],
                                }}
                                size="large"
                                shape="rounded10"
                                path="/"
                            >
                                Analyze Your Site
                                <i className="icofont-arrow-right"></i>
                            </Button>
                            <MobileMenuBtn
                                onClick={ofcanvasHandaler}
                                onKeyDown={ofcanvasHandaler}
                            >
                                <span className="line"></span>
                                <span className="line"></span>
                                <span className="line"></span>
                            </MobileMenuBtn>
                            <MobileNavMenu
                                MobilemenuData={data.menu}
                                ofcanvasOpen={ofcanvasOpen}
                                ofcanvasHandaler={ofcanvasHandaler}
                            />
                        </Menu>
                    </ManimenuWrap>
                </Container>
            </HeaderBottomArea>
        </HeaderWrap>
    );
};

Header.propTypes = {
    data: PropTypes.shape({
        menu: PropTypes.arrayOf(PropTypes.shape({})),
    }),
};

export default Header;
