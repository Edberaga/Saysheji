import PropTypes from "prop-types";
import FooterWidgetTitle from "../footer-widget-title";
import { ServiceMenuWidgetBox, ServiceUl, NavList, NavLink } from "./style";

const ServiceMenuWidget = ({ allServicesData }) => {
    return (
        <ServiceMenuWidgetBox>
            <FooterWidgetTitle title={allServicesData.title} />
            <ServiceUl>
                {allServicesData.list.map((item) => (
                    <NavList key={item.id}>
                        <NavLink href={item.link}>
                            <i className="icofont-rounded-double-right"></i>
                            {item.text}
                        </NavLink>
                    </NavList>
                ))}
            </ServiceUl>
        </ServiceMenuWidgetBox>
    );
};
ServiceMenuWidget.propTypes = {
    allServicesData: PropTypes.shape({
        list: PropTypes.arrayOf(PropTypes.shape({})),
        title: PropTypes.string,
    }),
};
export default ServiceMenuWidget;
