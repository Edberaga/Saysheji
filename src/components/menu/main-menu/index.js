import { Link } from "gatsby";
import PropTypes from "prop-types";
import { HeaderNavigationArea, Navbar, Navitem } from "./style";

const MainMenu = ({ allmenuData }) => {
    const menuarr = allmenuData;
    return (
        <HeaderNavigationArea>
            <Navbar className="main-menu">
                {menuarr.map((menu) => {
                    const submenu = menu.submenu;
                    return (
                        <Navitem
                            key={`menu-${menu.id}`}
                            className={`${!!submenu ? "has-submenu" : ""}`}
                        >
                            <Link activeClassName="active" to={menu.link}>
                                {menu.text}
                            </Link>
                            {!!submenu && (
                                <ul className="submenu-nav">
                                    {submenu.map((submenu, i) => {
                                        return (
                                            <li key={`submenu${i}`}>
                                                <Link to={submenu.link}>
                                                    {submenu.text}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </Navitem>
                    );
                })}
            </Navbar>
        </HeaderNavigationArea>
    );
};

MainMenu.propTypes = {
    allmenuData: PropTypes.array,
};

export default MainMenu;
