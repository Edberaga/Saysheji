import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../../components/shared/button";
import { AboutBanner, Title, DescriptionText } from "./style";

const AboutUsBanner = () => {
    return (
        <AboutBanner className="box-container">
            <Link to="/" className="logo">
                <StaticImage
                    src="../../data/images/about/logo.png"
                    alt="logo_not_found"
                />
            </Link>
            <Title>We Are Different From Others.</Title>
            <DescriptionText>
                Call: <a href="tel:+8846897546">+60 13-668 3939</a>
            </DescriptionText>
            <Button path="/" size="medium" shape="rounded5">
                Contact Us <i className="icofont-rounded-double-right"></i>
            </Button>
        </AboutBanner>
    );
};

export default AboutUsBanner;
