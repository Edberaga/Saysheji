import PropTypes from "prop-types";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import {
    SingleTeam,
    Thumb,
    TeamContent,
    Title,
    Designation,
    TeamSocial,
    TeamSocialItem,
    TeamSocialLink,
} from "./style";
const TeamMember = ({ teamImage, title, designation, socials, level }) => {
    const image1 = getImage(teamImage);
    return (
        <SingleTeam>
            <Thumb>
                <GatsbyImage image={image1} alt={title} />
                <div className="social-hover">
                    <StaticImage
                        src="../../data/images/team/team-hover.png"
                        alt={title}
                    />
                </div>
                <TeamSocial className="socail-icon-hover">
                    {socials.map((item, i) => {
                        return (
                            <TeamSocialItem
                                key={i}
                                className="team-social-item"
                            >
                                <TeamSocialLink
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className={item.icon}></i>
                                </TeamSocialLink>
                            </TeamSocialItem>
                        );
                    })}
                </TeamSocial>
            </Thumb>
            <TeamContent>
                <Title as={level}>{title}</Title>
                <Designation>{designation}</Designation>
            </TeamContent>
        </SingleTeam>
    );
};
TeamMember.propTypes = {
    title: PropTypes.string,
    level: PropTypes.string,
    teamImage: PropTypes.object,
    designation: PropTypes.string,
    socials: PropTypes.array,
};
export default TeamMember;
