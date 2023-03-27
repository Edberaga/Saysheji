import PropTypes from "prop-types";
import { ContactMediaList } from "./style";

const GetInTouchArea = ({ icon, title, content }) => {
    return (
        <ContactMediaList>
            <div className="icon">
                <span className={icon}></span>
            </div>
            <div className="content">
                <span className="text">{title}:</span>
                <a href="/" className="number">
                    {content}
                </a>
            </div>
        </ContactMediaList>
    );
};
GetInTouchArea.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    icon: PropTypes.string,
};
export default GetInTouchArea;
