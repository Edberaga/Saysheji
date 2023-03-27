import PropTypes from "prop-types";
import { Section, Title, DescriptionText } from "./style.jsx";
const SectionArea = ({ data }) => {
    return (
        <Section>
            {data?.headings && (
                <Title as={data?.headings[0].level}>
                    {data?.headings[0].content}
                </Title>
            )}

            {data?.items &&
                data?.items.map((item, i) => (
                    <DescriptionText key={i}>{item.desc}</DescriptionText>
                ))}
        </Section>
    );
};
SectionArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(
            PropTypes.shape({
                level: PropTypes.string,
                content: PropTypes.string,
            })
        ),
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: [PropTypes.string, PropTypes.number],
                alt: PropTypes.string,
                desc: PropTypes.string,
            })
        ),
    }),
};
export default SectionArea;
