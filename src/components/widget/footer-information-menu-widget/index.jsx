import PropTypes from "prop-types";
import FooterWidgetTitle from "../footer-widget-title";
import { InformationMenuWidgetBox, ServiceUl, NavList, NavLink } from "./style";

const InformationMenuWidget = ({ informationData }) => {
    return (
        <InformationMenuWidgetBox>
            <FooterWidgetTitle title={informationData.title} />
            <ServiceUl>
                {informationData.list.map((item) => (
                    <NavList key={item.id}>
                        <NavLink href={item.link}>
                            <i className="icofont-rounded-double-right"></i>
                            {item.text}
                        </NavLink>
                    </NavList>
                ))}
            </ServiceUl>
        </InformationMenuWidgetBox>
    );
};
InformationMenuWidget.propTypes = {
    informationData: PropTypes.shape({
        list: PropTypes.arrayOf(PropTypes.shape({})),
        title: PropTypes.string,
    }),
};
export default InformationMenuWidget;
