/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import Social, { SocialLink } from "../../shared/social";
import FooterWidgetTitle from "../footer-widget-title";
import { FollowUsWidgetBox, FollowText } from "./style";

const FollowUsWidget = ({ followData }) => {
    return (
        <FollowUsWidgetBox>
            <FooterWidgetTitle title="Follow Us" />
            <FollowText>{followData.text}</FollowText>
            <Social
                sx={{
                    border: "1px solid #273581",
                    borderRight: "none",
                    display: "inline-block",
                }}
                space={0}
                size="md"
                bgColor="transparent"
                border="border-right"
            >
                {followData.socials.map((item) => (
                    <SocialLink key={item.id} href={item.link}>
                        <i className={item.icon}></i>
                    </SocialLink>
                ))}
            </Social>
        </FollowUsWidgetBox>
    );
};
FollowUsWidget.propTypes = {
    followData: PropTypes.shape({
        socials: PropTypes.arrayOf(PropTypes.shape({})),
        text: PropTypes.string,
    }),
};
export default FollowUsWidget;
