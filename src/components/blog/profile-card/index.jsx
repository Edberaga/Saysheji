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
                        src="../../../data/images/blog/profile.png"
                        alt="images-not_found"
                    />
                </Link>
            </ProfileThumb>
            <ProfileContent>
                <Title>
                    <Link to="/">{"Marion Washington"}</Link>
                </Title>
                <Designation>Digital Strategist</Designation>
                <Social
                    sx={{ mt: "20px" }}
                    space={15}
                    size="md"
                    bgColor="bgWhite"
                    shape="square"
                >
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
            </ProfileContent>
        </ProfileCardBox>
    );
};
ProfileCard.propTypes = {
    title: PropTypes.string,
};
export default ProfileCard;
