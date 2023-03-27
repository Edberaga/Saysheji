import styled, { themeGet, device } from "@theme/utils";

export const MobileMenuContent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1060;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s ease-in-out;
    .OffCanvasContent {
        background-color: rgba(0, 0, 0, 0.8);
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
        visibility: hidden;
        height: 100%;
        width: 100%;
        z-index: 2;
    }
    &.mobile-menu-open {
        visibility: visible;
        opacity: 1;
        .OffCanvasContent {
            opacity: 1;
            visibility: visible;
        }
        .site-mobile-menu {
            transform: translateX(0%);
        }
    }
`;

export const ButtonClose = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 16px;
    align-items: center;
    color: ${themeGet("colors.black")};
    i {
        font-size: 28px;
        color: ${themeGet("colors.primary")};
    }
`;

export const Navbar = styled.div`
    width: 310px;
    background-color: #fff;
    height: 100%;
    padding: 30px 30px;
    position: relative;
    overflow-y: auto;
    transform: translateX(-100%);
    width: 310px;
    z-index: 9;
    transition: all 0.4s ease-in-out;
    ${device.small} {
        width: 380px;
    }
`;

export const NavMunuUl = styled.ul`
    margin-top: 50px;
`;

export const MobileNavitem = styled.li`
    border-bottom: 1px solid #f1f1f1;
    position: relative;

    &:last-child {
        border-bottom: none;
    }
    a {
        padding: 12px 0px;
        display: block;
        width: 100%;
        font-size: 17px;
        font-weight: 600;
        line-height: 22px;
        position: relative;
        color: ${themeGet("colors.primary")};
        &:hover {
            color: ${themeGet("colors.black")};
        }
    }
    &.has-submenu-dropdown {
        .menu-toggle {
            position: absolute;
            top: 12px;
            right: 0;
            border: none;
            justify-content: center;
            cursor: pointer;
            color: #333;
            background-color: transparent;
            padding: 4px 20px;
        }
        .submenu-nav {
            display: none;
            border-top: 1px solid #f1f1f1;
            padding-left: 15px;
        }
    }
`;
