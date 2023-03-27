import PropTypes from "prop-types";
import { Title } from "./style";
const FooterWidgetTitle = ({ title }) => {
    return <Title>{title}</Title>;
};
FooterWidgetTitle.propTypes = {
    title: PropTypes.string,
};
export default FooterWidgetTitle;
