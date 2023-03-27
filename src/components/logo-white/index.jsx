import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { LogoImg } from "./style";

const LogoWhite = ({ logo, classCName }) => {
    return (
        <LogoImg>
            <Link to="/">
                <StaticImage
                    src="../../data/images/logo/logo-white.png"
                    alt="Pringo Logo Image"
                    title="Logo"
                />
            </Link>
        </LogoImg>
    );
};
LogoWhite.propTypes = {
    logo: PropTypes.string,
    classCName: PropTypes.string,
};
export default LogoWhite;
