import { Link } from "gatsby";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import Social, { SocialLink } from "../../../components/shared/social/index";
import {
    ProfileCardBox,
    ProfileThumb,
    ProfileContent,
    Title,
    Designation,
} from "./style";
const ProfileCard = ({ title }) => {
    return (
        <ProfileCardBox>
            <ProfileThumb className="blog-thumb">
                <Link to="/">
                    <StaticImage
                        src="../../../data/images/team/kasey.png"
                        alt="images-not_found"
                    />
                </Link>
            </ProfileThumb>
            <ProfileContent>
                <Title>
                    Kasey Fong
                </Title>
                <Designation>Creative Director</Designation>
                <Social
                    sx={{ mt: "20px" }}
                    space={15}
                    size="md"
                    bgColor="bgWhite"
                    shape="square"
                >
                    <SocialLink href="https://www.facebook.com/saysheji/">
                        <i className="icofont-facebook"></i>
                    </SocialLink>
                    <SocialLink href="https://www.instagram.com/kaseyfongkz/">
                        <i className="icofont-instagram"></i>
                    </SocialLink>
                    <SocialLink href="https://wa.link/ww95ke/">
                        <i className="icofont-whatsapp"></i>
                    </SocialLink>
                    <SocialLink href="https://www.linkedin.com/in/kaseyfongkz/">
                        <i className="icofont-linkedin"></i>
                    </SocialLink>
                </Social>
            </ProfileContent>
        </ProfileCardBox>
    );
};
ProfileCard.propTypes = {
    title: PropTypes.string,
};
export default ProfileCard;
